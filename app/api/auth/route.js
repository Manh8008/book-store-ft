export async function POST(request) {
    const res = await request.json()

    const sessionToken = res?.sessionToken

    if (!sessionToken) {
        return Response.json(
            { message: 'Không nhận được session token' },
            {
                status: 400
            }
        )
    }

    return Response.json(res, {
        status: 200,
        headers: {
            'set-cookie': `sessionToken=${sessionToken}; Path=/; httpOnly`
        }
    })
}
