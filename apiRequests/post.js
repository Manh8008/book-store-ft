import http from '@/lib/http'

const reviewApiRequest = {
    getAllPost: () => http.get(`/api/getAllPost`),
    reviewDetail: (id) => http.get(`/api/getPostById/${id}`)
}

const reviewApiRequestAdmin = {
    getAllPost: () => http.get(`/api/getAllPost`),
    getPostById: (id) => http.get(`/api/getPostById/${id}`),
    addReview: (body) => http.post(`/api/admin/storePost`, body, { type: 'admin' }),
    destroyReview: (id) => http.delete(`/api/admin/deletePost/${id}`, { type: 'admin' }),
    updatePost: (id, body) => http.post(`/api/admin/updatePost/${id}`, body, { type: 'admin' })
}

export { reviewApiRequest, reviewApiRequestAdmin }
