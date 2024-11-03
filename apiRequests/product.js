import http from '@/lib/http'

const productApiRequest = {
    bookDetail: (id) => http.get(`/api/getBookDetail/${id}`),
    getAllBooks: () => http.get(`/api/getAllBooks`)
}

export default productApiRequest
