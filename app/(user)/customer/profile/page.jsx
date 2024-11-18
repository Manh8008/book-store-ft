'use client'
import React, { useEffect, useState } from 'react'
import { useUser } from '@/context/user-context'
import { AccountSidebar } from '@/components/account-sidebar'
import './profile.scss'

export default function Profile() {
    const { userData, setUserData } = useUser()

    const [defaultAddress, setDefaultAddress] = useState('')

    useEffect(() => {
        if (userData && userData.address) {
            const addressList = userData.address || []
            const defaultAddr = addressList.find((address) => address.default == 1)

            if (defaultAddr) {
                setDefaultAddress(defaultAddr.address_line)
            }
        }
    }, [userData])

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    if (!userData) {
        return <div>Loading...</div>
    }

    return (
        <main style={{ background: '#F5F5FA' }}>
            <div className="container">
                <AccountSidebar idUser={userData.id} />
                <div className="content-body">
                    <h2>Hồ sơ cá nhân</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="fullname">Họ và tên*</label>
                            <input
                                id="fullname"
                                name="name"
                                placeholder="Nhập họ và tên"
                                type="text"
                                value={userData.name || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email*</label>
                            <input
                                id="email"
                                name="email"
                                placeholder="Email"
                                type="text"
                                value={userData.email || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Số điện thoại*</label>
                            <input
                                id="phone"
                                name="phone"
                                placeholder="Số điện thoại"
                                type="text"
                                value={userData.phone || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Địa chỉ*</label>
                            <input
                                id="address"
                                name="address"
                                placeholder="Địa chỉ giao hàng"
                                type="text"
                                value={defaultAddress || ''}
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}
