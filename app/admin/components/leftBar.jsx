'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { authAdminApiRequest } from '@/apiRequests/auth'
import { Button } from '@/components/ui/button'

export default function LeftBar() {
    const router = useRouter()
    const pathname = usePathname();

    const handleLogout = async () => {
        try {
            await authAdminApiRequest.logoutFromNextClientToServer()
            localStorage.removeItem('sessionTokenAdmin')
            router.push('/admin/auth/login')
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <>
            {/* <!-- Sidebar  --> */}
            <div className="iq-sidebar">
                <div className="iq-sidebar-logo d-flex justify-content-between">
                    <a href="/admin" className="header-logo">
                        <img src="/images/logo.png" className="img-fluid rounded-normal" alt="" />
                        <div className="logo-title">
                            <span className="text-primary text-uppercase">BookShop</span>
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
                            <li className={pathname === '/admin' ? 'active' : ''}>
                                <Link href="/admin">
                                    <i className="las la-home iq-arrow-left"></i>Bảng Điều Khiển
                                </Link>
                            </li>
                            <li className={pathname === '/admin/catalog' ? 'active' : ''}>
                                <Link href="/admin/catalog">
                                    <i className="ri-record-circle-line"></i>Danh Mục Sách
                                </Link>
                            </li>
                            <li className={pathname === '/admin/product' ? 'active' : ''}>
                                <Link href="/admin/product">
                                    <i className="ri-record-circle-line"></i>Sách
                                </Link>
                            </li>
                            <li className={pathname === '/admin/order' ? 'active' : ''}>
                                <Link href="/admin/order">
                                    <i className="ri-record-circle-line"></i>Đơn Hàng
                                </Link>
                            </li>
                            <li className={pathname === '/admin/review' ? 'active' : ''}>
                                <Link href="/admin/review">
                                    <i className="ri-record-circle-line"></i>Bài Viết
                                </Link>
                            </li>
                            <li className={pathname === '/admin/comment' ? 'active' : ''}>
                                <Link href="/admin/comment">
                                    <i className="ri-record-circle-line"></i>Bình Luận
                                </Link>
                            </li>
                            <li className={pathname === '/admin/banner' ? 'active' : ''}>
                                <Link href="/admin/banner">
                                    <i className="ri-record-circle-line"></i>Banner
                                </Link>
                            </li>
                            <li className={pathname === '/admin/customer' ? 'active' : ''}>
                                <Link href="/admin/customer">
                                    <i className="ri-record-circle-line"></i>Người Dùng
                                </Link>
                            </li>
                            <li className={pathname === '/admin/auth/login' ? 'active' : ''}>
                                <Link href="/admin/auth/login">
                                    <i className="ri-record-circle-line"></i>Đăng Nhập
                                </Link>
                            </li>
                            <li>
                                <Link href="#" onClick={handleLogout}>
                                    <i className="ri-record-circle-line"></i>Đăng Xuất
                                </Link>
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
                                        BookShop
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
