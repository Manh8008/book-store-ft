'use client'
import React, { useEffect, useState } from 'react'

import Chart from './components/chart'
import CustomerCount from './components/customerCount'
import RecentOrder from './components/order/recent-order'
import OrderCount from './components/orderCount'
import ProductCount from './components/productCount'
import StatusOrderCount from './components/statusOrderCount'
export default function DashBoard() {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const [customer, product, order, status] = await Promise.all([
                    fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/countUsers`).then((res) =>
                        res.json()
                    ),
                    fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/countBooks`).then((res) =>
                        res.json()
                    ),
                    fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/countOrders`).then((res) =>
                        res.json()
                    ),
                    fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/pendingOrdersCount`).then(
                        (res) => res.json()
                    )
                ])
                setData({
                    customerCount: customer.data,
                    productCount: product.data,
                    orderCount: order.data,
                    statusOrderCount: status.data
                })
            } catch (error) {
                console.error('Error fetching counts:', error)
            }
        }

        fetchCounts()
    }, [])

    if (!data) {
        return <div>Loading...</div>
    }

    return (
        <>
            {/* <!-- Page Content  --> */}
            <div id="content-page" className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <CustomerCount count={data.customerCount.total_users}></CustomerCount>
                        <ProductCount count={data.productCount.total_books}></ProductCount>
                        <OrderCount count={data.orderCount.total_orders}></OrderCount>
                        <StatusOrderCount
                            count={data.statusOrderCount.pending_orders}
                        ></StatusOrderCount>
                        {/* <Chart></Chart> */}
                        {/* <div className="col-md-4">
                            <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                                <div className="iq-card-header d-flex justify-content-between align-items-center">
                                    <div className="iq-header-title">
                                        <h4 className="card-title mb-0">Tóm lược</h4>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <ul className="list-inline p-0 mb-0">
                                        <li>
                                            <div className="iq-details mb-2">
                                                <span className="title">Thu nhập</span>
                                                <div className="percentage float-right text-primary">
                                                    95 <span>%</span>
                                                </div>
                                                <div className="iq-progress-bar-linear d-inline-block w-100">
                                                    <div className="iq-progress-bar iq-bg-primary">
                                                        <span
                                                            className="bg-primary"
                                                            data-percent="90"
                                                        ></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="iq-details mb-2">
                                                <span className="title">Lợi nhuận</span>
                                                <div className="percentage float-right text-warning">
                                                    72 <span>%</span>
                                                </div>
                                                <div className="iq-progress-bar-linear d-inline-block w-100">
                                                    <div className="iq-progress-bar iq-bg-warning">
                                                        <span
                                                            className="bg-warning"
                                                            data-percent="75"
                                                        ></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="iq-details mb-2">
                                                <span className="title">Chi phí</span>
                                                <div className="percentage float-right text-info">
                                                    75 <span>%</span>
                                                </div>
                                                <div className="iq-progress-bar-linear d-inline-block w-100">
                                                    <div className="iq-progress-bar iq-bg-info">
                                                        <span
                                                            className="bg-info"
                                                            data-percent="65"
                                                        ></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                                <div className="iq-card-body">
                                    <h4 className="text-uppercase text-black mb-0">
                                        Phiên (Bây giờ)
                                    </h4>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="font-size-80 text-black">12</div>
                                        <div className="text-left">
                                            <p className="m-0 text-uppercase font-size-12">1 giờ</p>
                                            <div className="mb-1 text-black">
                                                1500
                                                <span className="text-danger">
                                                    <i className="ri-arrow-down-s-fill"></i>3.25%
                                                </span>
                                            </div>
                                            <p className="m-0 text-uppercase font-size-12">
                                                1 ngày
                                            </p>
                                            <div className="mb-1 text-black">
                                                1890
                                                <span className="text-success">
                                                    <i className="ri-arrow-down-s-fill"></i>1.00%
                                                </span>
                                            </div>
                                            <p className="m-0 text-uppercase font-size-12">
                                                1 tuần
                                            </p>
                                            <div className="text-black">
                                                1260
                                                <span className="text-danger">
                                                    <i className="ri-arrow-down-s-fill"></i>9.87%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="wave-chart-7"></div>
                                </div>
                            </div>
                        </div> */}
                        <RecentOrder />
                    </div>
                </div>
            </div>
        </>
    )
}
