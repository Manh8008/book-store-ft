'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button/button'
import authApiRequest from '@/apiRequests/auth'

export default function Buttonlogout() {
    const router = useRouter()
    const handleLogout = async () => {
        try {
            await authApiRequest.logoutFromNextClientToServer()
            router.push('/')
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
