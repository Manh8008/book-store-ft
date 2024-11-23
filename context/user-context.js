'use client'
import Cookies from 'js-cookie'
import React, { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
    const tokenUser = Cookies.get('sessionTokenUser')

    console.log
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
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/profile`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${tokenUser}`
                        }
                    }
                )

                console.log(response)

                if (response.ok) {
                    const result = await response.json()
                    console.log(result.data.user.address)

                    setUserData({
                        id: result.data.user.id,
                        name: result.data.user.name || '',
                        email: result.data.user.email || '',
                        phone: result.data.user.phone || '',
                        address: result.data.user.address || ''
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
