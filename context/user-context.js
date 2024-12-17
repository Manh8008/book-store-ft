'use client'
import accountApiRequest from '@/apiRequests/account'
import React, { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
    const token = localStorage.getItem('sessionTokenUser')
    const [userData, setUserData] = useState({
        id: '',
        name: '',
        email: '',
        phone: '',
        address: ''
    })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (token) {
            const fetchProfile = async () => {
                try {
                    const result = await accountApiRequest.getProfile()

                    if (result.status === 200) {
                        const profileInfo = result.payload.data

                        setUserData({
                            id: profileInfo.user.id,
                            name: profileInfo.user.name || '',
                            email: profileInfo.user.email || '',
                            phone: profileInfo.user.phone || '',
                            address: profileInfo.user.address || '',
                            orders: profileInfo.orders || []
                        })
                    } else {
                        console.log('Chưa nhận được dữ liệu')
                    }
                } catch (error) {
                    console.error('Lỗi khi lấy dữ liệu người dùng:', error)
                } finally {
                    setLoading(false)
                }
            }

            fetchProfile()
        } else {
            setLoading(false)
        }
    }, [token])

    return (
        <UserContext.Provider value={{ userData, setUserData, loading }}>
            {children}
        </UserContext.Provider>
    )
}
