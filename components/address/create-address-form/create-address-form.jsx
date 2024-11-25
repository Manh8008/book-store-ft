'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { AddressSchema } from '@/schemas'
import addressApiRequest from '@/apiRequests/address'
import { ToastError } from '@/components/ui/ToastError'
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
                handleHttpError(error, setError)
            }
        }
        fetchProvinces()
    }, [])

    useEffect(() => {
        const fetchDistrict = async () => {
            try {
                const response = await fetch(
                    `https://vapi.vnappmob.com/api/province/district/${province}`
                )
                const data = await response.json()
                setDistricts(data?.results)
            } catch (error) {
                handleHttpError(error, setError)
            }
        }

        if (province) fetchDistrict()
    }, [province])

    useEffect(() => {
        const fetchWard = async () => {
            try {
                const response = await fetch(
                    `https://vapi.vnappmob.com/api/province/ward/${district}`
                )
                const data = await response.json()
                setWards(data?.results)
            } catch (error) {
                handleHttpError(error, setError)
            }
        }

        if (district) fetchWard()
    }, [district])

    const onSubmit = async (values) => {
        try {
            values.province = provinces.find((p) => p.province_id === province)?.province_name
            values.district = districts.find((d) => d.district_id === district)?.district_name
            values.town = wards.find((w) => w.ward_id === ward)?.ward_name
            values.default = isDefault ? 1 : 0

            const result = await addressApiRequest.addAddress(values)

            if (result.status === 200 && result.payload) {
                const newAddress = result.payload.data

                const updatedAddressList = [...userData.address, newAddress]

                if (values.default) {
                    updatedAddressList.forEach(
                        (addr) => (addr.default = addr.id === newAddress.id ? 1 : 0)
                    )
                }

                setUserData({
                    ...userData,
                    address: updatedAddressList
                })

                router.push('/customer/address')
            } else {
                handleHttpError(result, setError)
            }
        } catch (error) {
            handleHttpError(error, setError)
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
                            setWard(e.target.value)
                            setValue('town', e.target.value)
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

                <Button primary>Lưu địa chỉ</Button>
            </form>
        </>
    )
}

export default AddAddressForm
