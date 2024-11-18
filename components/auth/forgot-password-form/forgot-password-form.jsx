'use client'
import classNames from 'classnames/bind'
import { useState, useTransition } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { handleHttpError } from '@/lib/utils'
import { ForgotPasswordSchema } from '@/schemas'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Toast, { showToast } from '@/components/Toast/Toast'
import styles from './forgot-password-form.module.scss'
import { authApiRequest } from '@/apiRequests/auth'

const cx = classNames.bind(styles)

export const ForgotPasswordForm = () => {
    const [error, setError] = useState('')
    const [isPending, startTransition] = useTransition()
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger
    } = useForm({
        resolver: zodResolver(ForgotPasswordSchema),
        defaultValues: {
            email: ''
        }
    })

    const onSubmit = async (values) => {
        setError('')
        startTransition(async () => {
            try {
                const result = await authApiRequest.forgotPassword(values)

                showToast('Vui lòng kiểm tra email của bạn!')
            } catch (error) {
                handleHttpError(error, setError)
            }
        })
    }

    return (
        <>
            <Toast />
            <div className={cx('wrapper')}>
                <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                    <h2 className={cx('title')}>Quên mật khẩu</h2>
                    <div>
                        <Input
                            label="Email"
                            type="email"
                            id="email"
                            placeholder="example@gmail.com"
                            error={!!errors.old_password}
                            {...register('email')}
                            onBlur={() => trigger('email')}
                        />
                        {errors.email && <p className={cx('error')}>{errors.email.message}</p>}
                    </div>

                    {error && <p className={cx('error')}>{error}</p>}

                    <Button primary fullWidth type="submit" disabled={isPending}>
                        Gửi đi
                    </Button>
                </form>
            </div>
        </>
    )
}
