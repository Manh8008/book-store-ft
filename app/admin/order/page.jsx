import Link from "next/link";

export default function Order() {
    return (
        <>
            <div id="content-page" class="content-page">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="iq-card">
                                <div class="iq-card-header d-flex justify-content-between">
                                    <div class="iq-header-title">
                                        <h4 class="card-title">Danh sách đơn hàng</h4>
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
                                                    <th style={{ width: 15 + "%" }}>Mã đơn hàng</th>
                                                    <th className="text-start" colSpan="1" style={{ width: 15 + "%" }}>Thông tin khách hàng</th>
                                                    <th style={{ width: 25 + "%" }}>Địa chỉ nhận hàng</th>
                                                    <th style={{ width: 10 + "%" }}>Ngày đặt hàng</th>
                                                    <th style={{ width: 10 + "%" }}>Trạng thái</th>
                                                    <th style={{ width: 8 + "%" }}>Hoạt động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>ORDER-1730980644</td>
                                                    <td className="text-start">
                                                        <small>
                                                            Họ và tên: <strong>Nguyễn Minh Thịnh</strong>
                                                        </small>
                                                        <br />
                                                        <small>
                                                            Số điện thoại: <strong>0968575978</strong><br />
                                                        </small>
                                                    </td>
                                                    <td>
                                                        <small>
                                                            Quận/Huyện: <strong>Định Quán</strong>
                                                        </small>
                                                        <br />
                                                        <small>
                                                            Phường/Xã: <strong>Gia canh</strong><br />
                                                        </small>
                                                        <small>
                                                            Tỉnh thành: <strong>Đồng Nai</strong><br />
                                                        </small>
                                                        <small>
                                                            Địa chỉ chi tiết: <strong>Số nhà 1 , Ấp Hiệp Quyết, Thị trấn Định Quán</strong><br />
                                                        </small>
                                                    </td>
                                                    <td>2024-11-07</td>
                                                    <td>Chờ xác nhận</td>
                                                    <td>
                                                        <div class="flex align-items-center list-user-action">
                                                            <Link class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Xem" href=""><i class="ri-eye-line"></i></Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>ORDER-1730980644</td>
                                                    <td className="text-start">
                                                        <small>
                                                            Họ và tên: <strong>Nguyễn Minh Thịnh</strong>
                                                        </small>
                                                        <br />
                                                        <small>
                                                            Số điện thoại: <strong>0968575978</strong><br />
                                                        </small>
                                                    </td>
                                                    <td>
                                                        <small>
                                                            Quận/Huyện: <strong>Định Quán</strong>
                                                        </small>
                                                        <br />
                                                        <small>
                                                            Phường/Xã: <strong>Gia canh</strong><br />
                                                        </small>
                                                        <small>
                                                            Tỉnh thành: <strong>Đồng Nai</strong><br />
                                                        </small>
                                                        <small>
                                                            Địa chỉ chi tiết: <strong>Số nhà 1 , Ấp Hiệp Quyết, Thị trấn Định Quán</strong><br />
                                                        </small>
                                                    </td>
                                                    <td>2024-11-07</td>
                                                    <td>Chờ xác nhận</td>
                                                    <td>
                                                        <div class="flex align-items-center list-user-action">
                                                            <Link class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Xem" href=""><i class="ri-eye-line"></i></Link>
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