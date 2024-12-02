"use client"

import { bannerApiRequestAdmin } from "@/apiRequests/banner";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'


export default function Banner() {
    const [banner, setBanner] = useState([])

    const fetchBanner = async () => {
        const result = await bannerApiRequestAdmin.getAllBanner();
        // console.log(banner);
        setBanner(result.payload.data);
    }
    useEffect(() => {
        fetchBanner();
    }, [])

    const messageDelete = (id) => {
        Swal.fire({
            title: 'Bạn chắc muốn xóa ảnh banner này?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Có, tôi muốn xóa'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const result = await bannerApiRequestAdmin.destroyBanner(id)

                if (result.status === 200) {
                    Swal.fire({
                        title: 'Xóa thành công',
                        text: 'Ảnh banner đã được xóa.',
                        confirmButtonColor: '#3085d6',
                        icon: 'success'
                    })
                    fetchBanner();
                } else {
                    Swal.fire({
                        title: 'Lỗi',
                        text: 'Có lỗi xảy ra khi xóa ảnh banner.',
                        confirmButtonColor: '#3085d6',
                        icon: 'error'
                    })
                }
            }
        })
    }

    const deleteBanner = (id) => {
        messageDelete(id)
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
                                        <h4 className="card-title">Danh sách banner</h4>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                        <Link
                                            href="/admin/banner/create"
                                            className="btn btn-primary"
                                        >
                                            Thêm banner mới
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
                                                    <th width="1%">STT</th>
                                                    <th width="20%">Ảnh banner</th>
                                                    <th width="2%">Hoạt động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {banner.map((banner, index) => (
                                                    <tr key={banner.id}>
                                                        <td>{index + 1}</td>
                                                        <td>
                                                            <img
                                                                className="img-fluid rounded"
                                                                src={banner.image_url}
                                                                alt=""
                                                            />
                                                        </td>
                                                        <td>
                                                            <div className="flex align-items-center list-user-action">
                                                                <Link
                                                                    className="bg-primary"
                                                                    data-toggle="tooltip"
                                                                    data-placement="top"
                                                                    title=""
                                                                    data-original-title="Sửa"
                                                                    href=""
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
                                                                        deleteBanner(banner.id)
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}