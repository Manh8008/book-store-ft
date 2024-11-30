export default function OrderDetail() {
    return (
        <>
            <div id="content-page" className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Đơn hàng #VL2667</h4>
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
                                                    <th style={{ width: '10%' }}>Ảnh sản phẩm</th>
                                                    <th style={{ width: '15%' }}>Tên sản phẩm</th>
                                                    <th style={{ width: '10%' }}>Giá sản phẩm</th>
                                                    <th style={{ width: '10%' }}>Số lượng</th>
                                                    <th style={{ width: '10%' }}>Tổng tiền</th>
                                                    {/* <th style={{ width: '8%' }}>Hoạt động</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="img-fluid rounded"
                                                            src="https://pos.nvncdn.com/fd5775-40602/ps/20240619_mszEtzJg79.jpeg"
                                                            alt=""
                                                            width="150"
                                                        ></img>
                                                    </td>
                                                    <td>Những Kẻ Xuất Chúng - The Outliers</td>
                                                    <td>250.000đ</td>
                                                    <td>10</td>
                                                    <td>2.500.000đ</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="img-fluid rounded"
                                                            src="https://pos.nvncdn.com/fd5775-40602/ps/20240619_mszEtzJg79.jpeg"
                                                            alt=""
                                                            width="150"
                                                        ></img>
                                                    </td>
                                                    <td>Những Kẻ Xuất Chúng - The Outliers</td>
                                                    <td>250.000đ</td>
                                                    <td>10</td>
                                                    <td>2.500.000đ</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="mt-4">
                                        <h6 className="text-end">
                                            <strong>
                                                Tổng tiền của đơn hàng: <span>5.000.000đ</span>
                                            </strong>
                                        </h6>
                                        <div className="d-flex align-items-center justify-content-between mt-4">
                                            <div className="d-flex flex-column">
                                                <label
                                                    htmlFor="orderStatus"
                                                    className="mb-2 fw-bold"
                                                >
                                                    Trạng thái đơn hàng:
                                                </label>
                                                <select
                                                    className="form-control"
                                                    id="orderStatus"
                                                    style={{ width: '350px' }}
                                                >
                                                    <option value="" disabled selected>
                                                        Chọn trạng thái
                                                    </option>
                                                    <option>Chờ xác nhận</option>
                                                    <option>Đang xử lý</option>
                                                    <option>Đã giao hàng</option>
                                                    <option>Đã hủy</option>
                                                </select>
                                            </div>
                                            <button className="btn btn-primary ms-3">
                                                Cập nhật trạng thái
                                            </button>
                                        </div>
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
