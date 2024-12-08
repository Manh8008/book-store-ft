import http from '@/lib/http'

const orderApiRequest = {
    getAll: () => http.get(`/api/getAllOrder`, { type: 'admin' }),

    pendingOrders: () => http.get(`/api/pending-orders`),
    confirmOrder: () => http.get(`/api/confirmed-orders`),
    canceledOrder: () => http.get(`/api/canceled-orders`),
    conpleteOrder: () => http.get(`/api/complete-orders`),

    getOrderDetail: (order_id) => http.get(`/api/getOrderDetail/${order_id}`, { type: 'admin' }),
    searchOrder: (q) => http.get(`/api/search-orders?query=${q}`, { type: 'admin' }),
    updateStatus: (id, body) =>
        http.put(`/api/admin/updateOrderStatus/${id}`, body, { type: 'admin' })
}

export default orderApiRequest
