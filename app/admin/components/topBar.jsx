import Link from 'next/link'

export default function TopBar() {
    return (
        <>
            {/* <!-- TOP Nav Bar --> */}
            <div className="iq-top-navbar">
                <div className="iq-navbar-custom">
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                        <div className="iq-menu-bt d-flex align-items-center">
                            <div className="wrapper-menu">
                                <div className="main-circle">
                                    <i className="las la-bars"></i>
                                </div>
                            </div>
                            <div className="iq-navbar-logo d-flex justify-content-between">
                                <Link href="/admin" className="header-logo">
                                    <div className="logo-title">
                                        <span className="text-primary text-uppercase">
                                            NhasachTV
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="navbar-breadcrumb">
                            <h5 className="mb-0">Trang Chủ</h5>
                        </div>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-label="Toggle navigation"
                        >
                            <i className="ri-menu-3-line"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto navbar-list">
                                <li className="nav-item nav-icon search-content">
                                    <Link
                                        href="#"
                                        className="search-toggle iq-waves-effect text-gray rounded"
                                    >
                                        <i className="ri-search-line"></i>
                                    </Link>
                                    <form action="#" className="search-box p-0">
                                        <input
                                            type="text"
                                            className="text search-input"
                                            placeholder="Type here to search..."
                                        />
                                        <Link className="search-link" href="#">
                                            <i className="ri-search-line"></i>
                                        </Link>
                                    </form>
                                </li>
                                <li className="line-height pt-3">
                                    <Link
                                        href="#"
                                        className="search-toggle iq-waves-effect d-flex align-items-center"
                                    >
                                        <div className="caption">
                                            <h6 className="mb-1 line-height">Admin</h6>
                                            <p className="mb-0 text-primary">Tài Khoản</p>
                                        </div>
                                    </Link>
                                    <div className="iq-sub-dropdown iq-user-dropdown">
                                        <div className="iq-card shadow-none m-0">
                                            <div className="iq-card-body p-0 ">
                                                <div className="bg-primary p-3">
                                                    <h5 className="mb-0 text-white line-height">
                                                        Xin Chào Nguyễn Văn A
                                                    </h5>
                                                </div>
                                                <Link
                                                    href="/admin/profile"
                                                    className="iq-sub-card iq-bg-primary-hover"
                                                >
                                                    <div className="media align-items-center">
                                                        <div className="rounded iq-card-icon iq-bg-primary">
                                                            <i className="ri-file-user-line"></i>
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">
                                                                Tài khoản của tôi
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link
                                                    href="profile-edit.html"
                                                    className="iq-sub-card iq-bg-primary-hover"
                                                >
                                                    <div className="media align-items-center">
                                                        <div className="rounded iq-card-icon iq-bg-primary">
                                                            <i className="ri-profile-line"></i>
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Sổ địa chỉ</h6>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link
                                                    href="account-setting.html"
                                                    className="iq-sub-card iq-bg-primary-hover"
                                                >
                                                    <div className="media align-items-center">
                                                        <div className="rounded iq-card-icon iq-bg-primary">
                                                            <i className="ri-account-box-line"></i>
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">
                                                                Đơn hàng của tôi
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link
                                                    href="wishlist.html"
                                                    className="iq-sub-card iq-bg-primary-hover"
                                                >
                                                    <div className="media align-items-center">
                                                        <div className="rounded iq-card-icon iq-bg-primary">
                                                            <i className="ri-heart-line"></i>
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Yêu Thích</h6>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className="d-inline-block w-100 text-center p-3">
                                                    <Link
                                                        className="bg-primary iq-sign-btn"
                                                        href="sign-in.html"
                                                        role="button"
                                                    >
                                                        Sign out
                                                        <i className="ri-login-box-line ml-2"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- TOP Nav Bar END --> */}
        </>
    )
}
