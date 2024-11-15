export async function POST(request) {
    const res = await request.json()
    const { sessionToken, isAdmin } = res
    if (!sessionToken) {
        return new Response(JSON.stringify({ message: 'Không nhận được session token' }), {
            status: 400
        })
    }

    const cookieName = isAdmin === 'admin' ? 'sessionTokenAdmin' : 'sessionTokenUser'

    return new Response(JSON.stringify(res), {
        status: 200,
        headers: {
            'Set-Cookie': `${cookieName}=${sessionToken}; Path=/; HttpOnly; SameSite=Strict`
        }
    })
}
