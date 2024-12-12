import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import classNames from 'classnames/bind'
import styles from './sidebar-menu.module.scss'

const cx = classNames.bind(styles)

const SidebarMenu = ({ isMenuOpen, closeMenu }) => {
    const [expandedItems, setExpandedItems] = useState({})
    const menuRef = useRef(null)
    const [activeItem, setActiveItem] = useState(null)

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
                        <Link href="/auth/login">Đăng nhập</Link>
                        <Link href="/auth/register">Đăng ký</Link>
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
                                    <Link href="/shop">Sách lịch sử chỉnh trị</Link>
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
