'use client'
import { useEffect } from 'react'
import { clientSessionToken } from '@/lib/http'

export default function AppProvider({ children, initialSessionToken = '' }) {
    useEffect(() => {
        if (initialSessionToken) {
            clientSessionToken.value = initialSessionToken
        }
    }, [initialSessionToken])

    return <>{children}</>
}
