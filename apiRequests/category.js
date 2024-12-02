import http from '@/lib/http'

const catalogApiRequest = {
    getAllCatalog: () => http.get(`/api/getAllCategories`),
    searchCatalog: (q) => http.get(`/api/categories/search?query=${q}`)
}

const catalogApiRequestAdmin = {
    getAllCatalog: () => http.get(`/api/getAllCategories`),
    getCatalogById: (id) => http.get(`/api/getCategoryById/${id}`),
    destroyCatalog: (id) => http.delete(`/api/admin/destroyCatalog/${id}`, { type: 'admin' }),
    addCatalog: (body) => http.post(`/api/admin/storeCatalog`, body, { type: 'admin' }),
    updateCatalog: (id, body) => http.post(`/api/admin/updateCatalog/${id}`, body, { type: 'admin' })
}

export { catalogApiRequest, catalogApiRequestAdmin }
