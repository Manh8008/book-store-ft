'use client'
import { useEffect } from 'react'
import { clientSessionToken, clientAdminSessionToken } from '@/lib/http'

export default function AppProvider({
    children,
    initialUserSessionToken = '',
    initialAdminSessionToken = ''
}) {
    useEffect(() => {
        // Kiểm tra và set token cho user
        if (initialUserSessionToken) {
            console.log('Setting user token:', initialUserSessionToken)
            clientSessionToken.value = initialUserSessionToken
        }

        // Kiểm tra và set token cho admin
        if (initialAdminSessionToken) {
            console.log('Setting admin token:', initialAdminSessionToken)
            clientAdminSessionToken.value = initialAdminSessionToken
        }
    }, [initialUserSessionToken, initialAdminSessionToken])

    return <>{children}</>
}
