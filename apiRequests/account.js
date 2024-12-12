import http from '@/lib/http'

const accountApiRequest = {
    getProfile: () => http.get('/api/profile'),
    updateProfile: (body) => http.put('/api/profile/upload', body)
}

export default accountApiRequest
