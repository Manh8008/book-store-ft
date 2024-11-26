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
import styles from './change-password-form.scss'

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
        <div className={cx('wrapper')}>
            <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={cx('title')}>Đổi mật khẩu</h2>

                <div>
                    <Input
                        label="Nhập mật khẩu cũ"
                        type="password"
                        id="old_password"
                        placeholder="******"
                        error={!!errors.old_password}
                        {...register('old_password')}
                        onBlur={() => trigger('old_password')}
                    />
                    {errors.old_password && (
                        <p className={cx('error')}>{errors.old_password.message}</p>
                    )}
                </div>

                <div>
                    <Input
                        label="Nhập mật khẩu mới"
                        type="password"
                        id="password"
                        placeholder="******"
                        error={!!errors.password}
                        {...register('password')}
                        onBlur={() => trigger('password')}
                    />
                    {errors.password && <p className={cx('error')}>{errors.password.message}</p>}
                </div>

                <div>
                    <Input
                        label="Nhập lại mật khẩu"
                        type="password"
                        id="confirm_password"
                        placeholder="******"
                        error={!!errors.confirm_password}
                        {...register('confirm_password')}
                        onBlur={() => trigger('confirm_password')}
                    />
                    {errors.confirm_password && (
                        <p className={cx('error')}>{errors.confirm_password.message}</p>
                    )}
                </div>

                <FormSuccess message={success} />
                {error && <FormError message={error} />}

                <Button primary fullWidth type="submit" disabled={loading}>
                    {loading ? 'Đang xử lý...' : 'Đổi mật khẩu'}
                </Button>
            </form>
        </div>
    )
}
