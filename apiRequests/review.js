import http from '@/lib/http'

const reviewApiRequest = {
    bookDetail: (id) => http.get(`/api/getBookDetail/${id}`),
    getAllBooks: () => http.get(`/api/getAllBooks`),
    getBookByCatalog: (id) => http.get(`/api/getBookByCategory/${id}`)
}

const reviewApiRequestAdmin = {
    getAllPost: () => http.get(`/api/getAllPost`),
    addReview: (body) => http.post(`/api/admin/storePost`, body, { type: 'admin' }),
    destroyReview: (id) => http.delete(`/api/admin/deletePost/${id}`, { type: 'admin' }),
    updateReview: (id, body) => http.put(`/api/admin/updatePost/${id}`, body, { type: 'admin' })
}

export { reviewApiRequest, reviewApiRequestAdmin }
