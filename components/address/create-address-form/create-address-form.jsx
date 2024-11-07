'use client'
import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './create-address-form.module.scss'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterSchema } from '@/schemas'

const cx = classNames.bind(styles)

const CreateAddressForm = ({ data }) => {
    const [provinces, setProvinces] = useState([])
    const [districts, setDistricts] = useState([])
    const [wards, setWards] = useState([])

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            fullName: '',
            company: '',
            phone: '',
            city: '',
            district: '',
            ward: '',
            addressLine: '',
            addressType: 'home',
            isDefault: false
        }
    })

    useEffect(() => {
        const fetchProvinces = async () => {
            try {
                const response = await fetch('https://provinces.open-api.vn/api/')
                const data = await response.json()
                setProvinces(data)
            } catch (error) {
                console.error('Error fetching provinces:', error)
            }
        }
        fetchProvinces()
    }, [])

    const handleProvinceChange = async (e) => {
        const provinceCode = e.target.value
        setValue('district', '')
        setValue('ward', '')

        if (provinceCode) {
            const selectedProvince = provinces.find(
                (province) => province.code === parseInt(provinceCode)
            )
            setDistricts(selectedProvince.districts)
        } else {
            setDistricts([])
        }
    }

    const handleDistrictChange = async (e) => {
        const districtCode = e.target.value
        setValue('ward', '')

        if (districtCode) {
            try {
                const response = await fetch(
                    `https://provinces.open-api.vn/api/districts/${districtCode}/wards`
                )
                const data = await response.json()
                setWards(data)
            } catch (error) {
                console.error('Error fetching wards:', error)
            }
        } else {
            setWards([])
        }
    }

    const onSubmit = async (values) => {
        try {
            const result = await authApiRequest.register(values)
            console.log(result)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={cx('form-container')}>
            <h2 className={cx('title')}>Tạo sổ địa chỉ</h2>

            <div className={cx('form-group')}>
                <label>Họ và tên:</label>
                <input type="text" {...register('fullName')} className={cx('input')} />
                {errors.fullName && <p className={cx('error')}>{errors.fullName.message}</p>}
            </div>

            <div className={cx('form-group')}>
                <label>Công ty:</label>
                <input type="text" {...register('company')} className={cx('input')} />
                {errors.company && <p className={cx('error')}>{errors.company.message}</p>}
            </div>

            <div className={cx('form-group')}>
                <label>Số điện thoại:</label>
                <input type="text" {...register('phone')} className={cx('input')} />
                {errors.phone && <p className={cx('error')}>{errors.phone.message}</p>}
            </div>

            <div className={cx('form-group')}>
                <label>Tỉnh/Thành phố:</label>
                <select
                    {...register('city')}
                    className={cx('select')}
                    onChange={handleProvinceChange}
                >
                    <option value="">Chọn tỉnh/thành phố</option>
                    {provinces.map((province) => (
                        <option key={province.code} value={province.code}>
                            {province.name}
                        </option>
                    ))}
                </select>
                {errors.city && <p className={cx('error')}>{errors.city.message}</p>}
            </div>

            <div className={cx('form-group')}>
                <label>Quận huyện:</label>
                <select
                    {...register('district')}
                    className={cx('select')}
                    onChange={handleDistrictChange}
                >
                    <option value="">Chọn quận/huyện</option>
                    {districts.map((district) => (
                        <option key={district.code} value={district.code}>
                            {district.name}
                        </option>
                    ))}
                </select>
                {errors.district && <p className={cx('error')}>{errors.district.message}</p>}
            </div>

            <div className={cx('form-group')}>
                <label>Phường/xã:</label>
                <select {...register('ward')} className={cx('select')}>
                    <option value="">Chọn phường/xã</option>
                    {wards.map((ward) => (
                        <option key={ward.code} value={ward.code}>
                            {ward.name}
                        </option>
                    ))}
                </select>
                {errors.ward && <p className={cx('error')}>{errors.ward.message}</p>}
            </div>

            <div className={cx('form-group')}>
                <label>Địa chỉ:</label>
                <textarea
                    {...register('addressLine')}
                    className={cx('textarea')}
                    placeholder="Nhập địa chỉ"
                ></textarea>
                {errors.addressLine && <p className={cx('error')}>{errors.addressLine.message}</p>}
            </div>

            <div className={cx('form-group')}>
                <label>Loại địa chỉ:</label>
                <div className={cx('radio-group')}>
                    <label>
                        <input type="radio" value="home" {...register('addressType')} />
                        Nhà riêng / Chung cư
                    </label>
                    <label>
                        <input type="radio" value="company" {...register('addressType')} />
                        Cơ quan / Công ty
                    </label>
                </div>
                {errors.addressType && <p className={cx('error')}>{errors.addressType.message}</p>}
            </div>

            <div className={cx('form-group')}>
                <label>
                    <input type="checkbox" {...register('isDefault')} />
                    Đặt làm địa chỉ mặc định
                </label>
            </div>

            <button type="submit" className={cx('submit-button')}>
                Cập nhật
            </button>
        </form>
    )
}

export default CreateAddressForm
