'use client'
import classNames from 'classnames/bind'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { startTransition } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { RegisterSchema } from '@/schemas'
import envConfig from '@/config'
import styles from './register-form.module.scss'

const cx = classNames.bind(styles)

export const RegisterForm = () => {
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
        const result = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/api/register`, {
            body: JSON.stringify(values),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST'
        }).then((res) => res.json())

        console.log(result)

        startTransition(() => {
            console.log(values)
        })
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
                        id="confirmPassword"
                        placeholder="Nhập lại mật khẩu..."
                        error={!!errors.password_confirm}
                        {...register('password_confirm')}
                    />
                    {errors.password_confirm && (
                        <p className={cx('error')}>{errors.password_confirm.message}</p>
                    )}
                </div>

                <Button primary fullWidth type="submit">
                    Đăng ký
                </Button>

                <Button text href="/auth/login">
                    Bạn đã có tài khoản?
                </Button>
            </form>
        </div>
    )
}
