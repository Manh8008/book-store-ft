import http from '@/lib/http'

export const commentApiRequest = {
    getCommentByIdBook: (id) => http.get(`/api/comments/${id}`),
    create: (id, body) => http.post(`/api/addComment/${id}`, body),
    delete: (id) => http.delete(`/api/deleteComment/${id}`)
}
