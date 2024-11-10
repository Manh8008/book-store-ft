'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { clientSessionToken } from '@/lib/http'
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
                if (!clientSessionToken.token) return
                const result = await accountApiRequest.profile(clientSessionToken.value)
                const data = result.payload.data

                setUserData({
                    id: data.id,
                    name: data.name || '',
                    email: data.email || '',
                    phone: data.phone || '',
                    address: data.address || ''
                })
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu người dùng:', error)
            }
        }

        fetchRequest()
    }, [clientSessionToken.value])

    return <UserContext.Provider value={{ userData, setUserData }}>{children}</UserContext.Provider>
}
