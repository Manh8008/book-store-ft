import { authApiRequest } from '@/apiRequests/auth'
import { cookies } from 'next/headers'

export async function POST(request) {
    const cookieStore = cookies()
    const sessionTokenUser = cookieStore.get('sessionTokenUser')

    console.log(sessionTokenUser.value)

    if (!sessionTokenUser) {
        return Response.json(
            {
                message: 'Không nhận được sessionTokenUser!'
            },
            {
                status: 401
            }
        )
    }

    try {
        //Xóa Token trên trình duyệt
        const result = await authApiRequest.logoutFromNextServerToServer(sessionTokenUser.value)
        return Response.json(result.payload, {
            status: 200,
            headers: {
                'Set-Cookie': `sessionTokenUser=; path=/; httpOnly; Max-age=0`
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
