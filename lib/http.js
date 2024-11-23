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
    get value() {
        // Lấy token từ localStorage
        if (typeof window !== 'undefined') {
            return localStorage.getItem('sessionToken') || ''
        }
        return ''
    }

    set value(token) {
        // Nếu gọi method này ở server thì bị lỗi
        if (typeof window === 'undefined') {
            throw new Error('Cannot set token on server side')
        }

        // Lưu token vào localStorage
        localStorage.setItem('sessionToken', token)
    }

    clear() {
        // Xóa token khỏi localStorage
        if (typeof window !== 'undefined') {
            localStorage.removeItem('sessionToken')
        }
    }
}

export const clientSessionToken = new SessionToken()
export const clientAdminSessionToken = new SessionToken()

const request = async (method, url, options = {}) => {
    let body

    if (options?.body?.image) {
        body = new FormData()
        Object.entries(options?.body).forEach(([key, val]) => {
            body.append(key, val)
        })
    } else body = JSON.stringify(options?.body)

    const isAdminRequest = options?.type === 'admin'

    const sessionToken = isAdminRequest ? clientAdminSessionToken : clientSessionToken

    const baseHeaders = {
        'Content-Type': 'application/json',
        Authorization: sessionToken.value ? `Bearer ${sessionToken.value}` : ''
    }

    const baseUrl =
        options?.baseUrl === undefined ? envConfig.NEXT_PUBLIC_API_ENDPOINT : options?.baseUrl

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
