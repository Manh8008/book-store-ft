'use client'

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import classNames from 'classnames/bind'
import { FaShoppingCart } from 'react-icons/fa'
import { FaPhoneVolume } from 'react-icons/fa6'

import styles from './book-detail.module.scss'
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
import { CommentForm } from '@/components/book-detail/comment-form'
import { userApiRequestAdmin } from '@/apiRequests/users'

const cx = classNames.bind(styles)

export default function ProductDetail({ params }) {
    const [product, setProduct] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [comments, setComments] = useState([])
    const { userData } = useUser()
    const [users, setUsers] = useState([])
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    const [isExpanded, setIsExpanded] = useState(false)

    // Thu gọn/ xêm thêm mô tả
    const toggleDescription = () => {
        setIsExpanded(!isExpanded)
    }

    const maxDescriptionLength = 400
    const isLongDescription = product?.short_summary?.length > maxDescriptionLength
    const shortDescription = isLongDescription
        ? product?.short_summary.slice(0, maxDescriptionLength) + '...'
        : product?.short_summary

    const decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1)
    }

    const increment = () => setQuantity(quantity + 1)

    const fetchProduct = async () => {
        if (loading) return
        setError('')
        try {
            const result = await productApiRequest.bookDetail(params.id)
            console.log(result)

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
        try {
            const result = await commentApiRequest.getCommentByIdBook(params.id)
            setComments(result.payload.data)
        } catch (error) {
            handleHttpError(error, setError)
        } finally {
            setLoading(false)
        }
    }

    const fetchUsers = async () => {
        if (loading) return
        setError('')
        try {
            const result = await userApiRequestAdmin.getAllUser()
            setUsers(result.payload.data)
        } catch (error) { }
    }

    useEffect(() => {
        setLoading(true)
        fetchProduct()
        fetchComments()
        fetchUsers()
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
            <main className={cx('main-container')}>
                <div className={cx('product-detail')}>
                    <div className={cx('content-detail')}>
                        {/* <Beardcrumb /> */}

                        <div className={cx('product-detail-container')}>
                            <div className={cx('main-detail')}>
                                <div className={cx('main-left')}>
                                    <div className={cx('product-image')}>
                                        <img
                                            src={product?.images[0]?.url.trim()}
                                            alt={product?.name}
                                        />
                                    </div>
                                </div>

                                <div className={cx('main-right')}>
                                    <div className={cx('product-info')}>
                                        <h1 className={cx('product-title')}>{product?.name}</h1>
                                        <div className={cx('product-author')}>
                                            <span>Tác giả:</span> {product?.author.name}
                                        </div>
                                        <p className={cx('product-price')}>
                                            <span className={cx('price-sale')}>
                                                {parseFloat(product?.price).toLocaleString('vi-VN')}{' '}
                                                đ
                                            </span>
                                            Giá cũ:
                                            <span className={cx('price-retail')}>169.000đ</span>
                                        </p>

                                        <table className={cx('product-table')}>
                                            <tbody>
                                                <tr>
                                                    <td className={cx('table-label')}>
                                                        Loại sách:
                                                    </td>
                                                    <td className={cx('table-value')}>
                                                        {product?.category?.name}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className={cx('table-label')}>
                                                        Số lượng còn lại:
                                                    </td>
                                                    <td className={cx('table-value')}>
                                                        {product?.stock > 0
                                                            ? 'Còn hàng'
                                                            : 'Hết hàng'}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div className={cx('quantity')}>
                                            <span>Số lượng</span>
                                            <div className={cx('quantity-control')}>
                                                <button
                                                    className={cx('quantity-btn', 'decrement')}
                                                    onClick={decrement}
                                                >
                                                    -
                                                </button>
                                                <span className={cx('quantity-value')}>
                                                    {quantity}
                                                </span>
                                                <button
                                                    className={cx('quantity-btn', 'increment')}
                                                    onClick={increment}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <button
                                            className={cx('action-btn')}
                                            primary
                                            onClick={() => dispatch(addItem({ product, quantity }))}
                                        >
                                            <FaShoppingCart />
                                            Thêm vào giỏ hàng
                                        </button>

                                        <button
                                            className={cx('action-btn', 'right')}
                                            primary
                                            onClick={() => dispatch(addItem({ product, quantity }))}
                                        >
                                            <FaPhoneVolume /> Gọi điện đặt hàng
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('tab-container')}>
                            <div className={cx('tabs')}>
                                <div className={cx('desc')}>Mô tả</div>
                            </div>

                            <div className={cx('tab-content')}>
                                <div className={cx('table-desc')}>
                                    <div className={cx('tab-content-title')}>
                                        Thông tin chi tiết
                                    </div>
                                    <table className={cx('table')}>
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

                                <div className={cx('tab-content-title')}>Mô tả sản phẩm</div>
                                <p className={cx('text-desc')}>
                                    {isExpanded ? product?.short_summary : shortDescription}
                                </p>

                                <div className={cx('btn-xemthem')}>
                                    {isLongDescription && (
                                        <Button
                                            outline
                                            onClick={toggleDescription}
                                            className={cx('toggle-description')}
                                        >
                                            {isExpanded ? 'Thu gọn' : 'Xem thêm'}
                                        </Button>
                                    )}
                                </div>

                                <CommentForm onAddComment={handleAddComment} />

                                <div className={cx('user-comment')}>
                                    {comments.map((comment) => {
                                        const user = users.find(
                                            (user) => user.id === comment.user_id
                                        ) || { name: 'Người dùng' }
                                        return (
                                            <div key={comment.id} className={cx('item')}>
                                                <div className={cx('info')}>
                                                    <img
                                                        className={cx('img-user')}
                                                        src="/img/user-1.png"
                                                        alt="User"
                                                    />
                                                    <div className={cx('username')}>
                                                        {user.name}
                                                    </div>
                                                </div>
                                                <div className={cx('date')}>
                                                    {moment(comment.created_at).format(
                                                        'YYYY-MM-DD HH:mm:ss'
                                                    )}
                                                </div>
                                                <div className={cx('content-comment')}>
                                                    <p>{comment.content}</p>
                                                    {userData?.id === comment.user_id && (
                                                        <Button
                                                            className={cx('btn-del-comment')}
                                                            text
                                                            onClick={() =>
                                                                handleDeleteComment(comment.id)
                                                            }
                                                        >
                                                            Xóa
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        {/* <RightContent /> */}
                    </div>
                </div>
            </main>
        </MainLayout>
    )
}
