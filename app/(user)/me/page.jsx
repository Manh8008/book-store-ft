import envConfig from '@/config'
import { cookies } from 'next/headers'
import Profile from './profile'

const MeProfile = async () => {
    // Lấy cookie sessionToken
    const cookieStore = cookies()
    const sessionToken = cookieStore.get('sessionToken')?.value

    console.log(sessionToken)

    if (!sessionToken) {
        console.error('Session token không tồn tại.')
        return
    }

    try {
        // Gọi API profile với token lấy từ cookie
        const result = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/api/profile`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${sessionToken}`
            }
        })

        if (!result.ok) {
            throw new Error('Có lỗi xảy ra trong quá trình fetch dữ liệu.')
        }

        const data = await result.json()
        return <Profile></Profile>
    } catch (error) {
        console.error('Error fetching profile:', error)
    }
}

export default MeProfile
