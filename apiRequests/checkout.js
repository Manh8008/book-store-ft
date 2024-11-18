import http from '@/lib/http'

const checkoutRequest = {
    checkoutCOD: (body) => http.post(`/api/checkoutCOD`, body),
    checkoutVnPay: (body) => http.post(`api/checkout-vnpay`, body)
}

export { checkoutRequest }
