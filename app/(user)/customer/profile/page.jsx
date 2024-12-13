'use client'
import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { handleHttpError } from '@/lib/utils'
import { useUser } from '@/context/user-context'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { profileSchema } from '@/schemas'
import accountApiRequest from '@/apiRequests/account'
import styles from './profile.module.scss'

const cx = classNames.bind(styles)

export default function Profile() {
    const { userData, setUserData } = useUser()
    const [loading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            name: '',
            phone: ''
        }
    })

    useEffect(() => {
        if (userData) {
            reset({
                name: userData.name || '',
                phone: userData.phone || ''
            })
        }
    }, [userData, reset])

    const onSubmit = async (values) => {
        if (loading) return
        setLoading(true)
        try {
            const result = await accountApiRequest.updateProfile(values)
            alert('Cập nhật thông tin thành công!')
            setUserData(result.data)
        } catch (error) {
            handleHttpError(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={cx('profile-container')}>
            <h2>Hồ sơ cá nhân</h2>
            <div className={cx('profile-content')}>
                <form onSubmit={handleSubmit(onSubmit)} className={cx('profile-form')}>
                    <div className={cx('form-group')}>
                        <label htmlFor="name">Họ và tên*</label>
                        <Input
                            type="text"
                            id="name"
                            placeholder="Nhập họ và tên"
                            error={errors.name}
                            {...register('name')}
                        />
                        {errors.name && (
                            <span className={cx('error-message')}>{errors.name.message}</span>
                        )}
                    </div>

                    <div className={cx('form-group')}>
                        <label htmlFor="email">Email*</label>
                        <Input
                            type="email"
                            id="email"
                            value={userData?.email}
                            disabled
                            className={cx('disabled-input')}
                        />
                    </div>

                    <div className={cx('form-group')}>
                        <label htmlFor="phone">Số điện thoại*</label>
                        <Input
                            type="text"
                            id="phone"
                            placeholder="Nhập số điện thoại"
                            error={errors.phone}
                            {...register('phone')}
                        />
                        {errors.phone && (
                            <span className={cx('error-message')}>{errors.phone.message}</span>
                        )}
                    </div>

                    <div className={cx('form-actions')}>
                        <Button type="submit" disabled={loading}>
                            {loading ? 'Đang cập nhật...' : 'Lưu thay đổi'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
