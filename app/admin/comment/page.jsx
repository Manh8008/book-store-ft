"use client"

import { commentApiRequestAdmin } from "@/apiRequests/comment";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'


export default function Comment() {
    const [comment, setComment] = useState([]);

    const fetchComment = async () => {
        const result = await commentApiRequestAdmin.getAllComment();
        setComment(result.payload.data)
    }
    console.log(comment)

    useEffect(() => {
        fetchComment();
    }, [])

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const year = date.getFullYear()
        return `${day}/${month}/${year}`
    }

    // Xóa bình luận
    const messageDelete = (comment_id) => {
        Swal.fire({
            title: 'Bạn chắc muốn xóa bình luận này?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Có, tôi muốn xóa'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const result = await commentApiRequestAdmin.destroyComment(comment_id)

                if (result.status === 200) {
                    Swal.fire({
                        title: 'Xóa thành công',
                        text: 'Bình luận của bạn đã được xóa.',
                        confirmButtonColor: '#3085d6',
                        icon: 'success'
                    })
                    fetchComment()
                } else {
                    Swal.fire({
                        title: 'Lỗi',
                        text: 'Có lỗi xảy ra khi xóa bình luận.',
                        confirmButtonColor: '#3085d6',
                        icon: 'error'
                    })
                }
            }
        })
    }

    const deleteComment = (comment_id) => {
        messageDelete(comment_id)
    }


    return (
        <>
            <div id="content-page" className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title" style={{ display: 'flex' }}>
                                        <h4 className="card-title">Danh sách bình luận</h4>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <div className="table-responsive">
                                        <table
                                            className="data-tables table table-striped table-bordered"
                                            style={{ width: '100%' }}
                                        >
                                            <thead>
                                                <tr>
                                                    <th width="3%">STT</th>
                                                    <th width="10%">Hình ảnh</th>
                                                    <th width="20%">Tên sản phẩm</th>
                                                    <th width="12%">Tên người dùng</th>
                                                    <th width="15%">Nội dung bình luận</th>
                                                    <th width="10%">Ngày bình luận</th>
                                                    <th width="5%">Hoạt động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {comment.map((comment, index) => (
                                                    <tr key={comment.id}>
                                                        <td>{index + 1}</td>
                                                        <td>
                                                            <img
                                                                className="img-fluid rounded"
                                                                src={`${comment.book.image_urls}`}
                                                                alt={comment.book.name}
                                                            />
                                                        </td>
                                                        <td>{comment.book.name}</td>
                                                        <td>{comment.user}</td>
                                                        <td>{comment.content}</td>
                                                        <td>{formatDate(comment.created_at)}</td>
                                                        <td>
                                                            <div className="flex align-items-center list-user-action">
                                                                <Link
                                                                    className="bg-primary"
                                                                    data-toggle="tooltip"
                                                                    data-placement="top"
                                                                    title="Xoá"
                                                                    href="#"
                                                                    onClick={() =>
                                                                        deleteComment(comment.comment_id)
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
                                    {/* <nav className="mt-4">
                                        <ul className="pagination pagination-lg justify-content-center">
                                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                                <button
                                                    className="page-link"
                                                    onClick={() => handlePageChange(currentPage - 1)}
                                                    aria-label="Previous"
                                                >
                                                    <span aria-hidden="true">&laquo;</span>
                                                </button>
                                            </li>
                                            {pageNumbers.map((number) => (
                                                <li
                                                    key={number}
                                                    className={`page-item ${number === currentPage ? 'active' : ''}`}
                                                >
                                                    <button
                                                        className="page-link"
                                                        onClick={() => handlePageChange(number)}
                                                    >
                                                        {number}
                                                    </button>
                                                </li>
                                            ))}
                                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                                <button
                                                    className="page-link"
                                                    onClick={() => handlePageChange(currentPage + 1)}
                                                    aria-label="Next"
                                                >
                                                    <span aria-hidden="true">&raquo;</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </nav> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}