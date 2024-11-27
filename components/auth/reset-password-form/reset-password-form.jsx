'use client'
import classNames from 'classnames/bind'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { handleHttpError } from '@/lib/utils'
import { resetPasswordSchema } from '@/schemas'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import styles from './reset-password-form.module.scss'
import { authApiRequest } from '@/apiRequests/auth'
import { FormSuccess } from '../form-success'

const cx = classNames.bind(styles)

export const ResetPasswordForm = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [token, setToken] = useState('')
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const tokenFromUrl = searchParams.get('token')
        const emailFromUrl = searchParams.get('email')

        if (tokenFromUrl && emailFromUrl) {
            setToken(tokenFromUrl)
            setEmail(emailFromUrl)
        } else {
            setError('Token hoặc email không hợp lệ.')
        }
    }, [searchParams])

    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger
    } = useForm({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
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
            // Gửi yêu cầu reset password tới backend
            const result = await authApiRequest.resetPassword({
                ...values,
                token,
                email
            })

            if (result.status === 200) {
                setSuccess('Đã thay đổi mật khẩu!')
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
        <>
            <div className={cx('wrapper')}>
                <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                    <h2 className={cx('title')}>Cập nhật mật khẩu</h2>
                    <div>
                        <Input
                            label="Mật khẩu mới"
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
                    <FormSuccess message={success} />

                    <Button primary fullWidth type="submit">
                        Cập nhật
                    </Button>
                </form>
            </div>
        </>
    )
}
