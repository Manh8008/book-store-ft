'use client'
import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import styles from './order-tracking.module.scss'
import orderApiRequest from '@/apiRequests/order'
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton'
import { handleHttpError } from '@/lib/utils'
import { ToastError } from '@/components/ui/ToastError/ToastError'

const cx = classNames.bind(styles)

export default function OrderTracking({ params }) {
    const [orderDetail, setOrderDetail] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const searchParams = useSearchParams()

    const name = searchParams.get('name')
    const phone = searchParams.get('phone')
    const orderStatus = searchParams.get('order_status')
    const district = searchParams.get('district')
    const town = searchParams.get('town')
    const province = searchParams.get('province')
    const addressLine = searchParams.get('address_line')
    const orderDate = searchParams.get('order_date')

    const orderId = params.id

    const fetchOrderDetail = async (orderId) => {
        try {
            const result = await orderApiRequest.getOrderDetail(orderId)
            setOrderDetail(result.payload.data)
        } catch (error) {
            console.error('Lỗi khi lấy chi tiết đơn hàng:', error)
        }
    }

    const handleCancelOrder = async (orderId) => {
        const isConfirmed = window.confirm('Bạn có chắc chắn muốn hủy đơn hàng này không?')

        if (!isConfirmed) {
            return
        }

        try {
            setLoading(true)
            const result = await orderApiRequest.cancelOrder(orderId)
            if (result) {
                alert('Hủy đơn hàng thành công')
                window.location.href = '/customer/order-history'
            }
        } catch (error) {
            handleHttpError(error, setError)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (orderId) {
            fetchOrderDetail(orderId)
        }
    }, [orderId])

    const formatAddress = () => {
        if (!addressLine || !town || !district || !province) return 'Chưa có địa chỉ'
        return `${addressLine}, ${town}, ${district}, ${province}`
    }

    const formatPrice = (price) => {
        return Number(price).toLocaleString() + ' đ'
    }

    const getPaymentMethod = () => {
        return orderDetail?.payment_method === 'COD'
            ? 'Thanh toán tiền mặt khi nhận hàng'
            : 'Thanh toán bằng VnPay'
    }

    if (!orderDetail) {
        return <LoadingSkeleton />
    }

    return (
        <main style={{ background: '#F5F5FA' }}>
            <ToastError errorMessage={error} />
            <div className={cx('container')}>
                <div className={cx('content-wrap')}>
                    <div className={cx('heading')}>
                        <span>Chi tiết đơn hàng #{orderDetail.order_code}</span>
                        <span className={cx('split')}>-</span>
                        <span className={cx('status')}>
                            {orderStatus === 'complete' ? 'Đã hoàn thành' : orderStatus}
                        </span>
                    </div>

                    <div className={cx('created-date')}>Ngày đặt hàng: {orderDate}</div>

                    <div className={cx('info')}>
                        <div className={cx('info-wrap')}>
                            <div className={cx('title')}>Địa chỉ người nhận</div>
                            <div className={cx('content')}>
                                <p className={cx('name')}>{name || 'Chưa có tên'}</p>
                                <p className={cx('address')}>
                                    <span>Địa chỉ: </span>
                                    {formatAddress()}
                                </p>
                                <p className={cx('phone')}>
                                    <span>Điện thoại: </span>
                                    {phone || 'Chưa có số điện thoại'}
                                </p>
                            </div>
                        </div>

                        <div className={cx('info-wrap')}>
                            <div className={cx('title')}>Hình thức thanh toán</div>
                            <div className={cx('content')}>
                                <p>{getPaymentMethod()}</p>
                            </div>
                        </div>
                    </div>

                    <div className={cx('my-order')}>
                        <div className={cx('order-list')}>
                            <h4>Sản phẩm</h4>

                            <div className={cx('order-item')}>
                                <div className={cx('order-body')}>
                                    {orderDetail.books?.map((book) => (
                                        <div key={book.book_id} className={cx('item')}>
                                            <img
                                                className={cx('item-image')}
                                                src={
                                                    book.images[0] ||
                                                    'https://via.placeholder.com/60'
                                                }
                                                alt={book.name}
                                            />
                                            <div className={cx('item-info')}>
                                                <div className={cx('item-name')}>{book.name}</div>
                                                <div className={cx('item-quantity')}>
                                                    Số lượng: {book.quantity}
                                                </div>
                                                <Link
                                                    href={`/book-detail/${book.book_id}`}
                                                    className={cx('buy-again-btn')}
                                                >
                                                    Mua lại
                                                </Link>
                                            </div>
                                            <div className={cx('item-price')}>
                                                {formatPrice(book.price)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className={cx('summary')}>
                            <div className={cx('price-row')}>
                                <span>Tạm tính</span>
                                <span>{formatPrice(orderDetail.total_amount)}</span>
                            </div>
                            <div className={cx('price-row', 'total')}>
                                <span>Tổng cộng</span>
                                <span>{formatPrice(orderDetail.total_amount)}</span>
                            </div>
                        </div>

                        <div className={cx('navigation')}>
                            <Link href="/customer/order-history" className={cx('back-btn')}>
                                &#8592; Quay lại đơn hàng của tôi
                            </Link>
                            {orderStatus == 'Chờ xác nhận' ? (
                                <button
                                    className={cx('track-btn')}
                                    onClick={() => handleCancelOrder(orderId)}
                                >
                                    Hủy đơn hàng
                                </button>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
