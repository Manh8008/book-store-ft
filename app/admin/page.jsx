'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import CustomerCount from './components/customerCount'
import RecentOrder from './components/order/recent-order'
import OrderCount from './components/orderCount'
import ProductCount from './components/productCount'
import StatusOrderCount from './components/statusOrderCount'
import TotalRevenue from './components/totalRevenue'
import RevenueChart from './components/revenueChart'
import { productApiRequest } from '@/apiRequests/product'
export default function DashBoard() {
    const [data, setData] = useState(null)
    const [productBestSeller, setProductBestSeller] = useState([])

    const fetchCounts = async () => {
        try {
            const [customer, product, order, status, totalRevenue] = await Promise.all([
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
                ),
                fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/totalRevenue`).then((res) =>
                    res.json()
                )
            ])
            setData({
                customerCount: customer.data,
                productCount: product.data,
                orderCount: order.data,
                statusOrderCount: status.data,
                totalRevenue: totalRevenue.data
            })
        } catch (error) {
            console.error('Error fetching counts:', error)
        }
    }

    const fetchBestSellerProduct = async () => {
        try {
            const result = await productApiRequest.getBooksBestSeller()
            setProductBestSeller(result.payload.data.slice(0, 4))
        } catch (error) {
            console.error('Error fetching counts:', error)
        }
    }

    useEffect(() => {
        fetchCounts()
        fetchBestSellerProduct()
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
                        <div className="col-md-6" style={{ height: '450px' }}>
                            <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                                <div className="iq-card-header d-flex justify-content-between align-items-center">
                                    <div className="iq-header-title">
                                        <h4 className="card-title mb-0">Doanh thu theo tháng</h4>
                                    </div>
                                </div>
                                <RevenueChart></RevenueChart>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-6">
                            <TotalRevenue count={data.totalRevenue.total_revenue}></TotalRevenue>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card shadow-sm border-0 p-4">
                                        <h5 className="mb-4 fw-bold text-primary">
                                            Top sản phẩm bán chạy
                                        </h5>
                                        {productBestSeller.length > 0 ? (
                                            <ul className="list-group list-group-flush">
                                                {productBestSeller.map((product) => (
                                                    <li
                                                        key={product.id}
                                                        className="list-group-item d-flex align-items-center px-0 py-3 border-bottom"
                                                    >
                                                        <img
                                                            src={
                                                                product.images[0].url ||
                                                                'https://via.placeholder.com/64'
                                                            }
                                                            alt={product.name}
                                                            className="rounded me-3"
                                                            style={{
                                                                width: '64px',
                                                                height: '64px',
                                                                objectFit: 'cover'
                                                            }}
                                                        />
                                                        <div className="flex-grow-1">
                                                            <div
                                                                className="fw-bold text-truncate"
                                                                style={{
                                                                    maxWidth: '180px',
                                                                    whiteSpace: 'nowrap',
                                                                    overflow: 'hidden',
                                                                    textOverflow: 'ellipsis'
                                                                }}
                                                                title={product.name}
                                                            >
                                                                {product.name}
                                                            </div>
                                                            <div className="text-muted small">
                                                                {new Intl.NumberFormat('vi-VN', {
                                                                    style: 'currency',
                                                                    currency: 'VND'
                                                                }).format(product.price)}
                                                            </div>
                                                        </div>
                                                        <div className="flex align-items-center list-user-action">
                                                            <Link
                                                                className="bg-primary"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title="Edit"
                                                                href={`/admin/product/update/${product.id}`}
                                                            >
                                                                <i className="ri-pencil-line"></i>
                                                            </Link>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <div className="text-center text-muted">
                                                Không có sản phẩm bán chạy
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <RecentOrder />
                    </div>
                </div>
            </div>
        </>
    )
}
