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
        <header className={cx('root')}>
            <div className={cx('banner')}>
                <img src="/img/banner-sale.jpg" alt="banner-sale" />
            </div>
            <div className={cx('main')}>
                <nav className={cx('nav')}>
                    <div className={cx('wrapper')}>
                        <Link href="/">
                            <img src="/img/logo.svg" className={cx('logo')} alt="Book Shop" />
                        </Link>
                        <form className={cx('search')} action="/search">
                            <input
                                type="text"
                                placeholder="Tìm kiếm..."
                                className={cx('input')}
                                name="query"
                            />
                            <button type="submit" className={cx('button')}>
                                <i className="fas fa-search"></i>
                            </button>
                        </form>

                        <div className={cx('actions')}>
                            <div className={cx('action')}>
                                <Link href="#!" className={cx('link')}>
                                    <div className={cx('icon-wrapper')}>
                                        <i className="fa-solid fa-phone-volume"></i>
                                    </div>
                                    <div className={cx('text')}>
                                        <span className={cx('label')}>Gọi điện đặt hàng</span>
                                        <span className={cx('phone-number')}>0986 836 563</span>
                                    </div>
                                </Link>
                            </div>
                            <div className={cx('action')}>
                                <UserHeader />
                            </div>
                            <div className={cx('action')}>
                                <Link href="/cart" className={cx('link')}>
                                    <div className={cx('icon-wrapper')}>
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </div>
                                    <div className={cx('text')}>
                                        <span className={cx('cart-badge')}>{totalItem}</span>
                                        <span className={cx('label')}>Giỏ hàng</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className={cx('bottom')}>
                <div className={cx('container')}>
                    <nav className={cx('nav')}>
                        <div className={cx('nav-left')}>
                            <button className={cx('hamburger')} onClick={toggleMenu}>
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>

                        <form className={cx('search-mobile')} action="/search">
                            <input
                                type="text"
                                placeholder="Tìm kiếm..."
                                className={cx('input')}
                                name="query"
                            />
                            <button type="submit" className={cx('button')}>
                                <i className="fas fa-search"></i>
                            </button>
                        </form>

                        <div className={cx('nav-right')}>
                            <Link href="/cart" className={cx('cart-mobile')}>
                                <div className={cx('icon-wrapper')}>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    <span className={cx('cart-badge')}>{totalItem}</span>
                                </div>
                            </Link>
                        </div>

                        <div className={cx('categories')}>
                            <CategoryList />
                        </div>

                        <ul className={cx('menu')}>
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

                        <SidebarMenu isMenuOpen={isMenuOpen} closeMenu={toggleMenu} />
                    </nav>
                </div>
            </div>
        </header>
    )
}
