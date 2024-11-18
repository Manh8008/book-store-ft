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

const LoginFormAdmin = () => {
    const router = useRouter()
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
            const result = await authAdminApiRequest.login(values)

            if (result.status === 200) {
                alert('Đăng nhập thành công')
                router.push('/admin')
            }

            await authAdminApiRequest.auth({
                sessionToken: result.payload.data.access_token
            })

            clientAdminSessionToken.value = result.payload.data.access_token

            router.push('/admin')
        } catch (error) {
            handleHttpError(error, setError)
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
                                    <h3 className="mb-0 text-center text-white">Sign in</h3>
                                    <p className="text-center text-white">
                                        Enter your email address and password to access admin panel.
                                    </p>
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        className="mt-4 form-text"
                                    >
                                        <div className="form-group">
                                            <label htmlFor="email">Email address</label>
                                            <input
                                                type="email"
                                                className={`form-control mb-0 ${
                                                    errors.email ? 'is-invalid' : ''
                                                }`}
                                                id="email"
                                                placeholder="Enter email"
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
                                                Forgot password?
                                            </Link>
                                            <input
                                                type="password"
                                                className={`form-control mb-0 ${
                                                    errors.password ? 'is-invalid' : ''
                                                }`}
                                                id="password"
                                                placeholder="Password"
                                                {...register('password')}
                                            />
                                            {errors.password && (
                                                <div className="invalid-feedback">
                                                    {errors.password.message}
                                                </div>
                                            )}
                                        </div>
                                        <div className="d-inline-block w-100">
                                            <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="customCheck1"
                                                />
                                                <label
                                                    className="custom-control-label"
                                                    htmlFor="customCheck1"
                                                >
                                                    Remember Me
                                                </label>
                                            </div>
                                        </div>
                                        {error && (
                                            <div className="alert alert-danger mt-3" role="alert">
                                                {error}
                                            </div>
                                        )}
                                        <div className="sign-info text-center">
                                            <button
                                                type="submit"
                                                className="btn btn-white d-block w-100 mb-2"
                                            >
                                                Sign in
                                            </button>
                                            <span className="text-dark dark-color d-inline-block line-height-2">
                                                Don't have an account?{' '}
                                                <Link
                                                    href="/admin/auth/register"
                                                    className="text-white"
                                                >
                                                    Sign up
                                                </Link>
                                            </span>
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
