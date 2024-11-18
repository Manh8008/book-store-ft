'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { clientSessionToken } from '@/lib/http'

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

const sessionTokenUser = localStorage.getItem('sessionToken')

console.log(sessionTokenUser)
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
                // Lấy token từ clientSessionToken
                const token = clientSessionToken.value
                if (!token) {
                    console.log('Không có token, bỏ qua fetch profile.')
                    return
                }

                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/profile`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`
                        }
                    }
                )

                if (!response.ok) {
                    throw new Error('Lỗi khi lấy dữ liệu người dùng')
                }

                const { data } = await response.json()

                setUserData({
                    id: data.user.id,
                    name: data.user.name || '',
                    email: data.user.email || '',
                    phone: data.user.phone || '',
                    address: data.user.address || ''
                })
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu người dùng:', error)
            }
        }

        fetchRequest()
    }, [sessionTokenUser])

    return <UserContext.Provider value={{ userData, setUserData }}>{children}</UserContext.Provider>
}
