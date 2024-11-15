import http from '@/lib/http'

const categoryApiRequest = {
    getAllCategories: () => http.get(`/api/getAllCategories`)
}

const categoryApiRequestAdmin = {
    getAllCategories: () => http.get(`/api/getAllCategories`)
}

export { categoryApiRequest, categoryApiRequestAdmin }
