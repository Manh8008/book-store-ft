import http from '@/lib/http'

const productApiRequest = {
    bookDetail: (id) => http.get(`/api/getBookDetail/${id}`),
    getAllBooks: () => http.get(`/api/getAllBooks`),
    getBookByCatalog: (id) => http.get(`/api/getBookByCategory/${id}`)
}

export default productApiRequest
