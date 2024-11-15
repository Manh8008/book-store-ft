import http from '@/lib/http'

const accountApiRequest = {
    getProfile: () => http.get('/api/profile')
}

export default accountApiRequest
