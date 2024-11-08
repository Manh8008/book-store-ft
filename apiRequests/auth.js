import http from '@/lib/http'

const authApiRequest = {
    login: (body) => http.post('/api/login', body),
    register: (body) => http.post('/api/register', body),
    auth: (body) =>
        http.post('/api/auth', body, {
            baseUrl: ''
        }),
    changePassword: (body) => http.put('/api/changePassword', body),
    forgotPassword: (body) => http.post('/api/forgot-password', body),
    resetPassword: (body) => http.post('/api/reset-password', body),
    logoutFromNextServerToServer: (sessionToken) =>
        http.get('/api/logout', {
            headers: {
                Authorization: `Bearer ${sessionToken}`
            }
        }),

    logoutFromNextClientToServer: () => http.post('/api/auth/logout', {}, { baseUrl: '' })
}

export default authApiRequest
