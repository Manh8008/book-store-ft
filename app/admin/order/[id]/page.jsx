'use client'
import Link from 'next/link'
import classNames from 'classnames/bind'
import styles from '../order.module.scss'
import { useEffect, useState } from 'react'
import orderApiRequest from '@/apiRequests/order'
import { handleHttpError } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'

const cx = classNames.bind(styles)

export default function OrderDetail({ params }) {
    const orderId = params.id
    console.log(orderId)

    const [orderDetail, setOrderDetail] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    // Sử dụng useSearchParams để lấy các tham số query
    const searchParams = useSearchParams()

    const name = searchParams.get('name')
    const phone = searchParams.get('phone')
    const orderStatus = searchParams.get('order_status')
    const district = searchParams.get('district')
    const town = searchParams.get('town')
    const province = searchParams.get('province')
    const addressLine = searchParams.get('address_line')

    // In ra các giá trị từ query params
    useEffect(() => {
        console.log('Order Status:', orderStatus)
        console.log('District:', district)
        console.log('Town:', town)
        console.log('Province:', province)
        console.log('Address Line:', addressLine)
    }, [orderStatus, district, town, province, addressLine])

    const fetchOrderDetail = async () => {
        if (loading) return
        setLoading(true)
        setError('')
        try {
            const result = await orderApiRequest.getOrderDetail(orderId)
            console.log(result)
            setOrderDetail(result.payload.data)
        } catch (error) {
            handleHttpError(error, setError)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchOrderDetail()
    }, [orderId])

    if (loading) {
        return <div>Đang tải dữ liệu...</div>
    }

    if (error) {
        return <div className="text-danger">Đã xảy ra lỗi: {error}</div>
    }

    if (!orderDetail) {
        return <div>Không tìm thấy đơn hàng!</div>
    }

    return (
        <>
            <div className={cx('customContainer', 'container-fluid')}>
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center py-3">
                        <h2 className={cx('customOrderCode', 'h5', 'mb-0')}>
                            <Link href="#" className="text-muted"></Link> Đơn hàng #
                            {orderDetail.order_code}
                        </h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-8">
                            <div className={cx('customCard', 'card', 'mb-4')}>
                                <div className="card-body">
                                    <div className="mb-3 d-flex justify-content-between">
                                        <div>
                                            <span className="me-3">22-11-2021</span>
                                            <span className="me-3 mx-3">
                                                #{orderDetail.order_code}
                                            </span>
                                            <span className="me-3">
                                                {orderDetail.payment_method}
                                            </span>
                                            <span
                                                className={cx(
                                                    'customBadge',
                                                    'badge',
                                                    'rounded-pill',
                                                    'bg-info',
                                                    'ml-3'
                                                )}
                                            >
                                                {orderStatus}
                                            </span>
                                        </div>
                                        <div className={cx('customDropdown', 'd-flex')}>
                                            <div className="dropdown">
                                                <button
                                                    className="btn btn-link p-0 text-muted"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="bi bi-three-dots-vertical"></i>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            <i className="bi bi-pencil"></i> Sửa
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            <i className="bi bi-printer"></i> In
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <table
                                        className={cx('customTable', 'table', 'table-borderless')}
                                    >
                                        <tbody>
                                            {orderDetail &&
                                                orderDetail.books &&
                                                orderDetail.books.map((book) => (
                                                    <tr key={book.book_id}>
                                                        <td>
                                                            <div className="d-flex mb-2">
                                                                <div className="flex-shrink-0">
                                                                    <img
                                                                        src={book.images[0]}
                                                                        alt=""
                                                                        width="35"
                                                                        className="img-fluid"
                                                                    />
                                                                </div>
                                                                <div className="flex-lg-grow-1 ms-3 ml-3">
                                                                    <h6 className="small mb-0">
                                                                        <a
                                                                            href="#"
                                                                            className="text-reset"
                                                                            style={{ fontSize: 14 }}
                                                                        >
                                                                            {book.name}
                                                                        </a>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>{book.quantity}</td>
                                                        <td className="text-end">
                                                            {parseFloat(book?.price).toLocaleString(
                                                                'vi-VN'
                                                            )}
                                                            đ
                                                        </td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="2">Tạm tính</td>
                                                <td className="text-end">
                                                    {parseFloat(
                                                        orderDetail?.total_amount
                                                    ).toLocaleString('vi-VN')}
                                                    đ
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">Phí vận chuyển</td>
                                                <td className="text-end">20.000đ</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">Giảm giá (Mã: NEWYEAR)</td>
                                                <td className="text-danger text-end">-10.00$</td>
                                            </tr>
                                            <tr className="fw-bold">
                                                <td colSpan="2">TỔNG CỘNG</td>
                                                <td className="text-end">
                                                    {parseFloat(
                                                        orderDetail?.total_amount
                                                    ).toLocaleString('vi-VN')}
                                                    đ
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                            <div className={cx('customCard', 'card', 'mb-4')}>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h3 className={cx('h6')}>Phương thức thanh toán</h3>
                                            <p>
                                                {orderDetail.payment_method === 'COD'
                                                    ? 'Thanh toán khi nhận hàng'
                                                    : 'VNPAY'}
                                                <br />
                                                Tổng cộng:
                                                <span className="text-danger">
                                                    {' '}
                                                    {parseFloat(
                                                        orderDetail?.total_amount
                                                    ).toLocaleString('vi-VN')}
                                                    đ
                                                </span>
                                                <br />
                                                <span
                                                    className={cx(
                                                        'badge',
                                                        'rounded-pill',
                                                        orderDetail.payment_status ===
                                                            'Đã thanh toán'
                                                            ? 'bg-success'
                                                            : 'bg-warning'
                                                    )}
                                                >
                                                    {orderDetail.payment_status}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={cx('customCard', 'card', 'mb-4')}>
                                <div className="card-body">
                                    <h3 className={cx('h6')}>Thông tin vận chuyển</h3>
                                    <hr />
                                    <h3 className={cx('h6')}>Địa chỉ</h3>
                                    <address>
                                        <strong>{name}</strong>
                                        <br />
                                        {addressLine}, {town}
                                        <br />
                                        {district}, {province}
                                        <br />
                                        <abbr title="Số điện thoại">ĐT:</abbr> {phone}
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
