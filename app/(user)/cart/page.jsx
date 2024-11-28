'use client'

import { CiTrash } from 'react-icons/ci'
import classNames from 'classnames/bind'
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { BannerSlider, CartItem } from '@/components/cart'
import { removeCart } from '@/redux/slices/cartslice'
import { Button } from '@/components/ui/button'
import MainLayout from '@/layouts/main-layout'
import styles from './cart.module.scss'

const cx = classNames.bind(styles)

const Cart = () => {
    // Tổng tiền , xóa giỏ hàng
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
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
                        <div className={cx('cart-header')}>
                            <label className={cx('cart-checkbox')}>
                                <input type="checkbox" className={cx('item-checkbox')} />
                                <span className={cx('label')}>Tất cả ({totalItem} sản phẩm)</span>
                            </label>
                            <span>Đơn giá</span>
                            <span>Số lượng</span>
                            <span>Thành tiền</span>
                            <div className={cx('remove-all')}>
                                <CiTrash onClick={() => dispatch(removeCart())} />
                            </div>
                        </div>
                        <div className={cx('store-section')}>
                            <div className={cx('store-title')}>
                                <input type="checkbox" className={cx('store-checkbox')} />
                                <span>Sóng Official</span>
                            </div>

                            <CartItem />
                        </div>

                        {/* <ProductList title="Sản phẩm mua kèm" /> */}
                    </div>
                    <div className={cx('cart-right')}>
                        <div className={cx('cart-summary')}>
                            <div className={cx('summary-discount')}>
                                <span>Tạm tính</span>
                                <span>-{parseFloat(total).toLocaleString('vi-VN')}đ</span>
                            </div>
                            <div className={cx('summary-discount')}>
                                <span>Giảm giá từ Deal</span>
                                <span>-55.000đ</span>
                            </div>
                            <div className={cx('summary-total')}>
                                <span>Tổng tiền</span>
                                <span className={cx('total-amount')}>
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
                </div>
            </div>
        </MainLayout>
    )
}

export default Cart
