import Link from "next/link";

export default function Banner() {
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
                                            href="/admin/catalog/create"
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
                                                    <th width="5%">STT</th>
                                                    <th width="5%">Ảnh banner</th>
                                                    <th width="5%">Hoạt động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td>
                                                        <img
                                                            className="img-fluid rounded"
                                                            src=""
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