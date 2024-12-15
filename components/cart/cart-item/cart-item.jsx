'use client'
import classNames from 'classnames/bind'
import { CiTrash } from 'react-icons/ci'
import styles from './cart-item.module.scss'
import QuantitySelector from '@/components/ui/quantity-selecter/quantity-selecter'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from '@/redux/slices/cartslice'

const cx = classNames.bind(styles)

const CartItem = () => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    return (
        <>
            {cart.length > 0 &&
                cart.map((product) => (
                    <div className={cx('cart-item')} key={product.id}>
                        <div className={cx('item-info')}>
                            <img
                                className={cx('item-image')}
                                src={product.images[0]?.url}
                                alt={product.name}
                            />
                            <div className={cx('item-details')}>
                                <p className={cx('item-name')}>{product.name}</p>
                                <div className={cx('item-price-mobile')}>
                                    {parseFloat(product.price).toLocaleString('vi-VN')}đ
                                </div>
                            </div>
                        </div>
                        <span className={cx('item-price')}>
                            {parseFloat(product.price).toLocaleString('vi-VN')}đ
                        </span>
                        <QuantitySelector product={product} />
                        <div className={cx('item-total')}>
                            {parseFloat(product.price * product.quantity).toLocaleString('vi-VN')}đ
                        </div>
                        <div className={cx('item-remove')}>
                            <CiTrash onClick={() => dispatch(removeItem({ product }))} />
                        </div>
                    </div>
                ))}
            {cart.length === 0 && (
                <div className={cx('empty-cart')}>Chưa có sản phẩm trong giỏ hàng!</div>
            )}
        </>
    )
}

export default CartItem
