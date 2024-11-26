"use client"

import orderApiRequest from "@/apiRequests/order"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function RecentOrder() {
    const [order, setOrder] = useState([])
    const fetchOrder = async () => {
        const res = await orderApiRequest.getAll()
        setOrder(res.payload.data)
    }

    useEffect(() => {
        fetchOrder();
    }, [])
    // console.log(order)

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    const filterPendingOrders = (orders) => {
        return orders.filter((order) => order.order_status === "Chờ xác nhận")
    }






    return (
        <>
            <div className="col-sm-12">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                    <div className="iq-card-header d-flex justify-content-between">
                        <div className="iq-header-title">
                            <h4 className="card-title">Mở hóa đơn</h4>
                        </div>
                        <div className="iq-card-header-toolbar d-flex align-items-center">
                            <div className="dropdown">
                                <span
                                    className="dropdown-toggle text-primary"
                                    id="dropdownMenuButton5"
                                    data-toggle="dropdown"
                                >
                                    <i className="ri-more-fill"></i>
                                </span>
                                <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="dropdownMenuButton5"
                                >
                                    <a className="dropdown-item" href="#">
                                        <i className="ri-eye-fill mr-2"></i>Xem
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="ri-delete-bin-6-fill mr-2"></i>Xoá
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="ri-pencil-fill mr-2"></i>Sửa
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="ri-printer-fill mr-2"></i>In
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="ri-file-download-fill mr-2"></i>
                                        Tải xuống
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="iq-card-body">
                        <div className="table-responsive">
                            <table className="table mb-0 table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Khách hàng</th>
                                        <th scope="col">Ngày</th>
                                        <th scope="col">Hóa đơn</th>
                                        <th scope="col">Số tiền</th>
                                        <th scope="col">Trạng thái</th>
                                        <th className="text-center" scope="col">Hoạt động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filterPendingOrders(order).map((order) => (
                                        <tr key={order.id}>
                                            <td>{order.name}</td>
                                            <td>{formatDate(order.order_date)}</td>
                                            <td>{order.order_code}</td>
                                            <td>{parseFloat(order.total_amount).toLocaleString('vi-VN')}đ</td>
                                            <td>
                                                <div
                                                    className={`badge badge-pill text-white ${order.order_status === 'Đã hủy' ? 'bg-danger' :
                                                        order.order_status === 'Chờ xác nhận' ? 'bg-warning' :
                                                            order.order_status === 'Đã xác nhận' || order.order_status === 'Đang vận chuyển' ? 'bg-success' :
                                                                'bg-secondary'
                                                        }`}
                                                >
                                                    {order.order_status}
                                                </div>
                                            </td>

                                            <td className="text-center"><Link className="primary" href=""><i className="ri-eye-line"></i></Link></td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}