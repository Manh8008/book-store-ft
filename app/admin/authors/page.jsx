import Link from 'next/link'

export default function Authors() {
    return (
        <>
            <div id="content-page" className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Danh sách tác giả</h4>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                        <Link
                                            href="/admin/authors/create"
                                            className="btn btn-primary"
                                        >
                                            Thêm tác giả
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
                                                    <th style={{ width: 10 + '%' }}>STT</th>
                                                    <th style={{ width: 20 + '%' }}>Tên tác giả</th>
                                                    <th style={{ width: 60 + '%' }}>
                                                        Mô tả tác giả
                                                    </th>
                                                    <th style={{ width: 10 + '%' }}>Hoạt động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Nam Cao</td>
                                                    <td>
                                                        <p className="mb-0">
                                                            Một nhà văn và cũng là một chiến sĩ,
                                                            liệt sĩ người Việt Nam. Ông là nhà văn
                                                            hiện thực lớn (trước Cách mạng Tháng
                                                            Tám), một nhà báo kháng chiến (sau Cách
                                                            mạng), một trong những nhà văn tiêu biểu
                                                            nhất thế kỷ 20. Nam Cao có nhiều đóng
                                                            góp quan trọng đối với việc hoàn thiện
                                                            phong cách truyện ngắn và tiểu thuyết
                                                            Việt Nam ở nửa đầu thế kỷ 20.
                                                        </p>
                                                    </td>
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
                                                    <td>Nam Cao</td>
                                                    <td>
                                                        <p className="mb-0">
                                                            Ông là nhà văn hiện thực lớn (trước Cách
                                                            mạng Tháng Tám), một nhà báo kháng chiến
                                                            (sau Cách mạng), một trong những nhà văn
                                                            tiêu biểu nhất thế kỷ 20. Nam Cao có
                                                            nhiều đóng góp quan trọng đối với việc
                                                            hoàn thiện phong cách truyện ngắn và
                                                            tiểu thuyết Việt Nam ở nửa đầu thế kỷ
                                                            20.
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <div className="flex align-items-center list-user-action">
                                                            <a
                                                                className="bg-primary"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title=""
                                                                data-original-title="Edit"
                                                                href="admin-add-category.html"
                                                            >
                                                                <i className="ri-pencil-line"></i>
                                                            </a>
                                                            <a
                                                                className="bg-primary"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title=""
                                                                data-original-title="Delete"
                                                                href="#"
                                                            >
                                                                <i className="ri-delete-bin-line"></i>
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Nam Cao</td>
                                                    <td>
                                                        <p className="mb-0">
                                                            Ông là nhà văn hiện thực lớn (trước Cách
                                                            mạng Tháng Tám), một nhà báo kháng chiến
                                                            (sau Cách mạng), một trong những nhà văn
                                                            tiêu biểu nhất thế kỷ 20. Nam Cao có
                                                            nhiều đóng góp quan trọng đối với việc
                                                            hoàn thiện phong cách truyện ngắn và
                                                            tiểu thuyết Việt Nam ở nửa đầu thế kỷ
                                                            20.
                                                        </p>
                                                        <p className="mb-0"></p>
                                                    </td>
                                                    <td>
                                                        <div className="flex align-items-center list-user-action">
                                                            <a
                                                                className="bg-primary"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title=""
                                                                data-original-title="Edit"
                                                                href="admin-add-category.html"
                                                            >
                                                                <i className="ri-pencil-line"></i>
                                                            </a>
                                                            <a
                                                                className="bg-primary"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title=""
                                                                data-original-title="Delete"
                                                                href="#"
                                                            >
                                                                <i className="ri-delete-bin-line"></i>
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Nam Cao</td>
                                                    <td>
                                                        <p className="mb-0">
                                                            Ông là nhà văn hiện thực lớn (trước Cách
                                                            mạng Tháng Tám), một nhà báo kháng chiến
                                                            (sau Cách mạng), một trong những nhà văn
                                                            tiêu biểu nhất thế kỷ 20. Nam Cao có
                                                            nhiều đóng góp quan trọng đối với việc
                                                            hoàn thiện phong cách truyện ngắn và
                                                            tiểu thuyết Việt Nam ở nửa đầu thế kỷ
                                                            20.
                                                        </p>
                                                        <p className="mb-0"></p>
                                                    </td>
                                                    <td>
                                                        <div className="flex align-items-center list-user-action">
                                                            <a
                                                                className="bg-primary"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title=""
                                                                data-original-title="Edit"
                                                                href="admin-add-category.html"
                                                            >
                                                                <i className="ri-pencil-line"></i>
                                                            </a>
                                                            <a
                                                                className="bg-primary"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title=""
                                                                data-original-title="Delete"
                                                                href="#"
                                                            >
                                                                <i className="ri-delete-bin-line"></i>
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Nam Cao</td>
                                                    <td>
                                                        <p className="mb-0">
                                                            Ông là nhà văn hiện thực lớn (trước Cách
                                                            mạng Tháng Tám), một nhà báo kháng chiến
                                                            (sau Cách mạng), một trong những nhà văn
                                                            tiêu biểu nhất thế kỷ 20. Nam Cao có
                                                            nhiều đóng góp quan trọng đối với việc
                                                            hoàn thiện phong cách truyện ngắn và
                                                            tiểu thuyết Việt Nam ở nửa đầu thế kỷ
                                                            20.
                                                        </p>
                                                        <p className="mb-0"></p>
                                                    </td>
                                                    <td>
                                                        <div className="flex align-items-center list-user-action">
                                                            <a
                                                                className="bg-primary"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title=""
                                                                data-original-title="Edit"
                                                                href="admin-add-category.html"
                                                            >
                                                                <i className="ri-pencil-line"></i>
                                                            </a>
                                                            <a
                                                                className="bg-primary"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title=""
                                                                data-original-title="Delete"
                                                                href="#"
                                                            >
                                                                <i className="ri-delete-bin-line"></i>
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>Nam Cao</td>
                                                    <td>
                                                        <p className="mb-0">
                                                            Ông là nhà văn hiện thực lớn (trước Cách
                                                            mạng Tháng Tám), một nhà báo kháng chiến
                                                            (sau Cách mạng), một trong những nhà văn
                                                            tiêu biểu nhất thế kỷ 20. Nam Cao có
                                                            nhiều đóng góp quan trọng đối với việc
                                                            hoàn thiện phong cách truyện ngắn và
                                                            tiểu thuyết Việt Nam ở nửa đầu thế kỷ
                                                            20.
                                                        </p>
                                                        <p className="mb-0"></p>
                                                    </td>
                                                    <td>
                                                        <div className="flex align-items-center list-user-action">
                                                            <a
                                                                className="bg-primary"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title=""
                                                                data-original-title="Sửa"
                                                                href="admin-add-category.html"
                                                            >
                                                                <i className="ri-pencil-line"></i>
                                                            </a>
                                                            <a
                                                                className="bg-primary"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title=""
                                                                data-original-title="Delete"
                                                                href="#"
                                                            >
                                                                <i className="ri-delete-bin-line"></i>
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>Nam Cao</td>
                                                    <td>
                                                        <p className="mb-0">
                                                            Ông là nhà văn hiện thực lớn (trước Cách
                                                            mạng Tháng Tám), một nhà báo kháng chiến
                                                            (sau Cách mạng), một trong những nhà văn
                                                            tiêu biểu nhất thế kỷ 20. Nam Cao có
                                                            nhiều đóng góp quan trọng đối với việc
                                                            hoàn thiện phong cách truyện ngắn và
                                                            tiểu thuyết Việt Nam ở nửa đầu thế kỷ
                                                            20.
                                                        </p>
                                                        <p className="mb-0"></p>
                                                    </td>
                                                    <td>
                                                        <div className="flex align-items-center list-user-action">
                                                            <a
                                                                className="bg-primary"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title=""
                                                                data-original-title="Sửa"
                                                                href="admin-add-category.html"
                                                            >
                                                                <i className="ri-pencil-line"></i>
                                                            </a>
                                                            <a
                                                                className="bg-primary"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title=""
                                                                data-original-title="Delete"
                                                                href="#"
                                                            >
                                                                <i className="ri-delete-bin-line"></i>
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>Nam Cao</td>
                                                    <td>
                                                        <p className="mb-0">
                                                            Ông là nhà văn hiện thực lớn (trước Cách
                                                            mạng Tháng Tám), một nhà báo kháng chiến
                                                            (sau Cách mạng), một trong những nhà văn
                                                            tiêu biểu nhất thế kỷ 20. Nam Cao có
                                                            nhiều đóng góp quan trọng đối với việc
                                                            hoàn thiện phong cách truyện ngắn và
                                                            tiểu thuyết Việt Nam ở nửa đầu thế kỷ
                                                            20.
                                                        </p>
                                                        <p className="mb-0"></p>
                                                    </td>
                                                    <td>
                                                        <div className="flex align-items-center list-user-action">
                                                            <a
                                                                className="bg-primary"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title=""
                                                                data-original-title="Sửa"
                                                                href="admin-add-category.html"
                                                            >
                                                                <i className="ri-pencil-line"></i>
                                                            </a>
                                                            <a
                                                                className="bg-primary"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title=""
                                                                data-original-title="Delete"
                                                                href="#"
                                                            >
                                                                <i className="ri-delete-bin-line"></i>
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td>Nam Cao</td>
                                                    <td>
                                                        <p className="mb-0">
                                                            Ông là nhà văn hiện thực lớn (trước Cách
                                                            mạng Tháng Tám), một nhà báo kháng chiến
                                                            (sau Cách mạng), một trong những nhà văn
                                                            tiêu biểu nhất thế kỷ 20. Nam Cao có
                                                            nhiều đóng góp quan trọng đối với việc
                                                            hoàn thiện phong cách truyện ngắn và
                                                            tiểu thuyết Việt Nam ở nửa đầu thế kỷ
                                                            20.
                                                        </p>
                                                        <p className="mb-0"></p>
                                                    </td>
                                                    <td>
                                                        <div className="flex align-items-center list-user-action">
                                                            <a
                                                                className="bg-primary"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title=""
                                                                data-original-title="Sửa"
                                                                href="admin-add-category.html"
                                                            >
                                                                <i className="ri-pencil-line"></i>
                                                            </a>
                                                            <a
                                                                className="bg-primary"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title=""
                                                                data-original-title="Delete"
                                                                href="#"
                                                            >
                                                                <i className="ri-delete-bin-line"></i>
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>Nam Cao</td>
                                                    <td>
                                                        <p className="mb-0">
                                                            Ông là nhà văn hiện thực lớn (trước Cách
                                                            mạng Tháng Tám), một nhà báo kháng chiến
                                                            (sau Cách mạng), một trong những nhà văn
                                                            tiêu biểu nhất thế kỷ 20. Nam Cao có
                                                            nhiều đóng góp quan trọng đối với việc
                                                            hoàn thiện phong cách truyện ngắn và
                                                            tiểu thuyết Việt Nam ở nửa đầu thế kỷ
                                                            20.
                                                        </p>
                                                        <p className="mb-0"></p>
                                                    </td>
                                                    <td>
                                                        <div className="flex align-items-center list-user-action">
                                                            <a
                                                                className="bg-primary"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title=""
                                                                data-original-title="Sửa"
                                                                href="admin-add-category.html"
                                                            >
                                                                <i className="ri-pencil-line"></i>
                                                            </a>
                                                            <a
                                                                className="bg-primary"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title=""
                                                                data-original-title="Delete"
                                                                href="#"
                                                            >
                                                                <i className="ri-delete-bin-line"></i>
                                                            </a>
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
