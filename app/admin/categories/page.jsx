"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Categories() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/getAllCategories`, { cache: 'no-store' });
            const newData = await res.json();
            setData(newData.data);
        }
        fetchCategories();
    }, [])



    return (
        <>
            {/* <!-- Page Content  --> */}
            <div id="content-page" className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Danh sách danh mục</h4>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                        <Link href="/admin/categories/add-categories" className="btn btn-primary">Thêm danh mục mới</Link>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <div className="table-responsive">
                                        <table className="data-tables table table-striped table-bordered" style={{ width: 100 + "%" }}>
                                            <thead>
                                                <tr>
                                                    <th width="5%">STT</th>
                                                    <th width="5%">Ảnh danh mục</th>
                                                    <th width="25%">Tên danh mục</th>
                                                    {/* <th width="40%">Mô tả danh mục</th> */}
                                                    <th width="5%">Hoạt động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.map((cate, index) => (
                                                    <tr key={cate.id}>
                                                        <td>{index + 1}</td>
                                                        <td><img className="img-fluid rounded" src={cate.image} alt={cate.name} width="100" /></td>
                                                        <td>{cate.name}</td>
                                                        {/* <td>
                                                            <p className="mb-0">{cate.description}</p>
                                                        </td> */}
                                                        <td>
                                                            <div className="flex align-items-center list-user-action">
                                                                <Link className="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Sửa" href="/admin/categories/edit-categories"><i className="ri-pencil-line"></i></Link>
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