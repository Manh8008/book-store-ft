import http from '@/lib/http'

const addressApiRequest = {
    addAddress: (body) => http.post(`/api/address/store`, body),
    updateAddress: (userId, body) => http.put(`/api/address/update/${userId}`, body),
    getAddressById: (addressId) => http.get(`/api/getAddressesById/${addressId}`),
    destroy: (userId) => http.delete(`/api/address/destroy/${userId}`)
}

export default addressApiRequest
