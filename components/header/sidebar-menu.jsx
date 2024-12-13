import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import classNames from 'classnames/bind'
import styles from './sidebar-menu.module.scss'
import { authApiRequest } from '@/apiRequests/auth'
import { useRouter } from 'next/navigation'

const cx = classNames.bind(styles)

const SidebarMenu = ({ isMenuOpen, closeMenu }) => {
    const [expandedItems, setExpandedItems] = useState({})
    const menuRef = useRef(null)
    const [activeItem, setActiveItem] = useState(null)
    const router = useRouter()
    const [token, setToken] = useState(null)

    useEffect(() => {
        setToken(localStorage.getItem('sessionTokenUser'))
    }, [])

    const toggleExpand = (item) => {
        setExpandedItems((prev) => ({
            ...prev,
            [item]: !prev[item]
        }))
    }

    const handleMenuItemClick = (item) => {
        if (activeItem === item) {
            setActiveItem(null)
            setExpandedItems((prev) => ({
                ...prev,
                [item]: false
            }))
        } else {
            setActiveItem(item)
            setExpandedItems((prev) => ({
                ...prev,
                [item]: true
            }))
        }
    }

    const handleLogout = async () => {
        try {
            await authApiRequest.logoutFromNextClientToServer()
            localStorage.removeItem('sessionTokenUser')
            setToken(null) // Cập nhật lại trạng thái token
            router.push('/auth/login')
        } catch (error) {
            alert('Đăng xuất thất bại!')
        }
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu()
            }
        }

        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [closeMenu])

    return (
        isMenuOpen && (
            <div className={cx('menuSidebar')} ref={menuRef}>
                <button className={cx('closeMenu')} onClick={closeMenu}>
                    <i className="fas fa-times"></i>
                </button>
                <ul className={cx('menuList')}>
                    <li className={cx('authLinks')}>
                        {token ? (
                            <Link href="#"
                                style={{
                                    display: 'inline-block',
                                    margin: '0 auto',
                                    padding: '8px 12px',
                                    textAlign: 'center',
                                }}
                                onClick={handleLogout}
                                className={cx('menuItem', 'logout')}
                            >
                                Đăng xuất
                            </Link>
                        ) : (
                            <>
                                <Link href="/auth/login" className={cx('menuItem')}>
                                    Đăng nhập
                                </Link>
                                <Link href="/auth/register" className={cx('menuItem')}>
                                    Đăng ký
                                </Link>
                            </>
                        )}
                    </li>

                    <li>
                        <Link href="/" className={cx('menuItem')}>
                            Trang chủ
                        </Link>
                    </li>

                    <li>
                        <Link href="/contact" className={cx('menuItem')}>
                            Liên hệ
                        </Link>
                    </li>

                    <li>
                        <Link href="/shop" className={cx('menuItem')}>
                            Cửa hàng
                        </Link>
                    </li>

                    <li>
                        <div className={cx('menuItem')} onClick={() => toggleExpand('customerInfo')}>
                            Thông tin khách hàng
                            <i
                                className={cx(
                                    'fas',
                                    expandedItems['customerInfo'] ? 'fa-chevron-up' : 'fa-chevron-down'
                                )}
                            ></i>
                        </div>
                        {expandedItems['customerInfo'] && (
                            <ul className={cx('submenu')}>
                                <li>
                                    <Link href="/customer/profile">Hồ sơ cá nhân</Link>
                                </li>
                                <li>
                                    <Link href="/admin">Trang quản trị</Link>
                                </li>
                                <li>
                                    <Link href="/customer/address">Sổ địa chỉ</Link>
                                </li>
                                <li>
                                    <Link href="/customer/order-history">Lịch sử đơn hàng</Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <div
                            className={cx('menuItem', { active: activeItem === 'alphaBooks' })}
                            onClick={() => handleMenuItemClick('alphaBooks')}
                        >
                            Về Alpha Books
                            <i
                                className={cx(
                                    'fas',
                                    expandedItems['alphaBooks']
                                        ? 'fa-chevron-up'
                                        : 'fa-chevron-down'
                                )}
                            ></i>
                        </div>
                        {expandedItems['alphaBooks'] && (
                            <ul className={cx('submenu')}>
                                <li>
                                    <Link href="/about-me">Lịch sử</Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <div className={cx('menuItem')} onClick={() => toggleExpand('bookcase')}>
                            Tủ sách
                            <i
                                className={cx(
                                    'fas',
                                    expandedItems['bookcase'] ? 'fa-chevron-up' : 'fa-chevron-down'
                                )}
                            ></i>
                        </div>
                        {expandedItems['bookcase'] && (
                            <ul className={cx('submenu')}>
                                <li>
                                    <Link href="/shop">Sách tư duy - kỹ năng</Link>
                                </li>
                                <li>
                                    <Link href="/shop">Sách lịch sử chính trị</Link>
                                </li>
                                <li>
                                    <Link href="/shop">Sách khoa học giáo dục</Link>
                                </li>
                                <li>
                                    <Link href="/shop">Sách văn hóa nghệ thuật</Link>
                                </li>
                                <li>
                                    <Link href="/shop">Sách kinh tế tài chính</Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <div className={cx('menuItem')} onClick={() => toggleExpand('news')}>
                            Tin tức - Sự kiện
                            <i
                                className={cx(
                                    'fas',
                                    expandedItems['news'] ? 'fa-chevron-up' : 'fa-chevron-down'
                                )}
                            ></i>
                        </div>
                        {expandedItems['news'] && (
                            <ul className={cx('submenu')}>
                                <li>
                                    <Link href="/review-book">Bài viết</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
        )
    )
}

export default SidebarMenu
