'use client'
import classNames from 'classnames/bind'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { resendOtpSchema } from '@/schemas'
import { authApiRequest } from '@/apiRequests/auth'
import { handleHttpError } from '@/lib/utils'
import styles from './resend-otp-form.module.scss'

const cx = classNames.bind(styles)

export const ResendOtpForm = () => {
    const [error, setError] = useState()
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger
    } = useForm({
        resolver: zodResolver(resendOtpSchema),
        defaultValues: {
            email: '',
            otp_code: ''
        }
    })

    const onSubmit = async (values) => {
        try {
            const result = await authApiRequest.resendOTP(values)

            if (result.status === 2000) {
                alert('Xác thực OTP thành công! Bạn có thể đăng nhập.')
                router.push('/auth/login')
            }
        } catch (error) {
            handleHttpError(error, setError)
        }
    }

    return (
        <div className={cx('container')}>
            <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={cx('title')}>Nhập mã xác thực</h2>

                <div>
                    <Input
                        label="Email"
                        type="email"
                        id="email"
                        placeholder="Nhập email"
                        error={!!errors.email}
                        {...register('email')}
                        onBlur={() => trigger('email')}
                    />
                    {errors.email && <p className={cx('error')}>{errors.email.message}</p>}
                </div>

                <div>
                    <Input
                        label="Mã xác thực"
                        type="text"
                        id="otp_code"
                        placeholder="Nhập mã xác thực"
                        error={!!errors.otp_code}
                        {...register('otp_code')}
                        onBlur={() => trigger('otp_code')}
                    />
                    {errors.otp_code && <p className={cx('error')}>{errors.otp_code.message}</p>}
                </div>
                {error && <p className={cx('error')}>{error}</p>}
                <Button primary fullWidth type="submit">
                    Xác minh
                </Button>
            </form>
        </div>
    )
}
