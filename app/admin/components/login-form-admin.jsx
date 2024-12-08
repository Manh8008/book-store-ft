'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { authAdminApiRequest } from '@/apiRequests/auth'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from '@/schemas'
import { handleHttpError } from '@/lib/utils'
import { clientAdminSessionToken } from '@/lib/http'
import { FormError } from '@/components/auth/form-error'
import { FormSuccess } from '@/components/auth/form-success'

const LoginFormAdmin = () => {
    const router = useRouter()
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
        setError('')
        setSuccess('')

        try {
            const result = await authAdminApiRequest.login(values)

            await authAdminApiRequest.auth({
                sessionToken: result.payload.data.access_token
            })

            if (result.status === 200) {
                setSuccess('Đăng nhập thành công!')
                router.push('/admin')
            }

            clientAdminSessionToken.value = result.payload.data.access_token

            router.push('/admin')
        } catch (error) {
            handleHttpError(error, setError)
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="sign-in-page">
            <div className="container p-0">
                <div className="row no-gutters height-self-center">
                    <div className="col-sm-12 align-self-center page-content rounded">
                        <div className="row m-0">
                            <div className="col-sm-12 sign-in-page-data">
                                <div className="sign-in-from bg-primary rounded">
                                    <h3 className="mb-0 text-center text-white">Đăng Nhập</h3>
                                    <p className="text-center text-white">
                                        Vui lòng nhập email và mật khẩu để vào trang quản trị.
                                    </p>
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        className="mt-4 form-text"
                                    >
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                className={`form-control mb-0 ${
                                                    errors.email ? 'is-invalid' : ''
                                                }`}
                                                id="email"
                                                placeholder="Nhập email"
                                                {...register('email')}
                                            />
                                            {errors.email && (
                                                <div className="invalid-feedback">
                                                    {errors.email.message}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <Link
                                                href="/admin/auth/forgot-password"
                                                className="float-right text-dark"
                                            >
                                                Quên mật khẩu?
                                            </Link>
                                            <input
                                                type="password"
                                                className={`form-control mb-0 ${
                                                    errors.password ? 'is-invalid' : ''
                                                }`}
                                                id="password"
                                                placeholder="Nhập mật khẩu"
                                                {...register('password')}
                                            />
                                            {errors.password && (
                                                <div className="invalid-feedback">
                                                    {errors.password.message}
                                                </div>
                                            )}
                                        </div>
                                        {error && <FormError message={error} />}
                                        <FormSuccess message={success} />
                                        <div className="sign-info text-center">
                                            <button
                                                type="submit"
                                                className="btn btn-white d-block w-100 mb-2"
                                            >
                                                Sign in
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginFormAdmin
