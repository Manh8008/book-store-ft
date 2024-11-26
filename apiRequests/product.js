import http from '@/lib/http'

export const productApiRequest = {
    bookDetail: (id) => http.get(`/api/getBookDetail/${id}`),
    getAllBooks: () => http.get(`/api/getAllBooks`),
    getBookByCatalog: (id) => http.get(`/api/getBookByCategory/${id}`)
}

export const productApiRequestAdmin = {
    getAllBooks: () => http.get(`/api/getAllBooks`),
    addProduct: (body) => http.post(`/api/admin/storeBook`, body, { type: 'admin' }),
    destroyProduct: (id) => http.delete(`/api/admin/deleteBook/${id}`, { type: 'admin' }),
    updateProduct: (id, body) => http.put(`/api/admin/updateBook/${id}`, body, { type: 'admin' })
}

export default { productApiRequest, productApiRequestAdmin }
