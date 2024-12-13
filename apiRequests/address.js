import http from '@/lib/http'
import nextHttp from '@/lib/nextHttp'

const addressApiRequest = {
    // Các phương thức API địa chỉ (gọi backend Laravel)
    addAddress: (body) => http.post(`/api/address/store`, body),
    updateAddress: (userId, body) => http.put(`/api/address/update/${userId}`, body),
    defaultUpdate: (addressId) => http.put(`/api/address/defaultUpdate/${addressId}`),
    getAddressById: (addressId) => http.get(`/api/getAddressesById/${addressId}`),
    destroy: (userId) => http.delete(`/api/address/destroy/${userId}`),

    // API provinces/districts/wards (gọi Next.js API routes)
    getProvinces: () => nextHttp.get('/api/provinces'),
    getDistricts: (provinceId) => nextHttp.get(`/api/districts/${provinceId}`),
    getWards: (districtId) => nextHttp.get(`/api/wards/${districtId}`)
}

export default addressApiRequest
