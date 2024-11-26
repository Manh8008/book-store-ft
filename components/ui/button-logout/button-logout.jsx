'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { Button } from '@/components/ui/button/button'
import { authApiRequest } from '@/apiRequests/auth'

export default function Buttonlogout() {
    const [isPending, startTransition] = useTransition()
    const router = useRouter()

    const handleLogout = () => {
        startTransition(async () => {
            try {
                await authApiRequest.logoutFromNextClientToServer()
                router.push('/')
            } catch (error) {
                console.error(error)
            }
        })
    }

    return (
        <Button outline onClick={handleLogout} disabled={isPending}>
            {isPending ? 'Đang đăng xuất...' : 'Đăng xuất'}
        </Button>
    )
}
