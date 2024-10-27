'use client'
import classNames from 'classnames/bind'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { handleHttpError } from '@/lib/utils'
import authApiRequest from '@/apiRequests/auth'
import { changePasswordSchema } from '@/schemas'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Toast, { showToast } from '@/components/Toast/Toast'
import styles from './change-password-form.scss'

const cx = classNames.bind(styles)

export const ChangePasswordForm = () => {
    const router = useRouter()
    const [error, setError] = useState('')
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
        setError('')
        try {
            const result = await authApiRequest.changePassword(values)

            console.log(result.payload)

            showToast('🦄 Thành công!')

            setTimeout(() => {
                router.push('/')
            }, 2000)
        } catch (error) {
            handleHttpError(error, setError)
        }
    }

    return (
        <>
            <Toast />
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
                        {errors.password && (
                            <p className={cx('error')}>{errors.password.message}</p>
                        )}
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
                    {error && <p className={cx('error')}>{error}</p>}

                    <Button primary fullWidth type="submit">
                        Đổi mật khẩu
                    </Button>
                </form>
            </div>
        </>
    )
}
