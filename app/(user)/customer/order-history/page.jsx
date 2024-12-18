'use client'
import React, { useEffect, useState, useMemo } from 'react'
import classNames from 'classnames/bind'
import { CiSearch } from 'react-icons/ci'
import Link from 'next/link'
import styles from './order-history.module.scss'
import { AccountSidebar } from '@/components/account-sidebar'
import { useUser } from '@/context/user-context'

const cx = classNames.bind(styles)

const ORDER_STATUS = {
    ALL: 'Tất cả',
    PENDING: 'Chờ xác nhận',
    CONFIRMED: 'Đã xác nhận',
    COMPLETED: 'complete',
    CANCELLED: 'Đã hủy'
}

export default function OrderHistory() {
    const { userData } = useUser()
    const [orders, setOrders] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedStatus, setSelectedStatus] = useState(ORDER_STATUS.ALL)
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5

    useEffect(() => {
        if (userData?.orders) {
            setOrders(userData.orders)
        }
    }, [userData])

    const filteredOrders = useMemo(() => {
        return orders.filter((order) => {
            const matchStatus =
                selectedStatus === ORDER_STATUS.ALL || order.order_status === selectedStatus
            const matchSearch =
                searchTerm === '' ||
                order.order_code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                order.name.toLowerCase().includes(searchTerm.toLowerCase())
            return matchStatus && matchSearch
        })
    }, [orders, selectedStatus, searchTerm])

    const currentOrders = useMemo(() => {
        const indexOfLastOrder = currentPage * itemsPerPage
        const indexOfFirstOrder = indexOfLastOrder - itemsPerPage
        return filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder)
    }, [filteredOrders, currentPage])

    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage)

    const handleStatusChange = (status) => {
        setSelectedStatus(status)
    }

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        setCurrentPage(1)
    }, [selectedStatus, searchTerm])

    const getStatusText = (status) => {
        switch (status) {
            case 'complete':
                return 'Đã hoàn thành'
            case 'pending':
                return 'Chờ xác nhận'
            case 'confirmed':
                return 'Đã xác nhận'
            case 'cancelled':
                return 'Đã hủy'
            default:
                return status
        }
    }

    return (
        <div className={cx('content')}>
            <h2 className={cx('heading')}>Lịch sử đơn hàng</h2>

            <div className={cx('menu')}>
                {Object.values(ORDER_STATUS).map((status) => (
                    <div
                        key={status}
                        className={cx('menu-item', { active: selectedStatus === status })}
                        onClick={() => handleStatusChange(status)}
                    >
                        {getStatusText(status)}
                    </div>
                ))}
            </div>

            <div className={cx('search-bar')}>
                <CiSearch />
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Tìm đơn hàng theo Mã đơn hàng hoặc Tên người nhận"
                    className={cx('search-input')}
                />
            </div>

            <div className={cx('my-order')}>
                {filteredOrders.length === 0 ? (
                    <div className={cx('no-orders')}>
                        <img
                            src="/img/empty-order.png"
                            alt="Không có đơn hàng"
                            className={cx('no-orders-image')}
                        />
                        <p>Không có đơn hàng nào</p>
                    </div>
                ) : (
                    <>
                        <div className={cx('order-list')}>
                            {currentOrders.map((order) => (
                                <div key={order.id} className={cx('order-item')}>
                                    <div className={cx('order-header')}>
                                        <div className={cx('order-wrap')}>
                                            <span className={cx('order-code')}>
                                                Mã đơn hàng: #{order.order_code}
                                            </span>
                                            <div>
                                                <span
                                                    className={cx('status')}
                                                    data-status={order.order_status}
                                                >
                                                    {getStatusText(order.order_status)}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={cx('sub-status')}>
                                            Đặt hàng: Ngày {order.order_date}
                                        </div>
                                    </div>

                                    <div className={cx('order-body')}>
                                        <div className={cx('item')}>
                                            <div className={cx('item-info')}>
                                                <div className={cx('item-name')}>
                                                    <span>Họ và tên: </span>
                                                    {order.name}
                                                </div>
                                                <div className={cx('item-phone')}>
                                                    <span>Số điện thoại: </span>
                                                    {order.phone}
                                                </div>
                                                <div className={cx('item-phone')}>
                                                    <span>Địa chỉ nhận hàng: </span>
                                                    {`${order.address_line}, ${order.town}, ${order.district}, ${order.province}`}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={cx('order-footer')}>
                                        <div className={cx('btn-more')}></div>
                                        <div className={cx('actions')}>
                                            <div className={cx('total-price')}>
                                                <div className={cx('title')}>Tổng tiền:</div>
                                                <div className={cx('total')}>
                                                    {parseFloat(order.total_amount).toLocaleString(
                                                        'vi-VN'
                                                    )}
                                                    đ
                                                </div>
                                            </div>
                                            <div className={cx('button-group')}>
                                                <Link
                                                    href={`/customer/order-history/tracking/${
                                                        order.id
                                                    }?order_status=${order.order_status}&district=${
                                                        order.district || ''
                                                    }&town=${order.town || ''}&province=${
                                                        order.province || ''
                                                    }&address_line=${order.address_line || ''}&phone=${
                                                        order.phone || ''
                                                    }&name=${order.name || ''}&order_date=${
                                                        order.order_date || ''
                                                    }`}
                                                    className={cx('detail-btn')}
                                                >
                                                    Xem chi tiết
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <div className={cx('pagination')}>
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className={cx('page-button')}
                                >
                                    &laquo;
                                </button>

                                {[...Array(totalPages)].map((_, index) => {
                                    const pageNumber = index + 1
                                    if (
                                        pageNumber === 1 ||
                                        pageNumber === totalPages ||
                                        Math.abs(pageNumber - currentPage) <= 2
                                    ) {
                                        return (
                                            <button
                                                key={pageNumber}
                                                onClick={() => handlePageChange(pageNumber)}
                                                className={cx('page-button', {
                                                    active: currentPage === pageNumber
                                                })}
                                            >
                                                {pageNumber}
                                            </button>
                                        )
                                    } else if (
                                        pageNumber === currentPage - 3 ||
                                        pageNumber === currentPage + 3
                                    ) {
                                        return <span key={pageNumber}>...</span>
                                    }
                                    return null
                                })}

                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className={cx('page-button')}
                                >
                                    &raquo;
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}
