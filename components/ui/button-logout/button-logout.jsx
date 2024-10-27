'use client'

import authApiRequest from '@/apiRequests/auth'
import { handleHttpError } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { Button } from '../button/button'

export default function Buttonlogout() {
    const router = useRouter()
    const handleLogout = async () => {
        try {
            await authApiRequest.logoutFromNextClientToServer()
            router.push('/login')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Button outline onClick={handleLogout}>
            Đăng xuất
        </Button>
    )
}
