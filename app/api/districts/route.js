// app/api/provinces/[provinceId]/route.js

export async function GET(request, { params }) {
    const { provinceId } = params

    try {
        const response = await fetch(`https://vapi.vnappmob.com/api/province/${provinceId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()

        return new Response(JSON.stringify(data), { status: 200 })
    } catch (error) {
        console.error('Lỗi khi lấy huyện:', error)
        return new Response(JSON.stringify({ error: 'Lỗi khi lấy huyện' }), { status: 500 })
    }
}
