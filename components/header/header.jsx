'use client'

import Link from 'next/link'
import classNames from 'classnames/bind'
import CategoryList from '../category-list/category-list'
import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import UserHeader from '../ui/user-header'

import styles from './header.module.scss'
import SidebarMenu from './sidebar-menu'

const cx = classNames.bind(styles)

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const cart = useSelector((state) => state.cart)
    const totalItem = useMemo(() => {
        return cart.reduce((total, item) => total + item.quantity, 0)
    }, [cart])

    const toggleMenu = () => setIsMenuOpen((prev) => !prev)

    return (
        <header className={cx('header')}>
            <div className={cx('topHeader')}>
                <img src="../../../img/banner-sale.jpg" alt="banner-sale" />
            </div>
            <div className={cx('midHeader')}>
                <nav className={cx('navbar')}>
                    <div className={cx('row')}>
                        <Link href="/">
                            <img
                                src="/img/logo.svg"
                                className={cx('header-logo')}
                                alt="Book Shop"
                            />
                        </Link>
                        <form className={cx('searchContainer')} action="/search">
                            <input
                                type="text"
                                placeholder="Tìm kiếm..."
                                className={cx('searchInput')}
                                name="query"
                            />
                            <button type="submit" className={cx('searchButton')}>
                                <i className="fas fa-search"></i>
                            </button>
                        </form>

                        <div className={cx('list')}>
                            <div className={cx('item', 'm-0')}>
                                <Link href="#!" className={cx('link')}>
                                    <i className="fa-solid fa-phone-volume"></i>
                                    <div className={cx('text', 'textPhone')}>
                                        <span>Gọi điện đặt hàng</span>
                                        <br />
                                        <span>0986 836 563</span>
                                    </div>
                                </Link>
                            </div>
                            <div className={cx('item', 'm-0')}>
                                <UserHeader />
                            </div>
                            <div className={cx('item', 'm-0')}>
                                <Link href="/cart" className={cx('link')}>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    <div className={cx('text', 'textCart')}>
                                        <p className={cx('bage')}>{totalItem}</p>
                                        <span>Giỏ hàng</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className={cx('botHeader')}>
                <div className={cx('content')}>
                    <nav className={cx('navbar')}>
                        <div className={cx('category-list')}>
                            <CategoryList />
                        </div>

                        <ul className={cx('menuList')}>
                            <li>
                                <Link href="/">Trang chủ</Link>
                            </li>
                            <li>
                                <Link href="/shop">Danh mục sản phẩm</Link>
                            </li>
                            <li>
                                <Link href="/review-book">Bài viết</Link>
                            </li>
                            <li>
                                <Link href="/contact">Liên hệ</Link>
                            </li>
                        </ul>

                        {/* Hamburger menu */}
                        <button className={cx('hamburgerMenu')} onClick={toggleMenu}>
                            <i className="fas fa-bars"></i>
                        </button>

                        <SidebarMenu isMenuOpen={isMenuOpen} closeMenu={toggleMenu} />

                        <form className={cx('searchContainer', 'search-mobi')} action="/search">
                            <input
                                type="text"
                                placeholder="Tìm kiếm..."
                                className={cx('searchInput')}
                                name="query"
                            />
                            <button type="submit" className={cx('searchButton')}>
                                <i className="fas fa-search"></i>
                            </button>
                        </form>

                        <div className={cx('cart-icon-mobi')}>
                            <Link href="/cart" className={cx('link')}>
                                <i className="fa-solid fa-cart-shopping"></i>
                                <div className={cx('text', 'textCart')}>
                                    <p className={cx('bage')}>{totalItem}</p>
                                    <span>Giỏ hàng</span>
                                </div>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
