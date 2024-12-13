'use client'

import classNames from 'classnames/bind'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

import { handleHttpError } from '@/lib/utils'
import { changePasswordSchema } from '@/schemas'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { authApiRequest } from '@/apiRequests/auth'
import { FormSuccess } from '@/components/auth/form-success'
import { FormError } from '@/components/auth/form-error'
import styles from './change-password-form.module.scss'

const cx = classNames.bind(styles)

export const ChangePasswordForm = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger
    } = useForm({
        resolver: zodResolver(changePasswordSchema),
        defaultValues: {
            old_password: '',
            password: '',
            confirm_password: ''
        }
    })

    const onSubmit = async (values) => {
        if (loading) return
        setLoading(true)
        setSuccess('')
        setError('')

        try {
            const result = await authApiRequest.changePassword(values)
            if (result.status === 200) {
                setSuccess('Đổi mật khẩu thành công!')
                setTimeout(() => {
                    router.push('/')
                }, 2000)
            }
        } catch (error) {
            handleHttpError(error, setError)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={cx('change-password-container')}>
            <h2>Đổi mật khẩu</h2>
            <div className={cx('change-password-content')}>
                <form onSubmit={handleSubmit(onSubmit)} className={cx('change-password-form')}>
                    <div className={cx('form-group')}>
                        <label htmlFor="old_password">Mật khẩu hiện tại</label>
                        <Input
                            type="password"
                            id="old_password"
                            placeholder="Nhập mật khẩu hiện tại"
                            error={!!errors.old_password}
                            {...register('old_password')}
                            onBlur={() => trigger('old_password')}
                        />
                        {errors.old_password && (
                            <span className={cx('error-message')}>{errors.old_password.message}</span>
                        )}
                    </div>

                    <div className={cx('form-group')}>
                        <label htmlFor="password">Mật khẩu mới</label>
                        <Input
                            type="password"
                            id="password"
                            placeholder="Nhập mật khẩu mới"
                            error={!!errors.password}
                            {...register('password')}
                            onBlur={() => trigger('password')}
                        />
                        {errors.password && (
                            <span className={cx('error-message')}>{errors.password.message}</span>
                        )}
                        <span className={cx('password-hint')}>
                            Mật khẩu phải dài từ 8 đến 32 ký tự, bao gồm chữ và số
                        </span>
                    </div>

                    <div className={cx('form-group')}>
                        <label htmlFor="confirm_password">Nhập lại mật khẩu mới</label>
                        <Input
                            type="password"
                            id="confirm_password"
                            placeholder="Nhập lại mật khẩu mới"
                            error={!!errors.confirm_password}
                            {...register('confirm_password')}
                            onBlur={() => trigger('confirm_password')}
                        />
                        {errors.confirm_password && (
                            <span className={cx('error-message')}>
                                {errors.confirm_password.message}
                            </span>
                        )}
                    </div>

                    <FormSuccess message={success} />
                    {error && <FormError message={error} />}

                    <div className={cx('form-actions')}>
                        <Button type="submit" disabled={loading}>
                            {loading ? 'Đang xử lý...' : 'Lưu thay đổi'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
