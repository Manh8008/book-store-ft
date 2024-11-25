'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import classNames from 'classnames/bind'
import Link from 'next/link'
import styles from './user-header.module.scss'
import { authApiRequest } from '@/apiRequests/auth'

const cx = classNames.bind(styles)

function UserHeader() {
    const [showAccountMenu, setShowAccountMenu] = useState(false)
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
            setShowAccountMenu(false)

            const result = await authApiRequest.logoutFromNextClientToServer()
            if (result.status === 200) router.push('/')
        } catch (error) {
            console.error('Đăng xuất thất bại', error)
        }
    }

    return (
        <div className={cx('header__user')}>
            {token && token ? (
                <>
                    <div className={cx('user-icon')} onClick={toggleAccountMenu}>
                        <div className="link">
                            <i className="fa-regular fa-user"></i>
                            <div className="text text-user">
                                <span>{'Tài khoản'}</span>
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
                                    <a href="#">
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
                                    <a href="#">
                                        <i className="fa-regular fa-heart"></i>
                                        Sản phẩm yêu thích
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
                <Link href="/auth/login" className="link">
                    <i className="fa-regular fa-user"></i>
                    <div className="text text-user">
                        <span>Đăng nhập</span>
                    </div>
                </Link>
            )}
        </div>
    )
}

export default UserHeader
