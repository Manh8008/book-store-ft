'use client'

import { reviewApiRequestAdmin } from '@/apiRequests/post'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

export default function Review() {
    const [review, setReview] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 4 // Số sản phẩm mỗi trang

    const fetchReview = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/getAllPost`)
        const newData = await res.json()
        setReview(newData.data)
    }

    useEffect(() => {
        fetchReview()
    }, [])

    const messageDelete = (id) => {
        Swal.fire({
            title: 'Bạn chắc muốn xóa bài viết này?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Có, tôi muốn xóa'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const result = await reviewApiRequestAdmin.destroyReview(id)

                if (result.status === 200) {
                    Swal.fire({
                        title: 'Xóa thành công',
                        text: 'Bài viết của bạn đã được xóa.',
                        confirmButtonColor: '#3085d6',
                        icon: 'success'
                    })
                    fetchReview()
                } else {
                    Swal.fire({
                        title: 'Lỗi',
                        text: 'Có lỗi xảy ra khi xóa bài viết.',
                        confirmButtonColor: '#3085d6',
                        icon: 'error'
                    })
                }
            }
        })
    }

    const deleteReview = (id) => {
        messageDelete(id)
    }

    // Tính toán các sản phẩm hiển thị trên trang hiện tại
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = review.slice(indexOfFirstItem, indexOfLastItem)

    // Tạo danh sách các trang
    const totalPages = Math.ceil(review.length / itemsPerPage)
    const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1)

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <>
            <div id="content-page" className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Danh sách bài viết</h4>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                        <Link
                                            href="/admin/review/create"
                                            className="btn btn-primary"
                                        >
                                            Thêm bài viết
                                        </Link>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <div className="table-responsive">
                                        <table
                                            className="data-tables table table-striped table-bordered"
                                            style={{ width: 100 + '%' }}
                                        >
                                            <thead>
                                                <tr>
                                                    <th style={{ width: 5 + '%' }}>STT</th>
                                                    <th style={{ width: 15 + '%' }}>
                                                        Ảnh bài viết
                                                    </th>
                                                    <th style={{ width: 30 + '%' }}>Tiêu đề</th>
                                                    <th style={{ width: 40 + '%' }}>Nội dung</th>
                                                    <th style={{ width: 15 + '%' }}>Hoạt động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {currentItems.map((review, index) => (
                                                    <tr key={review.id}>
                                                        <td>{indexOfFirstItem + index + 1}</td>
                                                        <td>
                                                            <img
                                                                className="img-fluid rounded"
                                                                src={`${review.image_url}`}
                                                                alt={review.title}
                                                            />
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">{review.title}</p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">
                                                                {review.description}
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <div className="flex align-items-center list-user-action">
                                                                <Link
                                                                    className="bg-primary"
                                                                    data-toggle="tooltip"
                                                                    data-placement="top"
                                                                    title=""
                                                                    data-original-title="Edit"
                                                                    href={`/admin/review/update/${review.id}`}
                                                                >
                                                                    <i className="ri-pencil-line"></i>
                                                                </Link>
                                                                <Link
                                                                    className="bg-primary"
                                                                    data-toggle="tooltip"
                                                                    data-placement="top"
                                                                    title=""
                                                                    data-original-title="Xoá"
                                                                    href="#"
                                                                    onClick={() =>
                                                                        deleteReview(review.id)
                                                                    }
                                                                >
                                                                    <i className="ri-delete-bin-line"></i>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Phân trang */}
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
