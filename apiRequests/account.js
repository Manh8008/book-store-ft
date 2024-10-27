import http from '@/lib/http'
const accountApiRequest = {
    profile: () => http.get('/api/profile')
}
export default accountApiRequest
