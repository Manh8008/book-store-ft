import authApiRequest from '@/apiRequests/auth'
import { cookies } from 'next/headers'

export async function POST(request) {
    const cookieStore = cookies()
    const sessionToken = cookieStore.get('sessionToken')

    if (!sessionToken) {
        return Response.json(
            {
                message: 'Không nhận được sessionToken'
            },
            {
                status: 401
            }
        )
    }

    try {
        const result = await authApiRequest.logoutFromNextServerToServer(sessionToken.value)

        return Response.json(result.payload, {
            status: 200,
            headers: {
                'set-cookie': `sessionToken=; path=/; httpOnly; Max-age=0`
            }
        })
    } catch (error) {
        console.error('Logout Error:', error)

        if (error.status == 401) {
            return Response.json(error.payload, {
                status: error.status
            })
        } else {
            return Response.json(
                {
                    message: 'Lỗi không xác định'
                },
                {
                    status: 500
                }
            )
        }
    }
}
