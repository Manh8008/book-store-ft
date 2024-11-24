'use client'
import Cookies from 'js-cookie'

export const handleHttpError = (error, setError) => {
    const status = error.status
    let errorMessage = ''

    if (status == 401) {
        if (error.payload.errors && error.payload.errors.email) {
            errorMessage = error.payload.errors.email.join(' ')
        } else {
            errorMessage = error.payload.errors || 'Thông tin xác thực không hợp lệ.'
        }
    } else {
        errorMessage = 'Đã xảy ra lỗi không xác định. Vui lòng thử lại sau!'
    }

    setError(errorMessage)
}

export const checkLogin = () => {
    const token = Cookies.get('sessionTokenUser')
    if (!token) {
        alert('Bạn cần đăng nhập để thực hiện thao tác này!')

        return false
    }
    return true
}

/**
 * Xóa đi kí tự đầu tiên của path
 */
export const normalizePath = (path) => {
    return path.startsWith('/') ? path.slice(1) : path
}
