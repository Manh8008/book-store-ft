import http from '@/lib/http'

const categoryApiRequest = {
    getAllCategories: () => http.get(`/api/getAllCategories`)
}

export default categoryApiRequest
