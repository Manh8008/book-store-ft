import Link from "next/link";

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
                                <Link href="index.html" className="header-logo">
                                    {/* <img
                                        src="/images/logo.png"
                                        className="img-fluid rounded-normal"
                                        alt=""
                                    /> */}
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
                        <div className="iq-search-bar">
                            <form action="#" className="searchbox">
                                <input
                                    type="text"
                                    className="text search-input"
                                    placeholder="Tìm kiếm sản phẩm..."
                                />
                                <Link className="search-link" href="#">
                                    <i className="ri-search-line"></i>
                                </Link>
                            </form>
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
                                <li className="nav-item nav-icon">
                                    <Link
                                        href="#"
                                        className="search-toggle iq-waves-effect text-gray rounded"
                                    >
                                        <i className="ri-notification-2-line"></i>
                                        <span className="bg-primary dots"></span>
                                    </Link>
                                    <div className="iq-sub-dropdown">
                                        <div className="iq-card shadow-none m-0">
                                            <div className="iq-card-body p-0">
                                                <div className="bg-primary p-3">
                                                    <h5 className="mb-0 text-white">
                                                        Thông Báo
                                                        <small className="badge  badge-light float-right pt-1">
                                                            4
                                                        </small>
                                                    </h5>
                                                </div>
                                                <Link href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img
                                                                className="avatar-40 rounded"
                                                                src="/images/user/1.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">
                                                                Đơn hàng giao thành công
                                                            </h6>
                                                            <small className="float-right font-size-12">
                                                                Just Now
                                                            </small>
                                                            <p className="mb-0">95.000đ</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img
                                                                className="avatar-40 rounded"
                                                                src="/images/user/2.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">
                                                                Đơn hàng giao thành công
                                                            </h6>
                                                            <small className="float-right font-size-12">
                                                                5 days ago
                                                            </small>
                                                            <p className="mb-0">255.000đ</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img
                                                                className="avatar-40 rounded"
                                                                src="/images/user/2.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">
                                                                Đơn hàng giao thành công
                                                            </h6>
                                                            <small className="float-right font-size-12">
                                                                2 days ago
                                                            </small>
                                                            <p className="mb-0">79.000đ</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img
                                                                className="avatar-40 rounded"
                                                                src="/images/user/2.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">
                                                                Đơn hàng #7979 giao không thành công
                                                            </h6>
                                                            <small className="float-right font-size-12">
                                                                3 days ago
                                                            </small>
                                                            <p className="mb-0">100.000đ</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item nav-icon dropdown">
                                    <Link
                                        href="#"
                                        className="search-toggle iq-waves-effect text-gray rounded"
                                    >
                                        <i className="ri-mail-line"></i>
                                        <span className="bg-primary dots"></span>
                                    </Link>
                                    <div className="iq-sub-dropdown">
                                        <div className="iq-card shadow-none m-0">
                                            <div className="iq-card-body p-0 ">
                                                <div className="bg-primary p-3">
                                                    <h5 className="mb-0 text-white">
                                                        Tin Nhắn
                                                        <small className="badge  badge-light float-right pt-1">
                                                            5
                                                        </small>
                                                    </h5>
                                                </div>
                                                <Link href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img
                                                                className="avatar-40 rounded"
                                                                src="/images/user/1.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">QT Shop</h6>
                                                            <small className="float-left font-size-12">
                                                                13 Jun
                                                            </small>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img
                                                                className="avatar-40 rounded"
                                                                src="/images/user/1.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">
                                                                Tran Thuan Store
                                                            </h6>
                                                            <small className="float-left font-size-12">
                                                                20 Apr
                                                            </small>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img
                                                                className="avatar-40 rounded"
                                                                src="/images/user/1.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Hoang Vu Book</h6>
                                                            <small className="float-left font-size-12">
                                                                30 Jun
                                                            </small>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img
                                                                className="avatar-40 rounded"
                                                                src="/images/user/1.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">
                                                                Quang Minh Book
                                                            </h6>
                                                            <small className="float-left font-size-12">
                                                                12 Sep
                                                            </small>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img
                                                                className="avatar-40 rounded"
                                                                src="/images/user/2.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">TV Team</h6>
                                                            <small className="float-left font-size-12">
                                                                5 Dec
                                                            </small>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="line-height pt-3">
                                    <Link
                                        href="#"
                                        className="search-toggle iq-waves-effect d-flex align-items-center"
                                    >
                                        <img
                                            src="/images/user/1.jpg"
                                            className="img-fluid rounded-circle mr-3"
                                            alt="user"
                                        />
                                        <div className="caption">
                                            <h6 className="mb-1 line-height">Ông Trần Thuận</h6>
                                            <p className="mb-0 text-primary">Tài Khoản</p>
                                        </div>
                                    </Link>
                                    <div className="iq-sub-dropdown iq-user-dropdown">
                                        <div className="iq-card shadow-none m-0">
                                            <div className="iq-card-body p-0 ">
                                                <div className="bg-primary p-3">
                                                    <h5 className="mb-0 text-white line-height">
                                                        Xin Chào Ông Trần Thuận
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
