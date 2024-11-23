'use client'
import classNames from 'classnames/bind'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { LoginSchema } from '@/schemas'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { handleHttpError } from '@/lib/utils'
import styles from './login-form.module.scss'
import { authApiRequest } from '@/apiRequests/auth'
import { clientSessionToken } from '@/lib/http'
import { useUser } from '@/context/user-context'
import accountApiRequest from '@/apiRequests/account'

const cx = classNames.bind(styles)

export const LoginForm = () => {
    const router = useRouter()
    const { userData, setUserData } = useUser()

    const [error, setError] = useState('')
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
        setError('')
        try {
            const result = await authApiRequest.login(values)
            if (result.status === 200) {
                await authApiRequest.auth({ sessionToken: result.payload.data.access_token })
                clientSessionToken.value = result.payload.data.access_token

                const profileResult = await accountApiRequest.getProfile()
                if (profileResult.status === 200) {
                    setUserData(profileResult.payload.data.user)
                    alert('Đăng nhập thành công')
                    router.push('/')
                } else {
                    console.log('Không thể lấy thông tin người dùng')
                }
            }
        } catch (error) {
            handleHttpError(error, setError)
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
                {error && <p className={cx('error')}>{error}</p>}

                <Button primary fullWidth type="submit">
                    Đăng nhập
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
