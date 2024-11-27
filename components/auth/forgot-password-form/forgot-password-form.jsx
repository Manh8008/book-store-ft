'use client'

import classNames from 'classnames/bind'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { handleHttpError } from '@/lib/utils'
import { ForgotPasswordSchema } from '@/schemas'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import styles from './forgot-password-form.module.scss'

const cx = classNames.bind(styles)

export const ForgotPasswordForm = () => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

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
        setLoading(true) // Bắt đầu loading
        setError('') // Reset lỗi
        try {
            const response = await fetch('http://127.0.0.1:8000/api/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            })

            if (!response.ok) {
                throw new Error('Không thể gửi yêu cầu. Vui lòng thử lại!')
            }

            const result = await response.json()
            if (result.success) {
                alert('Vui lòng kiểm tra email của bạn!')
            } else {
                setError(result.message || 'Có lỗi xảy ra, vui lòng thử lại.')
            }
        } catch (error) {
            handleHttpError(error, setError)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={cx('wrapper')}>
            <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={cx('title')}>Quên mật khẩu</h2>
                <div>
                    <Input
                        label="Email"
                        type="email"
                        id="email"
                        placeholder="example@gmail.com"
                        error={!!errors.email}
                        {...register('email')}
                        onBlur={() => trigger('email')}
                    />
                    {errors.email && <p className={cx('error')}>{errors.email.message}</p>}
                </div>

                {error && <p className={cx('error')}>{error}</p>}

                <Button primary fullWidth type="submit" disabled={loading}>
                    {loading ? 'Đang gửi...' : 'Gửi đi'}
                </Button>
            </form>
        </div>
    )
}
