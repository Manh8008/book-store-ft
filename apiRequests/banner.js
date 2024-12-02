import http from '@/lib/http'

const bannerApiRequest = {
    getAllBanner: () => http.get(`/api/banner`),
}

const bannerApiRequestAdmin = {
    getAllBanner: () => http.get(`/api/banner`),
    // getPostById: (id) => http.get(`/api/getPostById/${id}`),
    addBanner: (body) => http.post(`/api/admin/storeBanner`, body, { type: 'admin' }),
    destroyBanner: (id) => http.delete(`/api/admin/deleteBanner/${id}`, { type: 'admin' }),
}

export { bannerApiRequest, bannerApiRequestAdmin }
