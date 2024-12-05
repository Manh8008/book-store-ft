import { authApiRequest } from '@/apiRequests/auth'
import { cookies } from 'next/headers'

export async function POST(request) {
    const cookieStore = cookies()
    const sessionTokenAdmin = cookieStore.get('sessionTokenAdmin')

    if (!sessionTokenAdmin) {
        return Response.json(
            {
                message: 'Không nhận được sessionTokenAdmin!'
            },
            {
                status: 401
            }
        )
    }

    try {
        //Xóa Token trên trình duyệt
        const result = await authApiRequest.logoutFromNextServerToServer(sessionTokenAdmin.value)
        return Response.json(result.payload, {
            status: 200,
            headers: {
                'Set-Cookie': `sessionTokenAdmin=; path=/; httpOnly; Max-age=0`
            }
        })
    } catch (error) {
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
