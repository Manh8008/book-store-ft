'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import classNames from 'classnames/bind'
import Link from 'next/link'
import styles from './user-header.module.scss'
import { authApiRequest } from '@/apiRequests/auth'
import { LoadingSkeleton } from '../LoadingSkeleton'

const cx = classNames.bind(styles)

const LoadingOverlay = () => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999
            }}
        >
            <div
                style={{
                    textAlign: 'center'
                }}
            >
                <LoadingSkeleton width="300px" height="300px" circle />
                <p style={{ marginTop: '10px', fontSize: '16px' }}>Đang đăng xuất...</p>
            </div>
        </div>
    )
}

function UserHeader() {
    const [showAccountMenu, setShowAccountMenu] = useState(false)
    const [isLoggingOut, setIsLoggingOut] = useState(false)
    const token = localStorage.getItem('sessionTokenUser')
    const router = useRouter()

    const toggleAccountMenu = () => {
        if (token) {
            setShowAccountMenu(!showAccountMenu)
        } else {
            router.push('/auth/login')
        }
    }

    const handleLogout = async () => {
        try {
            setIsLoggingOut(true)
            setShowAccountMenu(false)
            await authApiRequest.logoutFromNextClientToServer()
        } catch (error) {
            console.log(error)
        } finally {
            localStorage.removeItem('sessionTokenUser')
            document.cookie = 'sessionTokenUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
            router.push('/auth/login')
            setIsLoggingOut(false)
        }
    }

    if (isLoggingOut) return <LoadingOverlay />

    return (
        <div className={cx('header__user')}>
            {token && token ? (
                <>
                    <div className={cx('user-icon')} onClick={toggleAccountMenu}>
                        <div className={cx('link')}>
                            <div className={cx('icon-wrapper')}>
                                <i className="fa-regular fa-user"></i>
                            </div>
                            <div className={cx('text')}>
                                <span className={cx('label')}>Tài khoản</span>
                            </div>
                        </div>
                    </div>
                    {showAccountMenu && (
                        <div className={cx('sub-action')}>
                            <div className={cx('top-action')}>
                                <a className={cx('icon')} href="#">
                                    <h3>Tài khoản của tôi</h3>
                                </a>
                            </div>
                            <ul>
                                <li>
                                    <Link href="/customer/profile">
                                        <i className="accountInfo-icon fa-regular fa-user"></i>
                                        Thông tin tài khoản
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/admin">
                                        <i className="fa-solid fa-lock"></i>
                                        Trang quản trị
                                    </Link>
                                </li>
                                <li>
                                    <a href="/customer/order-history">
                                        <i className="fa-solid fa-rotate-right"></i>
                                        Quản lý đơn hàng
                                    </a>
                                </li>
                                <li>
                                    <a href="/customer/address">
                                        <i className="fa-solid fa-location-dot"></i>
                                        Sổ địa chỉ
                                    </a>
                                </li>
                                <li>
                                    <a onClick={handleLogout}>
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                        Đăng xuất
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </>
            ) : (
                <Link href="/auth/login" className={cx('link')}>
                    <div className={cx('icon-wrapper')}>
                        <i className="fa-regular fa-user"></i>
                    </div>
                    <div className={cx('text')}>
                        <span className={cx('label')}>Đăng nhập</span>
                    </div>
                </Link>
            )}
        </div>
    )
}

export default UserHeader
