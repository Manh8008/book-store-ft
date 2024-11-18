import http from '@/lib/http'

const categoryApiRequest = {
    getCatalog: () => http.get(`/api/getAllCategories`)
}

const categoryApiRequestAdmin = {
    getCatalog: () => http.get(`/api/getAllCategories`),
    addCatalog: (body) =>
        http.post(`/api/admin/storeCatalog`, body, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
}

export { categoryApiRequest, categoryApiRequestAdmin }
