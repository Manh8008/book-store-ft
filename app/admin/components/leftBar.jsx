export default function LeftBar() {
    return (
        <>
            {/* <!-- Sidebar  --> */}
            <div class="iq-sidebar">
                <div class="iq-sidebar-logo d-flex justify-content-between">
                    <a href="admin-dashboard.html" class="header-logo">
                        <img src="/images/logo.png" class="img-fluid rounded-normal" alt="" />
                        <div class="logo-title">
                            <span class="text-primary text-uppercase">NhasachTV</span>
                        </div>
                    </a>
                    <div class="iq-menu-bt-sidebar">
                        <div class="iq-menu-bt align-self-center">
                            <div class="wrapper-menu">
                                <div class="main-circle"><i class="las la-bars"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sidebar-scrollbar">
                    <nav class="iq-sidebar-menu">
                        <ul id="iq-sidebar-toggle" class="iq-menu">
                            <li><a href="admin-dashboard.html"><i class="las la-home iq-arrow-left"></i>Bảng Điều Khiển</a></li>
                            <li><a href="admin-category.html"><i class="ri-record-circle-line"></i>Danh Mục Sách</a></li>
                            <li><a href="admin-author.html"><i class="ri-record-circle-line"></i>Tác Giả</a></li>
                            <li><a href="admin-books.html"><i class="ri-record-circle-line"></i>Sách</a></li>
                            <li><a href="sign-in.html"><i class="ri-record-circle-line"></i>Đăng Xuất</a></li>
                        </ul>
                    </nav>
                    <div id="sidebar-bottom" class="p-3 position-relative">
                        <div class="iq-card">
                            <div class="iq-card-body">
                                <div class="sidebarbottom-content">
                                    <button type="submit" class="btn w-100 btn-primary mt-4 view-more">NhasachTV</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}