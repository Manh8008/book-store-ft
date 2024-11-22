import http from '@/lib/http'

const accountApiRequest = {
    getProfile: () => http.get('/api/profile', { type: 'user' })
}

export default accountApiRequest
