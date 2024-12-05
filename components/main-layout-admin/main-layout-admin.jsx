'use client'

import LeftBar from '@/app/admin/components/leftBar'
import TopBar from '@/app/admin/components/topBar'
import { usePathname } from 'next/navigation'

function MainLayoutAdmin({ children }) {
    const pathname = usePathname()

    const shouldHideBars = pathname === '/admin/auth/login'

    return (
        <>
            {!shouldHideBars && <LeftBar />}
            {!shouldHideBars && <TopBar />}

            {children}
        </>
    )
}

export default MainLayoutAdmin
