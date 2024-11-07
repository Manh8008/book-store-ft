import http from '@/lib/http'
const addressApiRequest = {
    getAddress: (userId) => http.get(`/api/getAddressByUserId/${userId}`),
    addAddress: (body) => http.post(`/api/address/store`, body),
    destroy: (userId) => http.delete(`/api/address/destroy/${userId}`)
}
export default addressApiRequest
