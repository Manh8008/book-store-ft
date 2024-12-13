import { API_URLS } from '@/config/api'

export async function GET(request, { params }) {
    try {
        const { provinceId } = params
        const response = await fetch(`${API_URLS.DISTRICTS}/${provinceId}`)
        const data = await response.json()

        return Response.json(data)
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 })
    }
}
