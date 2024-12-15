'use client'

import { CiTrash } from 'react-icons/ci'
import classNames from 'classnames/bind'
import React, { useMemo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { BannerSlider, CartItem } from '@/components/cart'
import { removeCart } from '@/redux/slices/cartslice'
import { Button } from '@/components/ui/button'
import MainLayout from '@/layouts/main-layout'
import { productApiRequest } from '@/apiRequests/product'
import { ProductList } from '@/components/product-list'
import styles from './cart.module.scss'

const cx = classNames.bind(styles)

const Cart = () => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const [bestSeller, setBestSeller] = useState([])
    const [newBooks, setNewBooks] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [bestSellerRes, newBooksRes] = await Promise.all([
                    productApiRequest.getBooksBestSeller(),
                    productApiRequest.getNewBook()
                ])
                setBestSeller(bestSellerRes.payload.data)
                setNewBooks(newBooksRes.payload.data.slice(0, 10))
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchData()
    }, [])

    const total = useMemo(
        () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
        [cart]
    )
    const totalItem = useMemo(() => {
        return cart.reduce((total, item) => total + item.quantity, 0)
    }, [cart])

    return (
        <MainLayout>
            <div className={cx('cart')}>
                <div className={cx('cart-content')}>
                    <div className={cx('cart-left')}>
                        <h2 className={cx('cart-title')}>Giỏ Hàng</h2>

                        {cart.length === 0 ? (
                            <>
                                <div className={cx('empty-cart')}>
                                    <img
                                        src="/img/empty-cart.png"
                                        alt="Giỏ hàng trống"
                                        className={cx('empty-cart-img')}
                                    />
                                    <p className={cx('empty-cart-text')}>
                                        Giỏ hàng của bạn còn trống
                                    </p>
                                    <Button outline href="/shop" className={cx('shopping-button')}>
                                        Mua sắm ngay
                                    </Button>
                                </div>

                                <div className={cx('recommend-section')}>
                                    <h3 className={cx('recommend-title')}>Sách Bán Chạy</h3>
                                    <ProductList data={bestSeller} />
                                </div>

                                <div className={cx('recommend-section')}>
                                    <h3 className={cx('recommend-title')}>Sách Mới</h3>
                                    <ProductList data={newBooks} />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={cx('cart-header')}>
                                    <span>Tất cả ({totalItem} sản phẩm)</span>
                                    <span>Đơn giá</span>
                                    <span>Số lượng</span>
                                    <span>Thành tiền</span>
                                    <div className={cx('remove-all')}>
                                        <CiTrash onClick={() => dispatch(removeCart())} />
                                    </div>
                                </div>
                                <div className={cx('store-section')}>
                                    <div className={cx('store-title')}>
                                        <span>Sóng Official</span>
                                    </div>
                                    <CartItem />
                                </div>
                            </>
                        )}
                    </div>

                    {cart.length > 0 && (
                        <div className={cx('cart-right')}>
                            <div className={cx('cart-summary')}>
                                <div className={cx('summary-row')}>
                                    <span>Tạm tính</span>
                                    <span>{parseFloat(total).toLocaleString('vi-VN')}đ</span>
                                </div>

                                <div className={cx('summary-row', 'total')}>
                                    <span>Tổng tiền</span>
                                    <span className={cx('amount')}>
                                        {parseFloat(total).toLocaleString('vi-VN')}đ
                                    </span>
                                </div>
                                <Button
                                    primary
                                    className={cx('checkout-button')}
                                    href="/checkout/payment"
                                >
                                    Mua Hàng ({totalItem})
                                </Button>
                            </div>

                            <div className={cx('cart-banner')}>
                                <BannerSlider />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    )
}

export default Cart
