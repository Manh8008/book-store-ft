'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import orderApiRequest from '@/apiRequests/order'
import SearchAdmin from '../components/search-admin'
import { ToastError } from '@/components/ui/ToastError'

export default function Order() {
    const [orderData, setOrderData] = useState([])
    const [error, setError] = useState('')
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const [searchedQuery, setSearchedQuery] = useState('')

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

    const handleChangeStatus = async (id) => {
        if (loading) return
        setLoading(true)
        setError('')
        try {
            const res = await orderApiRequest.updateStatus(id, { order_status: 'Đã xác nhận' })
            if (res) {
                setOrderData((prevData) =>
                    prevData.map((order) =>
                        order.id === id ? { ...order, order_status: 'Đã xác nhận' } : order
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
                                    <SearchAdmin
                                        query={query}
                                        setQuery={setQuery}
                                        onSearch={handleSearch}
                                    />
                                </div>
                                <div className="iq-card-body">
                                    {searchedQuery && (
                                        <p>
                                            Kết quả tìm kiếm cho từ khóa "
                                            <strong>{searchedQuery}</strong>"
                                        </p>
                                    )}
                                    <div className="table-responsive">
                                        <table
                                            className="data-tables table table-striped table-bordered"
                                            style={{ width: '100%' }}
                                        >
                                            <thead>
                                                <tr>
                                                    <th style={{ width: '15%' }}>Mã đơn hàng</th>
                                                    <th
                                                        className="text-start"
                                                        style={{ width: '15%' }}
                                                    >
                                                        Thông tin khách hàng
                                                    </th>
                                                    <th style={{ width: '25%' }}>
                                                        Địa chỉ nhận hàng
                                                    </th>
                                                    <th style={{ width: '10%' }}>Ngày đặt hàng</th>
                                                    <th style={{ width: '15%' }}>Trạng thái</th>
                                                    <th style={{ width: '8%' }}>Hoạt động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orderData &&
                                                    orderData.map((item) => (
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
                                                            <td>{item.updated_at || '---'}</td>
                                                            <td>{item.order_status}</td>
                                                            <td>
                                                                <div className="flex align-items-center list-user-action">
                                                                    {item.order_status ===
                                                                    'Chờ xác nhận' ? (
                                                                        <Button
                                                                            outline
                                                                            onClick={() =>
                                                                                handleChangeStatus(
                                                                                    item.id
                                                                                )
                                                                            }
                                                                        >
                                                                            Xác nhận
                                                                        </Button>
                                                                    ) : (
                                                                        <Link
                                                                            className="bg-primary"
                                                                            href={`/admin/order/${item.id}`}
                                                                        >
                                                                            <i className="ri-eye-line"></i>
                                                                        </Link>
                                                                    )}
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
