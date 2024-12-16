"use client"

import { userApiRequestAdmin } from '@/apiRequests/users'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function User() {
    const [user, setUser] = useState([])

    const fetchUser = async () => {
        const result = await userApiRequestAdmin.getAllUser()
        setUser(result.payload.data);
    }

    // console.log(user)

    useEffect(() => {
        fetchUser();
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
                                        <h4 className="card-title">Danh sách người dùng</h4>
                                    </div>
                                    {/* <div className="iq-card-header-toolbar d-flex align-items-center">
                                        <Link href="/admin/authors/create" className="btn btn-primary">Thêm tác giả</Link>
                                    </div> */}
                                </div>
                                <div className="iq-card-body">
                                    <div className="table-responsive">
                                        <table
                                            className="data-tables table table-striped table-bordered"
                                            style={{ width: 100 + '%' }}
                                        >
                                            <thead>
                                                <tr>
                                                    <th style={{ width: 10 + '%' }}>STT</th>
                                                    <th style={{ width: 20 + '%' }}>
                                                        Tên người dùng
                                                    </th>
                                                    <th style={{ width: 35 + '%' }}>Số điện thoại</th>
                                                    <th style={{ width: 20 + '%' }}>Email</th>
                                                    <th style={{ width: 20 + '%' }}>Vai trò</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {user.map((user, index) => (
                                                    <tr key={user.id}>
                                                        <td>{index + 1}</td>
                                                        <td>{user.name}</td>
                                                        <td className={!user.address?.[0]?.phone && !user.phone ? "text-danger" : ""}>
                                                            {user.address?.[0]?.phone || user.phone || "Chưa cập nhật số điện thoại"}
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">
                                                                {user.email}
                                                            </p>
                                                        </td>
                                                        <td>{user.role}</td>
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
