'use client'

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'

import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton'
import { productApiRequest } from '@/apiRequests/product'
import { addItem } from '@/redux/slices/cartslice'
import { handleHttpError } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { commentApiRequest } from '@/apiRequests/comment'
import { Beardcrumb } from '@/components/ui/breadcrumb'
import { useUser } from '@/context/user-context'
import { ToastError } from '@/components/ui/ToastError'
import MainLayout from '@/layouts/main-layout'
import CommentForm from './comment-form'
import RightContent from './right-content'
import '@/public/styles/product-detail.scss'

export default function ProductDetail({ params }) {
    const [product, setProduct] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [comments, setComments] = useState([])
    const { userData } = useUser()
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    const decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1)
    }

    const increment = () => setQuantity(quantity + 1)

    const fetchProduct = async () => {
        if (loading) return
        setError('')
        try {
            const result = await productApiRequest.bookDetail(params.id)
            setProduct(result.payload.data)
        } catch (error) {
            handleHttpError(error, setError)
        } finally {
            setLoading(false)
        }
    }

    const fetchComments = async () => {
        if (loading) return
        setError('')
        if (loading) return
        try {
            const result = await commentApiRequest.getCommentByIdBook(params.id)
            setComments(result.payload.data)
        } catch (error) {
            handleHttpError(error, setError)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProduct()
        fetchComments()
    }, [params.id])

    const handleAddComment = async (newComment) => {
        if (loading) return
        setError('')
        try {
            const result = await commentApiRequest.create(params.id, newComment)
            setComments((prev) => [result.payload.data, ...prev])
        } catch (error) {
            handleHttpError(error, setError)
        } finally {
            setLoading(false)
        }
    }

    const handleDeleteComment = async (id) => {
        if (loading) return
        setError('')
        try {
            await commentApiRequest.delete(id)
            setComments((prev) => prev.filter((comment) => comment.id !== id))
        } catch (error) {
            handleHttpError(error, setError)
        } finally {
            setLoading(false)
        }
    }

    if (loading) return <LoadingSkeleton />

    return (
        <MainLayout>
            <ToastError errorMessage={error} />
            <main style={{ background: '#F5F5FA' }}>
                <div className="product-detail">
                    <div className="content">
                        <Beardcrumb />

                        <div className="product-detail-container">
                            <div className="main-left">
                                <div className="main-detail">
                                    <div className="product-image">
                                        <img
                                            src={product?.images[0]?.url.trim()}
                                            alt={product?.name}
                                        />
                                    </div>

                                    <div className="product-info">
                                        <h1 className="product-title">{product?.name}</h1>
                                        <hr />
                                        <p className="product-price">
                                            Giá bán:{' '}
                                            <span className="price-sale">
                                                {parseFloat(product?.price).toLocaleString('vi-VN')}
                                                đ
                                            </span>{' '}
                                            <span className="price-retail">169.000đ</span>
                                        </p>

                                        <div className="quantity-control">
                                            <button
                                                className="quantity-btn decrement"
                                                onClick={decrement}
                                            >
                                                -
                                            </button>
                                            <span className="quantity-value">{quantity}</span>
                                            <button
                                                className="quantity-btn increment"
                                                onClick={increment}
                                            >
                                                +
                                            </button>
                                        </div>

                                        <Button
                                            primary
                                            onClick={() => dispatch(addItem({ product, quantity }))}
                                        >
                                            Thêm vào giỏ hàng
                                        </Button>
                                    </div>
                                </div>

                                <div className="tab-container">
                                    <div className="tabs">
                                        <div className="desc">Mô tả</div>
                                    </div>

                                    <div className="tab-content">
                                        <div className="body">
                                            <h2 className="title">{product?.name}</h2>
                                            <p className="text-desc">{product?.short_summary}</p>
                                        </div>
                                    </div>

                                    <div className="table-desc">
                                        <div className="text">Thông tin chi tiết</div>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>Công ty phát hành</td>
                                                    <td>NXB Giáo Dục Việt Nam</td>
                                                </tr>
                                                <tr>
                                                    <td>Ngày xuất bản</td>
                                                    <td>{product?.created_at}</td>
                                                </tr>
                                                <tr>
                                                    <td>Kích thước</td>
                                                    <td>{product?.size}</td>
                                                </tr>
                                                <tr>
                                                    <td>Loại bìa</td>
                                                    <td>{product?.format}</td>
                                                </tr>
                                                <tr>
                                                    <td>Số trang</td>
                                                    <td>{product?.pages}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <CommentForm onAddComment={handleAddComment} />

                                    <div className="user-comment">
                                        {comments.map((comment) => (
                                            <div key={comment.id} className="item">
                                                <div className="info">
                                                    <img
                                                        className="img-user"
                                                        src="/img/user-1.png"
                                                        alt="User"
                                                    />
                                                    <div className="username">
                                                        {comment.user_id || 'Người dùng'}
                                                    </div>
                                                </div>
                                                <div className="date">
                                                    {moment(comment.created_at).format(
                                                        'YYYY-MM-DD'
                                                    )}
                                                    <span>
                                                        {moment(comment.created_at).format(
                                                            'HH:mm:ss'
                                                        )}
                                                    </span>
                                                </div>
                                                <div
                                                    className="content-comment"
                                                    style={{ display: 'flex' }}
                                                >
                                                    <p>{comment.content}</p>
                                                    <span>
                                                        {userData?.id === comment.user_id && (
                                                            <Button
                                                                className="btn-del-comment"
                                                                text
                                                                onClick={() =>
                                                                    handleDeleteComment(comment.id)
                                                                }
                                                            >
                                                                Xóa
                                                            </Button>
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <RightContent />
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    )
}
