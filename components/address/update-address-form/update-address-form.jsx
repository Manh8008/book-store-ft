'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { AddressSchema } from '@/schemas'
import { Button } from '@/components/ui/button'
import { useUser } from '@/context/user-context'
import addressApiRequest from '@/apiRequests/address'
import styles from './update-address-form.module.scss'

const cx = classNames.bind(styles)

const UpdateAddressForm = ({ addressId }) => {
    const [provinces, setProvinces] = useState([])
    const [districts, setDistricts] = useState([])
    const [wards, setWards] = useState([])
    const [isAddressDefault, setAddressDefault] = useState('')

    const [province, setProvince] = useState('')
    const [district, setDistrict] = useState('')
    const [ward, setWard] = useState('')

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        watch
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

    const isDefault = watch('default') == 1

    // Lấy danh sách tỉnh
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

    // Lấy danh sách quận dựa vào tỉnh
    useEffect(() => {
        const fetchDistricts = async () => {
            if (!province) return
            try {
                const provinceCode = provinces.find(
                    (p) => p.province_name === province
                )?.province_id

                if (provinceCode) {
                    const response = await fetch(
                        `https://vapi.vnappmob.com/api/province/district/${provinceCode}`
                    )
                    const data = await response.json()
                    setDistricts(data?.results || [])
                }
            } catch (error) {
                console.error('Error fetching districts:', error)
            }
        }
        fetchDistricts()
    }, [province, provinces])

    // Lấy danh sách xã dựa vào quận
    useEffect(() => {
        const fetchWards = async () => {
            if (!district) return
            try {
                const districtCode = districts.find(
                    (d) => d.district_name === district
                )?.district_id

                if (districtCode) {
                    const response = await fetch(
                        `https://vapi.vnappmob.com/api/province/ward/${districtCode}`
                    )
                    const data = await response.json()
                    setWards(data?.results || [])
                }
            } catch (error) {
                console.error('Error fetching wards:', error)
            }
        }
        fetchWards()
    }, [district, districts])

    // Lấy thông tin địa chỉ hiện tại
    useEffect(() => {
        const fetchAddressById = async () => {
            const result = await addressApiRequest.getAddressById(addressId)

            //Set để check xem có phải là địa chỉ mặc định không.
            setAddressDefault(result.payload.data.default)

            if (result?.payload?.data) {
                const addressData = result.payload.data

                setValue('name', addressData.name)
                setValue('phone', addressData.phone)
                setValue('address_line', addressData.address_line)
                setValue('default', addressData.default ? true : false)
                setValue('province', addressData.province)
                setValue('district', addressData.district)
                setValue('town', addressData.town)

                setProvince(addressData.province)
                setDistrict(addressData.district)
                setWard(addressData.town)
            }
        }
        if (addressId) fetchAddressById()
    }, [addressId, setValue])

    const onSubmit = async (values) => {
        try {
            const selectedProvince = provinces.find((p) => p.province_name === province)
            const selectedDistrict = districts.find((d) => d.district_name === district)
            const selectedWard = wards.find((w) => w.ward_name === ward)

            values.province = selectedProvince?.province_name || ''
            values.district = selectedDistrict?.district_name || ''
            values.town = selectedWard?.ward_name || ''
            values.provinceCode = selectedProvince?.province_id || ''
            values.districtCode = selectedDistrict?.district_id || ''
            values.townCode = selectedWard?.ward_id || ''
            values.default = isDefault ? 1 : 0
            const result = await addressApiRequest.updateAddress(addressId, values)

            if (result.status === 200) {
                // const updatedAddress = { ...values, id: addressId }

                // setUserData((prevState) => {
                //     const updatedAddressList = prevState.address.map((address) => {
                //         return String(address.id) === String(addressId) ? updatedAddress : address
                //     })
                //     return {
                //         ...prevState,
                //         address: updatedAddressList
                //     }
                // })

                window.location.href = '/customer/address'
            }
        } catch (error) {
            console.error('Lỗi khi cập nhật địa chỉ:', error)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={cx('form-container')}>
            <h2 className={cx('title')}>Chỉnh sửa địa chỉ</h2>

            {/* Họ và tên */}
            <div className={cx('form-group')}>
                <label>Họ và tên:</label>
                <input type="text" {...register('name')} className={cx('input')} />
                {errors.name && <p className={cx('error')}>{errors.name.message}</p>}
            </div>

            {/* Số điện thoại */}
            <div className={cx('form-group')}>
                <label>Số điện thoại:</label>
                <input type="text" {...register('phone')} className={cx('input')} />
                {errors.phone && <p className={cx('error')}>{errors.phone.message}</p>}
            </div>

            {/* Tỉnh */}
            <div className={cx('form-group')}>
                <label>Tỉnh/Thành phố:</label>
                <select
                    {...register('province')}
                    className={cx('select')}
                    onChange={(e) => {
                        setProvince(e.target.value)
                        setDistrict('')
                        setWard('')
                    }}
                    value={province}
                >
                    <option value="">Chọn tỉnh/thành phố</option>
                    {provinces.map((province) => (
                        <option key={province.province_id} value={province.province_name}>
                            {province.province_name}
                        </option>
                    ))}
                </select>
                {errors.province && <p className={cx('error')}>{errors.province.message}</p>}
            </div>

            {/* Quận */}
            <div className={cx('form-group')}>
                <label>Quận/Huyện:</label>
                <select
                    {...register('district')}
                    className={cx('select')}
                    onChange={(e) => {
                        setDistrict(e.target.value)
                        setWard('')
                    }}
                    value={district}
                >
                    <option value="">Chọn quận/huyện</option>
                    {districts.map((district) => (
                        <option key={district.district_id} value={district.district_name}>
                            {district.district_name}
                        </option>
                    ))}
                </select>
                {errors.district && <p className={cx('error')}>{errors.district.message}</p>}
            </div>

            {/* Xã */}
            <div className={cx('form-group')}>
                <label>Phường/Xã:</label>
                <select
                    {...register('town')}
                    className={cx('select')}
                    onChange={(e) => {
                        setWard(e.target.value)
                    }}
                    value={ward}
                >
                    <option value="">Chọn phường/xã</option>
                    {wards.map((ward) => (
                        <option key={ward.ward_id} value={ward.ward_name}>
                            {ward.ward_name}
                        </option>
                    ))}
                </select>
                {errors.town && <p className={cx('error')}>{errors.town.message}</p>}
            </div>

            {/* Địa chỉ cụ thể */}
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
            {isAddressDefault == 0 && (
                <div className={cx('form-group')}>
                    <label>
                        <input type="checkbox" {...register('default')} />
                        Đặt làm địa chỉ mặc định
                    </label>
                </div>
            )}

            {/* Nút cập nhật */}
            <Button primary className={cx('submit-button')}>
                Cập nhật
            </Button>
        </form>
    )
}

export default UpdateAddressForm
