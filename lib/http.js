import envConfig from '@/config'
import { normalizePath } from './utils'

class HttpError extends Error {
    constructor({ status, payload }) {
        super('Http Error')
        this.status = status
        this.payload = payload
    }
}

class SessionToken {
    token = ''
    get value() {
        return this.token
    }

    set value(token) {
        // Nếu gọi method này ở server thì bị lỗi
        if (typeof window === 'undefined') {
            throw new Error('Cannot set token on server side')
        }

        this.token = token
    }
}

export const clientSessionToken = new SessionToken()
export const clientAdminSessionToken = new SessionToken()

const request = async (method, url, options = {}) => {
    const body = options?.body ? JSON.stringify(options.body) : undefined
    const isAdminRequest = options?.type === 'admin'
    const sessionToken = isAdminRequest ? clientAdminSessionToken : clientSessionToken

    const baseHeaders = {
        'Content-Type': 'application/json',
        Authorization: sessionToken.value ? `Bearer ${sessionToken.value}` : ''
    }

    const baseUrl = options?.baseUrl ?? envConfig.NEXT_PUBLIC_API_ENDPOINT
    const fullUrl = url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`

    const res = await fetch(fullUrl, {
        ...options,
        headers: {
            ...baseHeaders,
            ...options?.headers
        },
        body,
        method
    })
    const payload = await res.json()

    const data = {
        status: res.status,
        payload
    }

    if (!res.ok) {
        throw new HttpError(data)
    }

    if (typeof window !== 'undefined') {
        if (
            ['api/login', 'api/register', 'api/changePassword', 'api/admin/login'].some(
                (item) => item === normalizePath(url)
            )
        ) {
            sessionToken.value = data.payload.access_token
        } else if (normalizePath(url) === 'api/logout') {
            sessionToken.value = ''
        }
    }

    return data
}

const http = {
    get(url, options) {
        return request('GET', url, options)
    },

    post(url, body, options) {
        return request('POST', url, { ...options, body })
    },

    put(url, body, options) {
        return request('PUT', url, { ...options, body })
    },

    delete(url, options) {
        return request('DELETE', url, options)
    }
}

export default http
