'use client'
import React, { useEffect, useState } from 'react'

import Chart from './components/chart'
import CustomerCount from './components/customerCount'
import RecentOrder from './components/order/recent-order'
import OrderCount from './components/orderCount'
import ProductCount from './components/productCount'
import StatusOrderCount from './components/statusOrderCount'
import TotalRevenue from "./components/totalRevenue";
import RevenueChart from './components/revenueChart'
export default function DashBoard() {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const [customer, product, order, status, totalRevenue] = await Promise.all([
                    fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/countUsers`,).then(res => res.json()),
                    fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/countBooks`).then(res => res.json()),
                    fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/countOrders`).then(res => res.json()),
                    fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/pendingOrdersCount`).then(res => res.json()),
                    fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/totalRevenue`).then(res => res.json()),
                ]);
                setData({
                    customerCount: customer.data,
                    productCount: product.data,
                    orderCount: order.data,
                    statusOrderCount: status.data,
                    totalRevenue: totalRevenue.data
                });
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
                        <StatusOrderCount count={data.statusOrderCount.pending_orders}></StatusOrderCount>
                        <TotalRevenue count={data.totalRevenue.total_revenue}></TotalRevenue>

                        {/* <Chart></Chart> */}
                        <div className="col-md-6">
                            <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                                <div className="iq-card-header d-flex justify-content-between align-items-center">
                                    <div className="iq-header-title">
                                        <h4 className="card-title mb-0">Tóm lược</h4>
                                    </div>
                                </div>
                                <RevenueChart></RevenueChart>
                            </div>
                        </div>
                        <RecentOrder />
                    </div>
                </div>
            </div>
        </>
    )
}
