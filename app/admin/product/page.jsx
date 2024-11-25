"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Product() {

    const [product, setData] = useState([])

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/getAllBooks`, { cache: 'no-store' })
            const newData = await res.json()
            setData(newData.data)
        }

        fetchProduct()
    }, [])


    return (
        <>
            <div id="content-page" className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Danh sách sách</h4>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                        <a href="/admin/product/create" className="btn btn-primary">Thêm sách</a>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <div className="table-responsive">
                                        <table className="data-tables table table-striped table-bordered" style={{ width: 100 + "%" }}>
                                            <thead>
                                                <tr>
                                                    <th width="3%">STT</th>
                                                    <th width="12%">Hình ảnh</th>
                                                    <th width="15%">Tên sách</th>
                                                    <th width="15%">Thể loại sách</th>
                                                    <th width="15%">Tác giả sách</th>
                                                    <th width="18%">Mô tả sách</th>
                                                    <th width="5%">Số lượng</th>
                                                    <th width="10%">Giá</th>
                                                    <th width="15%">Hoạt động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {product.map((product, index) => (
                                                    <tr key={product.id}>
                                                        <td>{index + 1}</td>
                                                        <td><img className="img-fluid rounded" src={product.images[0]?.url} alt={product.name} /></td>
                                                        <td>{product.name}</td>
                                                        <td>{product.category.name}</td>
                                                        <td>{product.author.name}</td>
                                                        <td>
                                                            <p className="mb-0">{product.short_summary}</p>
                                                        </td>
                                                        <td>
                                                            {product.stock}
                                                        </td>
                                                        <td>{parseFloat(product.price).toLocaleString('vi-VN')}đ</td>
                                                        <td>
                                                            <div className="flex align-items-center list-user-action">
                                                                <Link className="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="/admin/product/update/1"><i className="ri-pencil-line"></i></Link>
                                                                <Link className="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Xoá" href="#"><i className="ri-delete-bin-line"></i></Link>
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
    );
}