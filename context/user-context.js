'use client'
import accountApiRequest from '@/apiRequests/account'
import React, { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        id: '',
        name: '',
        email: '',
        phone: '',
        address: ''
    })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
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
                        address: profileInfo.user.address || ''
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
    }, [])

    return (
        <UserContext.Provider value={{ userData, setUserData, loading }}>
            {children}
        </UserContext.Provider>
    )
}
