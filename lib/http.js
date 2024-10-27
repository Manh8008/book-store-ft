import envConfig from '@/config'

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

const request = async (method, url, options) => {
    const body = options?.body ? JSON.stringify(options.body) : undefined
    const baseHeaders = {
        'Content-Type': 'application/json',
        Authorization: clientSessionToken.value ? `Bearer ${clientSessionToken.value}` : ''
    }

    // Nếu không truyền baseUrl hoặc baseUrl === undefined thì lấy từ envconfig.NEXT_PUBLIC_API_ENDPOINT
    const baseUrl =
        options?.baseUrl === undefined ? envConfig.NEXT_PUBLIC_API_ENDPOINT : options?.baseUrl

    const fullUrl = url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`

    const res = await fetch(`${fullUrl}`, {
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

    if (['/api/login', 'api/register'].includes(url)) {
        clientSessionToken.value = data.payload.access_token
    } else if ('/api/logout'.includes(url)) {
        clientSessionToken.value = ''
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
