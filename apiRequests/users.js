import http from '@/lib/http'

export const userApiRequestAdmin = {
    getAllUser: () => http.get(`/api/getAllUsers`, { type: 'admin' })
}
