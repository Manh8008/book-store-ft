export default function LeftBar() {
    return (
        <>
            {/* <!-- Sidebar  --> */}
            <div className="iq-sidebar">
                <div className="iq-sidebar-logo d-flex justify-content-between">
                    <a href="admin-dashboard.html" className="header-logo">
                        <img src="/images/logo.png" className="img-fluid rounded-normal" alt="" />
                        <div className="logo-title">
                            <span className="text-primary text-uppercase">NhasachTV</span>
                        </div>
                    </a>
                    <div className="iq-menu-bt-sidebar">
                        <div className="iq-menu-bt align-self-center">
                            <div className="wrapper-menu">
                                <div className="main-circle">
                                    <i className="las la-bars"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sidebar-scrollbar">
                    <nav className="iq-sidebar-menu">
                        <ul id="iq-sidebar-toggle" className="iq-menu">
                            <li>
                                <a href="admin-dashboard.html">
                                    <i className="las la-home iq-arrow-left"></i>Bảng Điều Khiển
                                </a>
                            </li>
                            <li>
                                <a href="admin-category.html">
                                    <i className="ri-record-circle-line"></i>Danh Mục Sách
                                </a>
                            </li>
                            <li>
                                <a href="admin-author.html">
                                    <i className="ri-record-circle-line"></i>Tác Giả
                                </a>
                            </li>
                            <li>
                                <a href="admin-books.html">
                                    <i className="ri-record-circle-line"></i>Sách
                                </a>
                            </li>
                            <li>
                                <a href="sign-in.html">
                                    <i className="ri-record-circle-line"></i>Đăng Xuất
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div id="sidebar-bottom" className="p-3 position-relative">
                        <div className="iq-card">
                            <div className="iq-card-body">
                                <div className="sidebarbottom-content">
                                    <button
                                        type="submit"
                                        className="btn w-100 btn-primary mt-4 view-more"
                                    >
                                        NhasachTV
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
