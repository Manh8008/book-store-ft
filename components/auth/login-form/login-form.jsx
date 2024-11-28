'use client'
import classNames from 'classnames/bind'
import { useState, useTransition } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { LoginSchema } from '@/schemas'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { handleHttpError } from '@/lib/utils'
import { authApiRequest } from '@/apiRequests/auth'
import { clientSessionToken } from '@/lib/http'
import { useUser } from '@/context/user-context'
import { FormSuccess } from '@/components/auth/form-success'

import accountApiRequest from '@/apiRequests/account'
import styles from './login-form.module.scss'
import { FormError } from '../form-error'

const cx = classNames.bind(styles)

export const LoginForm = () => {
    const router = useRouter()
    const { setUserData } = useUser()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger
    } = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = async (values) => {
        if (loading) return
        setLoading(true)
        setError('')
        setSuccess('')
        try {
            const result = await authApiRequest.login(values)

            await authApiRequest.auth({ sessionToken: result.payload.data.access_token })
            clientSessionToken.value = result.payload.data.access_token

            const profileResult = await accountApiRequest.getProfile()
            setUserData(profileResult.payload.data.user)
            setSuccess('Đăng nhập thành công!')
            router.push('/')
        } catch (error) {
            handleHttpError(error, setError)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={cx('container')}>
            <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={cx('title')}>Đăng nhập</h2>
                <div>
                    <Input
                        label="Email"
                        type="email"
                        id="email"
                        placeholder="Nhập email..."
                        error={!!errors.password}
                        {...register('email')}
                        onBlur={() => trigger('email')}
                    />
                    {errors.email && <p className={cx('error')}>{errors.email.message}</p>}
                </div>
                <div>
                    <Input
                        label="Mật khẩu"
                        type="password"
                        id="password"
                        placeholder="Nhập mật khẩu..."
                        error={!!errors.password}
                        {...register('password')}
                        onBlur={() => trigger('password')}
                    />
                    {errors.password && <p className={cx('error')}>{errors.password.message}</p>}
                </div>

                <FormSuccess message={success} />
                {error && <FormError message={error} />}

                <Button primary fullWidth type="submit" disabled={loading}>
                    {loading ? 'Đang xử lý...' : 'Đăng nhập'}
                </Button>

                <Button text href="/auth/register">
                    Bạn chưa có tài khoản ?
                </Button>
                <Button text href="/auth/forgot-password">
                    Quên mật khẩu
                </Button>
            </form>
        </div>
    )
}
