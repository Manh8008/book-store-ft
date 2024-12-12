'use client'

import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { handleHttpError } from '@/lib/utils'

import { useUser } from '@/context/user-context'
import { AccountSidebar } from '@/components/account-sidebar'
import './profile.scss'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { profileSchema } from '@/schemas'
import accountApiRequest from '@/apiRequests/account'

export default function Profile() {
    const { userData, setUserData } = useUser()
    const [loading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            name: '',
            phone: ''
        }
    })

    useEffect(() => {
        if (userData) {
            reset({
                name: userData.name || '',
                phone: userData.phone || ''
            })
        }
    }, [userData, reset])

    const onSubmit = async (values) => {
        if (loading) return

        setLoading(true)
        try {
            const result = await accountApiRequest.updateProfile(values)
            alert('Cập nhật thông tin thành công!')
            setUserData(result.data)
        } catch (error) {
            handleHttpError(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <main style={{ background: '#F5F5FA' }}>
            <div className="container">
                <AccountSidebar idUser={userData?.id} />
                <div className="content-body">
                    <h2>Hồ sơ cá nhân</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="fullname">Họ và tên*</label>
                            <Input
                                type="text"
                                className={`form-control mb-0 ${errors.name ? 'is-invalid' : ''}`}
                                id="name"
                                placeholder="Nhập họ và tên"
                                {...register('name')}
                            />
                            {errors.name && (
                                <div className="invalid-feedback">{errors.name.message}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email*</label>
                            <Input
                                type="email"
                                className={`form-control mb-0 ${errors.email ? 'is-invalid' : ''}`}
                                id="email"
                                placeholder="Nhập email"
                                value={userData?.email}
                                disabled
                            />
                            {errors.email && (
                                <div className="invalid-feedback">{errors.email.message}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Số điện thoại*</label>
                            <Input
                                type="text"
                                className={`form-control mb-0 ${errors.phone ? 'is-invalid' : ''}`}
                                id="phone"
                                placeholder="Nhập số điện thoại"
                                {...register('phone')}
                            />
                            {errors.phone && (
                                <div className="invalid-feedback">{errors.phone.message}</div>
                            )}
                        </div>
                        <Button primary disabled={loading}>
                            {loading ? 'Đang cập nhật...' : 'Cập nhật'}
                        </Button>
                    </form>
                </div>
            </div>
        </main>
    )
}
