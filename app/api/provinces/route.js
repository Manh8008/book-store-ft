// app/api/provinces/route.js

export async function GET() {
    try {
        const response = await fetch('https://vapi.vnappmob.com/api/province', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return new Response(JSON.stringify(data), { status: 200 })
    } catch (error) {
        console.error('Error fetching provinces:', error)
        return new Response(JSON.stringify({ error: 'Failed to fetch provinces' }), { status: 500 })
    }
}
