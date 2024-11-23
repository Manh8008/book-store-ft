import Link from "next/link";

export default function Review() {
    return (
        <>
            <div id="content-page" class="content-page">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="iq-card">
                                <div class="iq-card-header d-flex justify-content-between">
                                    <div class="iq-header-title">
                                        <h4 class="card-title">Danh sách bài viết</h4>
                                    </div>
                                    <div class="iq-card-header-toolbar d-flex align-items-center">
                                        <Link href="/admin/review/create" class="btn btn-primary">Thêm bài viết</Link>
                                    </div>
                                </div>
                                <div class="iq-card-body">
                                    <div class="table-responsive">
                                        <table class="data-tables table table-striped table-bordered" style={{ width: 100 + "%" }}>
                                            <thead>
                                                <tr>
                                                    <th style={{ width: 5 + "%" }}>STT</th>
                                                    <th style={{ width: 15 + "%" }}>Ảnh bài viết</th>
                                                    <th style={{ width: 30 + "%" }}>Tiêu đề</th>
                                                    <th style={{ width: 40 + "%" }}>Nội dung</th>
                                                    <th style={{ width: 15 + "%" }}>Hoạt động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img className="img-fluid rounded" src="http://localhost:9000/img/review.jpg" alt="" /></td>
                                                    <td>
                                                        <p class="mb-0">Thiết Kế Game Nâng Cao – Nâng Nghệ Thuật Thiết Kế Game Lên Tầm Cao Mới.</p>
                                                    </td>
                                                    <td><p class="mb-0">Ấn bản tiếng Việt của cuốn sách “NEXUS: A Brief History of Information Networks from the Stone Age to AI” của tác giả Yuval Noah Harari sẽ chính thức ra mắt vào cuối tháng 9/2024 tới đây, được ấn hành bởi Omega Plus Books.</p></td>
                                                    <td>
                                                        <div class="flex align-items-center list-user-action">
                                                            <Link class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="/admin/review/update/1"><i class="ri-pencil-line"></i></Link>
                                                            <Link class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Xoá" href="#"><i class="ri-delete-bin-line"></i></Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img className="img-fluid rounded" src="http://localhost:9000/img/review.jpg" alt="" /></td>
                                                    <td>
                                                        <p class="mb-0">Thiết Kế Game Nâng Cao – Nâng Nghệ Thuật Thiết Kế Game Lên Tầm Cao Mới.</p>
                                                    </td>
                                                    <td><p class="mb-0">Ấn bản tiếng Việt của cuốn sách “NEXUS: A Brief History of Information Networks from the Stone Age to AI” của tác giả Yuval Noah Harari sẽ chính thức ra mắt vào cuối tháng 9/2024 tới đây, được ấn hành bởi Omega Plus Books.</p></td>
                                                    <td>
                                                        <div class="flex align-items-center list-user-action">
                                                            <Link class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="/admin/review/update/1"><i class="ri-pencil-line"></i></Link>
                                                            <Link class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Xoá" href="#"><i class="ri-delete-bin-line"></i></Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img className="img-fluid rounded" src="http://localhost:9000/img/review.jpg" alt="" /></td>
                                                    <td>
                                                        <p class="mb-0">Thiết Kế Game Nâng Cao – Nâng Nghệ Thuật Thiết Kế Game Lên Tầm Cao Mới.</p>
                                                    </td>
                                                    <td><p class="mb-0">Ấn bản tiếng Việt của cuốn sách “NEXUS: A Brief History of Information Networks from the Stone Age to AI” của tác giả Yuval Noah Harari sẽ chính thức ra mắt vào cuối tháng 9/2024 tới đây, được ấn hành bởi Omega Plus Books.</p></td>
                                                    <td>
                                                        <div class="flex align-items-center list-user-action">
                                                            <Link class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="/admin/authors/update/1"><i class="ri-pencil-line"></i></Link>
                                                            <Link class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Xoá" href="#"><i class="ri-delete-bin-line"></i></Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img className="img-fluid rounded" src="http://localhost:9000/img/review.jpg" alt="" /></td>
                                                    <td>
                                                        <p class="mb-0">Thiết Kế Game Nâng Cao – Nâng Nghệ Thuật Thiết Kế Game Lên Tầm Cao Mới.</p>
                                                    </td>
                                                    <td><p class="mb-0">Ấn bản tiếng Việt của cuốn sách “NEXUS: A Brief History of Information Networks from the Stone Age to AI” của tác giả Yuval Noah Harari sẽ chính thức ra mắt vào cuối tháng 9/2024 tới đây, được ấn hành bởi Omega Plus Books.</p></td>
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