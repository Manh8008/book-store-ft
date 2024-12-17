'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames/bind'
import Image from 'next/image'

import orderApiRequest from '@/apiRequests/order'
import SearchAdmin from '../components/search-admin'
import { ToastError } from '@/components/ui/ToastError/ToastError'

import styles from './order.module.scss'
import { DropdownMenu } from '@/components/ui/dropdown-menu'
const cx = classNames.bind(styles)

export default function Order() {
    const [orderData, setOrderData] = useState([])
    const [error, setError] = useState('')
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const [searchedQuery, setSearchedQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 4

    const fetchOrders = async () => {
        if (loading) return
        setLoading(true)
        try {
            const data = await orderApiRequest.getAll()
            setOrderData(data.payload.data)
        } catch (err) {
            setError('Không thể lấy dữ liệu đơn hàng!')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchOrders()
    }, [])

    const orderStatusOrder = {
        'Chờ xác nhận': 1,
        'Đã xác nhận': 2,
        complete: 3,
        'Đã hủy': 4
    }

    const handleChangeOrderStatus = async (e, id) => {
        const newStatus = e.target.value

        // Kiểm tra nếu trạng thái mới không hợp lệ
        const currentOrderStatus = orderData.find((order) => order.id === id)?.order_status
        if (orderStatusOrder[newStatus] < orderStatusOrder[currentOrderStatus]) {
            setError('Trạng thái không thể quay lại trạng thái cũ!')
            return
        }

        if (loading) return
        setLoading(true)
        setError('')

        try {
            const res = await orderApiRequest.updateStatus(id, { order_status: newStatus })
            if (res) {
                setOrderData((prevData) =>
                    prevData.map((order) =>
                        order.id === id ? { ...order, order_status: newStatus } : order
                    )
                )
            } else {
                setError('Không thể cập nhật trạng thái đơn hàng!')
            }
        } catch (err) {
            setError('Lỗi kết nối tới server!')
        } finally {
            setLoading(false)
        }
    }

    const handleSearch = async (e) => {
        if (loading) return
        setLoading(true)
        setError('')
        e.preventDefault()
        try {
            const result = await orderApiRequest.searchOrder(query)
            setOrderData(result.payload.data)
            setSearchedQuery(query)
        } catch (error) {
            setError(`Không tìm thấy đơn hàng cho từ khóa ${query}`)
            return
        } finally {
            setLoading(false)
        }
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const year = date.getFullYear()
        return `${day}/${month}/${year}`
    }

    // Tính toán các sản phẩm hiển thị trên trang hiện tại
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage

    const currentItems = Array.isArray(orderData)
        ? orderData.slice(indexOfFirstItem, indexOfLastItem)
        : []

    const totalPages = Array.isArray(orderData) ? Math.ceil(orderData.length / itemsPerPage) : 0

    const pageNumbers = totalPages > 0 ? [...Array(totalPages).keys()].map((num) => num + 1) : []

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const filterOrdersByStatus = async (status) => {
        setLoading(true)
        setError(null)

        try {
            let result
            if (status === 'pending') {
                result = await orderApiRequest.pendingOrders()
            } else if (status === 'confirmed') {
                result = await orderApiRequest.confirmOrder()
            } else if (status === 'canceled') {
                result = await orderApiRequest.canceledOrder()
            } else if (status === 'complete') {
                result = await orderApiRequest.conpleteOrder()
            } else {
                result = await orderApiRequest.getAll()
            }

            setOrderData(result.payload.data)
        } catch (err) {
            handleHttpError(error, setError)
        } finally {
            setLoading(false)
        }
    }

    const sortOrdersByDate = (order) => {
        if (loading) return
        setLoading(true)
        setError('')

        try {
            const sortedOrders = [...orderData].sort((a, b) => {
                return new Date(b.created_at) - new Date(a.created_at)
            })
            setOrderData(sortedOrders)
        } catch (err) {
            setError('Không thể sắp xếp đơn hàng!')
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div id="content-page" className="content-page">
                <ToastError errorMessage={error} />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Danh sách đơn hàng</h4>
                                    </div>
                                    <button className={cx('sort-btn')} onClick={sortOrdersByDate}>
                                        <i className="ri-time-line me-1"></i>
                                        Mới nhất
                                    </button>
                                    <div className="d-flex gap-3 align-items-center">
                                        <DropdownMenu onStatusSort={filterOrdersByStatus} />
                                        <SearchAdmin
                                            query={query}
                                            setQuery={setQuery}
                                            onSearch={handleSearch}
                                        />
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    {searchedQuery && (
                                        <p>
                                            Kết quả tìm kiếm cho từ khóa "
                                            <strong>{searchedQuery}</strong>"
                                        </p>
                                    )}
                                    <div className="table-responsive">
                                        {currentItems.length > 0 ? (
                                            <table
                                                className="data-tables table table-striped table-bordered"
                                                style={{ width: '100%' }}
                                            >
                                                <thead>
                                                    <tr>
                                                        <th style={{ width: '15%' }}>
                                                            Mã đơn hàng
                                                        </th>
                                                        <th
                                                            className="text-start"
                                                            style={{ width: '15%' }}
                                                        >
                                                            Thông tin khách hàng
                                                        </th>
                                                        <th style={{ width: '25%' }}>
                                                            Địa chỉ nhận hàng
                                                        </th>
                                                        <th style={{ width: '10%' }}>
                                                            Ngày đặt hàng
                                                        </th>
                                                        <th style={{ width: '10%' }}>Trạng thái</th>
                                                        <th style={{ width: '15%' }}>
                                                            Thay đổi trạng thái
                                                        </th>
                                                        <th style={{ width: '8%' }}>Hoạt động</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {currentItems.map((item) => (
                                                        <tr key={item.id}>
                                                            <td>{item.order_code || ''}</td>
                                                            <td className="text-start">
                                                                <small>
                                                                    Họ và tên:
                                                                    <strong>{item.name}</strong>
                                                                </small>
                                                                <br />
                                                                <small>
                                                                    Số điện thoại:
                                                                    <strong>
                                                                        {item.phone || '---'}
                                                                    </strong>
                                                                </small>
                                                            </td>
                                                            <td>
                                                                <small>
                                                                    Quận/Huyện:
                                                                    <strong>
                                                                        {item.district || '---'}
                                                                    </strong>
                                                                </small>
                                                                <br />
                                                                <small>
                                                                    Phường/Xã:
                                                                    <strong>
                                                                        {item.town || '---'}
                                                                    </strong>
                                                                </small>
                                                                <br />
                                                                <small>
                                                                    Tỉnh/Thành phố:
                                                                    <strong>
                                                                        {item.province || '---'}
                                                                    </strong>
                                                                </small>
                                                                <br />
                                                                <small>
                                                                    Địa chỉ chi tiết:
                                                                    <strong>
                                                                        {item.address_line || '---'}
                                                                    </strong>
                                                                </small>
                                                            </td>
                                                            <td>
                                                                {formatDate(item.created_at) ||
                                                                    '---'}
                                                            </td>
                                                            <td>
                                                                <span
                                                                    className={cx('status-badge', {
                                                                        pending:
                                                                            item.order_status ===
                                                                            'Chờ xác nhận',
                                                                        confirmed:
                                                                            item.order_status ===
                                                                            'Đã xác nhận',
                                                                        completed:
                                                                            item.order_status ===
                                                                            'complete',
                                                                        cancelled:
                                                                            item.order_status ===
                                                                            'Đã hủy'
                                                                    })}
                                                                >
                                                                    {item.order_status ===
                                                                    'complete'
                                                                        ? 'Đã hoàn thành'
                                                                        : item.order_status}
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <select
                                                                    className={cx('status-select')}
                                                                    value={item.order_status}
                                                                    onChange={(e) =>
                                                                        handleChangeOrderStatus(
                                                                            e,
                                                                            item.id
                                                                        )
                                                                    }
                                                                >
                                                                    <option value="Chờ xác nhận">
                                                                        Chờ xác nhận
                                                                    </option>
                                                                    <option value="Đã xác nhận">
                                                                        Đã xác nhận
                                                                    </option>
                                                                    <option value="complete">
                                                                        Đã hoàn thành
                                                                    </option>
                                                                    <option value="Đã hủy">
                                                                        Đã hủy
                                                                    </option>
                                                                </select>
                                                            </td>

                                                            <td>
                                                                <div className="flex align-items-center list-user-action">
                                                                    <Link
                                                                        className="bg-primary"
                                                                        href={`/admin/order/${
                                                                            item.id
                                                                        }?order_status=${
                                                                            item.order_status
                                                                        }&district=${
                                                                            item.district || ''
                                                                        }&town=${
                                                                            item.town || ''
                                                                        }&province=${
                                                                            item.province || ''
                                                                        }&address_line=${
                                                                            item.address_line || ''
                                                                        }&phone=${
                                                                            item.phone || ''
                                                                        }&name=${item.name || ''}`}
                                                                    >
                                                                        <i className="ri-eye-line"></i>
                                                                    </Link>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        ) : (
                                            <div className="text-center py-5">
                                                <Image
                                                    width={400}
                                                    height={400}
                                                    src="/img/empty-order.png"
                                                    alt="Không có đơn hàng"
                                                />
                                                <p className="mt-3 text-muted">
                                                    Không có đơn hàng nào
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Phân trang */}
                                    {currentItems.length > 0 && (
                                        <nav className="mt-4">
                                            <ul className="pagination pagination-lg justify-content-center">
                                                <li
                                                    className={`page-item ${
                                                        currentPage === 1 ? 'disabled' : ''
                                                    }`}
                                                >
                                                    <button
                                                        className="page-link"
                                                        onClick={() =>
                                                            handlePageChange(currentPage - 1)
                                                        }
                                                        aria-label="Previous"
                                                    >
                                                        <span aria-hidden="true">&laquo;</span>
                                                    </button>
                                                </li>
                                                {pageNumbers.map((number) => (
                                                    <li
                                                        key={number}
                                                        className={`page-item ${
                                                            number === currentPage ? 'active' : ''
                                                        }`}
                                                    >
                                                        <button
                                                            className="page-link"
                                                            onClick={() => handlePageChange(number)}
                                                        >
                                                            {number}
                                                        </button>
                                                    </li>
                                                ))}
                                                <li
                                                    className={`page-item ${
                                                        currentPage === totalPages ? 'disabled' : ''
                                                    }`}
                                                >
                                                    <button
                                                        className="page-link"
                                                        onClick={() =>
                                                            handlePageChange(currentPage + 1)
                                                        }
                                                        aria-label="Next"
                                                    >
                                                        <span aria-hidden="true">&raquo;</span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </nav>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
