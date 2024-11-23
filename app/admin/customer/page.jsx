import Link from "next/link";

export default function User() {
    return (
        <>
            <div id="content-page" class="content-page">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="iq-card">
                                <div class="iq-card-header d-flex justify-content-between">
                                    <div class="iq-header-title">
                                        <h4 class="card-title">Danh sách người dùng</h4>
                                    </div>
                                    {/* <div class="iq-card-header-toolbar d-flex align-items-center">
                                        <Link href="/admin/authors/create" class="btn btn-primary">Thêm tác giả</Link>
                                    </div> */}
                                </div>
                                <div class="iq-card-body">
                                    <div class="table-responsive">
                                        <table class="data-tables table table-striped table-bordered" style={{ width: 100 + "%" }}>
                                            <thead>
                                                <tr>
                                                    <th style={{ width: 10 + "%" }}>STT</th>
                                                    <th style={{ width: 20 + "%" }}>Tên người dùng</th>
                                                    <th style={{ width: 35 + "%" }}>Email</th>
                                                    <th style={{ width: 20 + "%" }}>Vai trò</th>
                                                    <th style={{ width: 10 + "%" }}>Hoạt động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>tienhai1301</td>
                                                    <td>
                                                        <p class="mb-0">tienhai13012001@gmail.com</p>
                                                    </td>
                                                    <td>Khách hàng</td>
                                                    <td>
                                                        <div class="flex align-items-center list-user-action">
                                                            <Link class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="/admin/authors/update/1"><i class="ri-pencil-line"></i></Link>
                                                            <Link class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Xoá" href="#"><i class="ri-delete-bin-line"></i></Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Nguyễn Hữu Mạnh</td>
                                                    <td>
                                                        <p class="mb-0">manhblue137@gmail.com</p>
                                                    </td>
                                                    <td>Khách hàng</td>
                                                    <td>
                                                        <div class="flex align-items-center list-user-action">
                                                            <Link class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="/admin/authors/update/1"><i class="ri-pencil-line"></i></Link>
                                                            <Link class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Xoá" href="#"><i class="ri-delete-bin-line"></i></Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Nguyễn Minh Thịnh</td>
                                                    <td>
                                                        <p class="mb-0">nguyenminhthinh858@gmail.com</p>
                                                    </td>
                                                    <td>Khách hàng</td>
                                                    <td>
                                                        <div class="flex align-items-center list-user-action">
                                                            <Link class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="/admin/authors/update/1"><i class="ri-pencil-line"></i></Link>
                                                            <Link class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Xoá" href="#"><i class="ri-delete-bin-line"></i></Link>
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