'use client'
import classNames from 'classnames/bind'
import { useRouter, useSearchParams } from 'next/navigation'
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
    const searchParams = useSearchParams()
    const emailFromURL = searchParams.get('email') || ''

    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger
    } = useForm({
        resolver: zodResolver(resendOtpSchema),
        defaultValues: {
            email: emailFromURL,
            otp_code: ''
        }
    })

    const onSubmit = async (values) => {
        try {
            const result = await authApiRequest.resendOTP(values)

            if (result.status === 200) {
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

                <Input type="hidden" {...register('email')} />

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
