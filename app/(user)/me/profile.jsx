'use client'
import React, { useEffect } from 'react'
import envConfig from '@/config'
import { useAppContext } from '@/app/AppProvider'

export default function profile() {
    const { sessionToken } = useAppContext()

    useEffect(() => {
        const fetchRequest = async () => {
            const result = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/api/profile`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${sessionToken}`
                }
            })

            if (!result.ok) {
                throw new Error('Có lỗi xảy ra trong quá trình fetch dữ liệu.')
            }

            const data = await result.json()

            console.log(data)
        }
        fetchRequest()
    }, [sessionToken])

    return <div>profile</div>
}
