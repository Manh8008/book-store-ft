'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import accountApiRequest from '@/apiRequests/account'

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

    useEffect(() => {
        const fetchRequest = async () => {
            try {
                const result = await accountApiRequest.getProfile()

                if (result.status === 200) {
                    setUserData({
                        id: result.payload.data.user.id,
                        name: result.payload.data.user.name || '',
                        email: result.payload.data.user.email || '',
                        phone: result.payload.data.user.phone || '',
                        address: result.payload.data.user.address || ''
                    })
                } else {
                    console.log('Chưa nhận được dữ liệu')
                }
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu người dùng:', error)
            }
        }

        fetchRequest()
    }, [])

    return <UserContext.Provider value={{ userData, setUserData }}>{children}</UserContext.Provider>
}
