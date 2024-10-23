'use client'
import classNames from 'classnames/bind'
import { startTransition } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import styles from './verification-form.module.scss'
import { VerificationSchema } from '@/schemas'

const cx = classNames.bind(styles)

export const VerificationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger
    } = useForm({
        resolver: zodResolver(VerificationSchema),
        defaultValues: {
            verificationCode: ''
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
                <h2 className={cx('title')}>Nhập mã xác thực</h2>

                <div>
                    <Input
                        label="Mã xác thực"
                        type="text"
                        id="verificationCode"
                        placeholder="Nhập mã xác thực"
                        error={!!errors.verificationCode}
                        {...register('verificationCode')}
                        onBlur={() => trigger('verificationCode')}
                    />
                    {errors.verificationCode && (
                        <p className={cx('error')}>{errors.verificationCode.message}</p>
                    )}
                </div>

                <Button primary fullWidth type="submit">
                    Xác minh
                </Button>
            </form>
        </div>
    )
}
