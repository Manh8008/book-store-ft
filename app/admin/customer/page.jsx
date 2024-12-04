import Link from 'next/link'

export default function User() {
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
                                                    <th style={{ width: 35 + '%' }}>Email</th>
                                                    <th style={{ width: 20 + '%' }}>Vai trò</th>
                                                    <th style={{ width: 10 + '%' }}>Hoạt động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>tienhai1301</td>
                                                    <td>
                                                        <p className="mb-0">
                                                            tienhai13012001@gmail.com
                                                        </p>
                                                    </td>
                                                    <td>Khách hàng</td>
                                                    <td>
                                                        <div className="flex align-items-center list-user-action">
                                                            <Link
                                                                className="bg-primary"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title=""
                                                                data-original-title="Edit"
                                                                href="/admin/authors/update/1"
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
                                                            >
                                                                <i className="ri-delete-bin-line"></i>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Nguyễn Hữu Mạnh</td>
                                                    <td>
                                                        <p className="mb-0">
                                                            manhblue137@gmail.com
                                                        </p>
                                                    </td>
                                                    <td>Khách hàng</td>
                                                    <td>
                                                        <div className="flex align-items-center list-user-action">
                                                            <Link
                                                                className="bg-primary"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title=""
                                                                data-original-title="Edit"
                                                                href="/admin/authors/update/1"
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
                                                            >
                                                                <i className="ri-delete-bin-line"></i>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Nguyễn Minh Thịnh</td>
                                                    <td>
                                                        <p className="mb-0">
                                                            nguyenminhthinh858@gmail.com
                                                        </p>
                                                    </td>
                                                    <td>Khách hàng</td>
                                                    <td>
                                                        <div className="flex align-items-center list-user-action">
                                                            <Link
                                                                className="bg-primary"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title=""
                                                                data-original-title="Edit"
                                                                href="/admin/authors/update/1"
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
                                                            >
                                                                <i className="ri-delete-bin-line"></i>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
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
