import http from '@/lib/http'

const categoryApiRequest = {
    getCatalog: () => http.get(`/api/getAllCategories`)
}

const categoryApiRequestAdmin = {
    getCatalog: () => http.get(`/api/getAllCategories`),
    addCatalog: (body) => http.post(`/api/admin/storeCatalog`, body)
}

export { categoryApiRequest, categoryApiRequestAdmin }
