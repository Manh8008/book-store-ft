'use client'
import classNames from 'classnames/bind'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Toast, { showToast } from '@/components/ui/Toast'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { RegisterSchema } from '@/schemas'
import { authApiRequest } from '@/apiRequests/auth'
import styles from './register-form.module.scss'
import { handleHttpError } from '@/lib/utils'
import { FormError } from '../form-error'
import { FormSuccess } from '../form-success'

const cx = classNames.bind(styles)

export const RegisterForm = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger
    } = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            password_confirm: ''
        }
    })

    const onSubmit = async (values) => {
        if (loading) return
        setLoading(true)
        setError('')
        setSuccess('')
        try {
            const result = await authApiRequest.register(values)
            if (result.status === 200) {
                setSuccess('Đăng ký thành công!')
                router.push('/auth/resend-otp')
            }
        } catch (error) {
            handleHttpError(error, setError)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={cx('container')}>
            <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={cx('title')}>Đăng ký</h2>

                <div>
                    <Input
                        label="Họ và tên"
                        type="text"
                        id="name"
                        placeholder="Nhập họ và tên..."
                        error={!!errors.name}
                        {...register('name')}
                        onBlur={() => trigger('name')}
                    />
                    {errors.name && <p className={cx('error')}>{errors.name.message}</p>}
                </div>

                <div>
                    <Input
                        label="Email"
                        type="email"
                        id="email"
                        placeholder="Nhập email..."
                        error={!!errors.email}
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

                <div>
                    <Input
                        label="Nhập lại mật khẩu"
                        type="password"
                        id="password_confirm"
                        placeholder="Nhập lại mật khẩu..."
                        error={!!errors.password_confirm}
                        {...register('password_confirm')}
                    />
                    {errors.password_confirm && (
                        <p className={cx('error')}>{errors.password_confirm.message}</p>
                    )}
                </div>

                <FormSuccess message={success} />
                {/* <FormError message={error} /> */}

                <Button primary fullWidth type="submit" disabled={loading}>
                    {loading ? 'Đang xử lý...' : 'Đăng ký'}
                </Button>

                <Button text href="/auth/login">
                    Bạn đã có tài khoản?
                </Button>
            </form>
        </div>
    )
}
