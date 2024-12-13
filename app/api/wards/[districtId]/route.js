import { API_URLS } from '@/config/api'

export async function GET(request, { params }) {
    try {
        const { districtId } = params
        const response = await fetch(`${API_URLS.WARDS}/${districtId}`)
        const data = await response.json()

        return Response.json(data)
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 })
    }
}
