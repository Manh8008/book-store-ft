'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

import { catalogApiRequest, catalogApiRequestAdmin } from '@/apiRequests/category'
import { ToastError } from '@/components/ui/ToastError'
import SearchAdmin from '../components/search-admin'

export default function Categories() {
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState('')
    const [searchedQuery, setSearchedQuery] = useState('')

    const fetchCategories = async () => {
        const result = await catalogApiRequestAdmin.getAllCatalog()
        console.log(result)
        setData(result.payload.data)
    }
    useEffect(() => {
        fetchCategories()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault()
        setError('')

        if (!query.trim()) {
            Swal.fire({
                title: 'Lỗi',
                text: 'Vui lòng nhập từ khóa tìm kiếm!',
                icon: 'warning',
                confirmButtonColor: '#3085d6'
            })
            return
        }

        if (loading) return
        setLoading(true)

        try {
            const result = await catalogApiRequest.searchCatalog(query)
            setData(result.payload.data)
            setSearchedQuery(query)
        } catch (error) {
            setError(`Không có danh mục nào cho từ khóa ${query}`)
            setSearchedQuery('')
        } finally {
            setLoading(false)
        }
    }

    const messageDelete = (id) => {
        Swal.fire({
            title: 'Bạn chắc muốn xóa danh mục này?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Có, tôi muốn xóa'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const result = await catalogApiRequestAdmin.destroyCatalog(id)

                if (result.status === 200) {
                    Swal.fire({
                        title: 'Xóa thành công',
                        text: 'Danh mục của bạn đã được xóa.',
                        confirmButtonColor: '#3085d6',
                        icon: 'success'
                    })
                    fetchCategories()
                } else {
                    Swal.fire({
                        title: 'Lỗi',
                        text: 'Có lỗi xảy ra khi xóa danh mục.',
                        confirmButtonColor: '#3085d6',
                        icon: 'error'
                    })
                }
            }
        })
    }

    const deleteCategories = (id) => {
        messageDelete(id)
    }

    return (
        <>
            {/* <!-- Page Content  --> */}
            <ToastError errorMessage={error} />

            <div id="content-page" className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title" style={{ display: 'flex' }}>
                                        <h4 className="card-title">Danh sách danh mục</h4>
                                        <SearchAdmin
                                            query={query}
                                            setQuery={setQuery}
                                            onSearch={handleSearch}
                                        />
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                        <Link
                                            href="/admin/catalog/create"
                                            className="btn btn-primary"
                                        >
                                            Thêm danh mục mới
                                        </Link>
                                    </div>
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
                                            style={{ width: 100 + '%' }}
                                        >
                                            <thead>
                                                <tr>
                                                    <th width="5%">STT</th>
                                                    <th width="5%">Ảnh danh mục</th>
                                                    <th width="20%">Tên danh mục</th>
                                                    {/* <th width="40%">Mô tả danh mục</th> */}
                                                    <th width="5%">Hoạt động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.map((cate, index) => (
                                                    <tr key={cate.id}>
                                                        <td>{index + 1}</td>
                                                        <td>
                                                            <img
                                                                className="img-fluid rounded"
                                                                src={cate.image}
                                                                alt={cate.name}
                                                                width="100"
                                                            />
                                                        </td>
                                                        <td>{cate.name}</td>
                                                        {/* <td>
                                                            <p className="mb-0">{cate.description}</p>
                                                        </td> */}
                                                        <td>
                                                            <div className="flex align-items-center list-user-action">
                                                                <Link
                                                                    className="bg-primary"
                                                                    data-toggle="tooltip"
                                                                    data-placement="top"
                                                                    title=""
                                                                    data-original-title="Sửa"
                                                                    href={`/admin/catalog/update/${cate.id}`}
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
                                                                        deleteCategories(cate.id)
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
