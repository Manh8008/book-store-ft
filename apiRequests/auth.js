import http from '@/lib/http'

const authApiRequest = {
    login: (body) => http.post('/api/login', body),
    register: (body) => http.post('/api/register', body),
    auth: (body) =>
        http.post('/api/auth', body, {
            baseUrl: ''
        }),

    logoutFromNextServerToServer: (sessionToken) =>
        http.post(
            '/api/logout',
            {},
            {
                headers: {
                    Authorization: `Bearer ${sessionToken}`
                }
            }
        ),
    logoutFromNextClientToServer: () => http.post('/api/auth/logout', {}, { baseUrl: '' })
}

export default authApiRequest
