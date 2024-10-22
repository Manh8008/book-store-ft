'use client'
import classNames from 'classnames/bind'
import { startTransition } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import styles from './login-form.module.scss'
import { LoginSchema } from '@/schemas'

const cx = classNames.bind(styles)

export const LoginForm = () => {
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
        // const result = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/register`, {
        //     body: JSON.stringify(values),
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     method: 'POST'
        // }).then((res) => res.json())
        // console.log(result)

        startTransition(() => {
            console.log(values)
        })
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

                <Button primary fullWidth type="submit">
                    Đăng nhập
                </Button>

                <Button text href="/auth/register">
                    Bạn chưa có tài khoản ?
                </Button>
            </form>
        </div>
    )
}
