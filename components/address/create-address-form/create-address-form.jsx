'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect, startTransition } from 'react'
import classNames from 'classnames/bind'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { AddressSchema } from '@/schemas'
import addressApiRequest from '@/apiRequests/address'
import { ToastError } from '@/components/ui/ToastError/ToastError'
import styles from './create-address-form.module.scss'
import { Button } from '@/components/ui/button'
import { useUser } from '@/context/user-context'
import { Input } from '@/components/ui/input'
import { handleHttpError } from '@/lib/utils'

const cx = classNames.bind(styles)

const AddAddressForm = () => {
    const { userData, setUserData } = useUser()
    const router = useRouter()

    const [provinces, setProvinces] = useState([])
    const [districts, setDistricts] = useState([])
    const [wards, setWards] = useState([])
    const [province, setProvince] = useState('')
    const [district, setDistrict] = useState('')
    const [ward, setWard] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

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
            city: '',
            town: '',
            district: '',
            province: '',
            townCode: '',
            districtCode: '',
            provinceCode: '',
            address_line: '',
            default: false
        }
    })

    const isDefault = watch('default')

    useEffect(() => {
        const fetchProvinces = async () => {
            try {
                const response = await fetch('/api/provinces')
                const data = await response.json()
                setProvinces(data?.results)
            } catch (error) {
                console.error(error)
            }
        }
        fetchProvinces()
    }, [])

    useEffect(() => {
        const fetchDistricts = async () => {
            try {
                const result = await addressApiRequest.getDistricts(province)
                setDistricts(result?.results || [])
            } catch (error) {
                console.error(error)
            }
        }

        if (province) fetchDistricts()
    }, [province])

    useEffect(() => {
        const fetchWards = async () => {
            try {
                const result = await addressApiRequest.getWards(district)
                setWards(result?.results || [])
            } catch (error) {
                console.error(error)
            }
        }

        if (district) fetchWards()
    }, [district])

    const onSubmit = async (values) => {
        if (loading) return
        setLoading(true)
        try {
            const selectedProvince = provinces.find((p) => p.province_id === province)
            const selectedDistrict = districts.find((d) => d.district_id === district)
            const selectedWard = wards.find((w) => w.ward_id === ward)

            const submitData = {
                ...values,
                province: selectedProvince?.province_name || '',
                provinceCode: selectedProvince?.province_id || '',
                district: selectedDistrict?.district_name || '',
                districtCode: selectedDistrict?.district_id || '',
                town: selectedWard?.ward_name || '',
                townCode: selectedWard?.ward_id || '',
                default: isDefault ? 1 : 0
            }

            const result = await addressApiRequest.addAddress(submitData)

            if (result.status === 200 && result.payload) {
                const newAddress = result.payload.data

                startTransition(() => {
                    setUserData((prev) => {
                        const updatedAddresses = prev.address.map((addr) => ({
                            ...addr,
                            default: isDefault ? 0 : addr.default
                        }))

                        updatedAddresses.push(newAddress)

                        return {
                            ...prev,
                            address: updatedAddresses
                        }
                    })

                    router.push('/customer/address')
                })
            }
        } catch (error) {
            handleHttpError(error, setError)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <ToastError errorMessage={error} />
            <form onSubmit={handleSubmit(onSubmit)} className={cx('form-container')}>
                <h2 className={cx('title')}>Thêm địa chỉ mới</h2>
                <div className={cx('form-group')}>
                    <label>Họ và tên:</label>
                    <Input type="text" {...register('name')} className={cx('input')} />
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
                            setProvince(e.target.value)
                            setValue('province', e.target.value)

                            const selectedProvince = provinces.find(
                                (province) => province.province_id === e.target.value
                            )
                            setValue(
                                'provinceCode',
                                selectedProvince ? selectedProvince.province_id : ''
                            )
                        }}
                        value={province}
                    >
                        <option value="">Chọn tỉnh/thành phố</option>
                        {provinces?.map((province) => (
                            <option key={province?.province_id} value={province?.province_id}>
                                {province?.province_name}
                            </option>
                        ))}
                    </select>
                    {errors.province && <p className={cx('error')}>{errors.province.message}</p>}
                </div>
                <div className={cx('form-group')}>
                    <label>Quận huyện:</label>
                    <select
                        {...register('district')}
                        className={cx('select')}
                        onChange={(e) => {
                            setDistrict(e.target.value)
                            setValue('district', e.target.value)

                            const selectedDistrict = districts.find(
                                (district) => district.district_id === e.target.value
                            )
                            setValue(
                                'districtCode',
                                selectedDistrict ? selectedDistrict.district_id : ''
                            )
                        }}
                        value={district}
                    >
                        <option value="">Chọn quận/huyện</option>
                        {districts.map((district) => (
                            <option key={district.district_id} value={district.district_id}>
                                {district.district_name}
                            </option>
                        ))}
                    </select>
                    {errors.district && <p className={cx('error')}>{errors.district.message}</p>}
                </div>

                <div className={cx('form-group')}>
                    <label>Phường/xã:</label>
                    <select
                        {...register('town')}
                        className={cx('select')}
                        onChange={(e) => {
                            const selectedWard = wards.find(
                                (ward) => ward.ward_id === e.target.value
                            )
                            setWard(e.target.value)
                            setValue('town', e.target.value)

                            const selectedProvince = provinces.find(
                                (province) => province.province_id === province
                            )

                            setValue(
                                'provinceCode',
                                selectedProvince ? selectedProvince.province_id : ''
                            )
                            setValue(
                                'provinceName',
                                selectedProvince ? selectedProvince.province_name : ''
                            )
                        }}
                        value={ward}
                    >
                        <option value="">Chọn phường/xã</option>
                        {wards.map((ward) => (
                            <option key={ward.ward_id} value={ward.ward_id}>
                                {ward.ward_name}
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

                <div className={cx('form-group')}>
                    <label>
                        <input
                            type="checkbox"
                            {...register('default')}
                            className={cx('checkbox')}
                        />
                        Đặt làm địa chỉ mặc định
                    </label>
                </div>

                <Button primary type="submit" className={cx('submit-btn')} disabled={loading}>
                    Lưu địa chỉ
                </Button>
            </form>
        </>
    )
}

export default AddAddressForm
