'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { AddressSchema } from '@/schemas'
import { Button } from '@/components/ui/button'
import addressApiRequest from '@/apiRequests/address'
import styles from './update-address-form.module.scss'
import { handleHttpError } from '@/lib/utils'

const cx = classNames.bind(styles)

const UpdateAddressForm = ({ addressId }) => {
    const [provinces, setProvinces] = useState([])
    const [districts, setDistricts] = useState([])
    const [wards, setWards] = useState([])

    // 2. State quản lý địa chỉ đang chọn
    const [province, setProvince] = useState('')
    const [district, setDistrict] = useState('')
    const [ward, setWard] = useState('')

    // 3. State quản lý trạng thái
    const [isAddressDefault, setAddressDefault] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    // 4. Khởi tạo form với React Hook Form
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(AddressSchema),
        defaultValues: {
            name: '',
            phone: '',
            province: '',
            district: '',
            town: '',
            address_line: '',
            provinceCode: '',
            districtCode: '',
            townCode: '',
            default: false
        }
    })

    // 5. Xử lý khi checkbox địa chỉ mặc định thay đổi
    const handleDefaultChange = (e) => {
        setAddressDefault(e.target.checked)
        setValue('default', e.target.checked)
    }

    // 6. Load danh sách tỉnh/thành phố khi component mount
    useEffect(() => {
        const fetchProvinces = async () => {
            try {
                const response = await fetch('/api/provinces')
                const data = await response.json()
                setProvinces(data?.results || [])
            } catch (error) {
                console.error('Error fetching provinces:', error)
            }
        }
        fetchProvinces()
    }, [])

    // 7. Load thông tin địa chỉ cần sửa
    useEffect(() => {
        const fetchAddressById = async () => {
            try {
                const result = await addressApiRequest.getAddressById(addressId)
                const addressData = result.payload.data

                // Cập nhật trạng thái địa chỉ mặc định
                setAddressDefault(addressData.default === 1)

                if (addressData) {
                    // Cập nhật thông tin cơ bản
                    setValue('name', addressData.name)
                    setValue('phone', addressData.phone)
                    setValue('address_line', addressData.address_line)
                    setValue('default', addressData.default === 1)

                    // Cập nhật và load thông tin tỉnh/thành
                    if (addressData.provinceCode) {
                        setProvince(addressData.provinceCode)
                        setValue('province', addressData.province)
                        setValue('provinceCode', addressData.provinceCode)

                        // Load danh sách quận/huyện
                        const districtsResult = await addressApiRequest.getDistricts(
                            addressData.provinceCode
                        )
                        setDistricts(districtsResult?.results || [])
                    }

                    if (addressData.districtCode) {
                        setDistrict(addressData.districtCode)
                        setValue('district', addressData.district)
                        setValue('districtCode', addressData.districtCode)

                        // Load danh sách phường/xã
                        const wardsResult = await addressApiRequest.getWards(
                            addressData.districtCode
                        )
                        setWards(wardsResult?.results || [])
                    }

                    if (addressData.townCode) {
                        setWard(addressData.townCode)
                        setValue('town', addressData.town)
                        setValue('townCode', addressData.townCode)
                    }
                }
            } catch (error) {
                console.error(error)
            }
        }
        if (addressId) fetchAddressById()
    }, [addressId, setValue])

    // Thêm useEffect để load districts khi province thay đổi
    useEffect(() => {
        const fetchDistricts = async () => {
            if (province) {
                try {
                    const districtsResult = await addressApiRequest.getDistricts(province)
                    setDistricts(districtsResult?.results || [])
                } catch (error) {
                    console.error('Error fetching districts:', error)
                }
            } else {
                setDistricts([])
            }
        }
        fetchDistricts()
    }, [province])

    // Thêm useEffect để load wards khi district thay đổi
    useEffect(() => {
        const fetchWards = async () => {
            if (district) {
                try {
                    const wardsResult = await addressApiRequest.getWards(district)
                    setWards(wardsResult?.results || [])
                } catch (error) {
                    console.error('Error fetching wards:', error)
                }
            } else {
                setWards([])
            }
        }
        fetchWards()
    }, [district])

    // 8. Xử lý khi submit form
    const onSubmit = async (values) => {
        console.log(values)

        if (loading) return
        setLoading(true)

        try {
            // Lấy thông tin địa chỉ đã chọn
            const selectedProvince = provinces.find((p) => p.province_id === province)
            const selectedDistrict = districts.find((d) => d.district_id === district)
            const selectedWard = wards.find((w) => w.ward_id === ward)

            // Tạo dữ liệu gửi đi
            const submitData = {
                ...values,
                province: selectedProvince?.province_name || '',
                district: selectedDistrict?.district_name || '',
                town: selectedWard?.ward_name || '',
                provinceCode: selectedProvince?.province_id || '',
                districtCode: selectedDistrict?.district_id || '',
                townCode: selectedWard?.ward_id || '',
                default: isAddressDefault ? true : Boolean(values.default) // Chuyển đổi sang boolean cho BE
            }

            const result = await addressApiRequest.updateAddress(addressId, submitData)

            if (result.status === 200) {
                window.location.href = '/customer/address'
            }
        } catch (error) {
            handleHttpError(error, setError)
        } finally {
            setLoading(false)
        }
    }

    // 9. Render form
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={cx('form-container')}>
            <h2 className={cx('title')}>Chỉnh sửa địa chỉ</h2>

            <div className={cx('form-group')}>
                <label>Họ và tên:</label>
                <input type="text" {...register('name')} className={cx('input')} />
                {errors.name && <p className={cx('error')}>{errors.name.message}</p>}
            </div>

            <div className={cx('form-group')}>
                <label>Số điện thoại:</label>
                <input type="text" {...register('phone')} className={cx('input')} />
                {errors.phone && <p className={cx('error')}>{errors.phone.message}</p>}
            </div>

            <div className={cx('form-group')}>
                <label>Tỉnh/Thành phố:</label>
                <select
                    {...register('province')}
                    className={cx('select')}
                    onChange={(e) => {
                        const selectedProvince = provinces.find(
                            (p) => p.province_id === e.target.value
                        )
                        setProvince(e.target.value)
                        setValue('province', selectedProvince?.province_name || '')
                        setValue('provinceCode', selectedProvince?.province_id || '')

                        // Reset district và ward
                        setDistrict('')
                        setWard('')
                        setValue('district', '')
                        setValue('districtCode', '')
                        setValue('town', '')
                        setValue('townCode', '')
                        setDistricts([])
                        setWards([])
                    }}
                    value={province}
                >
                    <option value="">Chọn tỉnh/thành phố</option>
                    {provinces.map((p) => (
                        <option key={p.province_id} value={p.province_id}>
                            {p.province_name}
                        </option>
                    ))}
                </select>
                {errors.province && <p className={cx('error')}>{errors.province.message}</p>}
            </div>

            <div className={cx('form-group')}>
                <label>Quận/Huyện:</label>
                <select
                    {...register('district')}
                    className={cx('select')}
                    onChange={(e) => {
                        const selectedDistrict = districts.find(
                            (d) => d.district_id === e.target.value
                        )
                        setDistrict(e.target.value)
                        setValue('district', selectedDistrict?.district_name || '')
                        setValue('districtCode', selectedDistrict?.district_id || '')

                        // Reset ward
                        setWard('')
                        setValue('town', '')
                        setValue('townCode', '')
                        setWards([])
                    }}
                    value={district}
                >
                    <option value="">Chọn quận/huyện</option>
                    {districts.map((d) => (
                        <option key={d.district_id} value={d.district_id}>
                            {d.district_name}
                        </option>
                    ))}
                </select>
                {errors.district && <p className={cx('error')}>{errors.district.message}</p>}
            </div>

            <div className={cx('form-group')}>
                <label>Phường/Xã:</label>
                <select
                    {...register('town')}
                    className={cx('select')}
                    onChange={(e) => {
                        const selectedWard = wards.find((w) => w.ward_id === e.target.value)
                        setWard(e.target.value)
                        setValue('town', selectedWard?.ward_name || '')
                        setValue('townCode', selectedWard?.ward_id || '')
                    }}
                    value={ward}
                >
                    <option value="">Chọn phường/xã</option>
                    {wards.map((w) => (
                        <option key={w.ward_id} value={w.ward_id}>
                            {w.ward_name}
                        </option>
                    ))}
                </select>
                {errors.town && <p className={cx('error')}>{errors.town.message}</p>}
            </div>

            <div className={cx('form-group')}>
                <label>Địa chỉ:</label>
                <textarea
                    {...register('address_line')}
                    className={cx('textarea')}
                    placeholder="Nhập địa chỉ cụ thể"
                ></textarea>
                {errors.address_line && (
                    <p className={cx('error')}>{errors.address_line.message}</p>
                )}
            </div>
            {!isAddressDefault ? (
                <div className={cx('form-group')}>
                    <label>
                        <input
                            type="checkbox"
                            {...register('default')}
                            onChange={handleDefaultChange}
                        />
                        Đặt làm địa chỉ mặc định
                    </label>
                </div>
            ) : (
                <div className={cx('form-group')}>
                    <label>
                        <input type="checkbox" checked disabled />
                        Địa chỉ mặc định
                    </label>
                    <input type="hidden" name="default" value="1" />
                </div>
            )}

            <Button primary className={cx('submit-button')}>
                Cập nhật
            </Button>
        </form>
    )
}

export default UpdateAddressForm
