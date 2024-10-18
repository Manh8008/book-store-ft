'use client'
import classNames from 'classnames/bind'
import { CiTrash } from 'react-icons/ci'
import styles from './cart-item.module.scss'
import { Button } from '@/components/ui/button'
import QuantitySelector from '@/components/ui/quantity-selecter/quantity-selecter'

const cx = classNames.bind(styles)

const CartItem = () => {
    const handleQuantityChange = (newQuantity) => {
        console.log('New Quantity: ', newQuantity)
    }

    return (
        <div className={cx('cart-item')}>
            <div className={cx('item-info')}>
                <input type="checkbox" className={cx('item-checkbox')} />
                <img className={cx('item-image')} src="/img/product-5.png" alt="Book" />
                <div className={cx('item-info')}>
                    <p>Thuyết Vụ Nổ Lớn - Sự Khởi Đầu Của Vũ Trụ</p>
                </div>
            </div>
            <span className={cx('item-price')}>
                150.000đ <del>210.000đ</del>
            </span>
            <QuantitySelector
                initialQuantity={3}
                min={1}
                max={10}
                onChange={handleQuantityChange}
            />
            <div className={cx('item-total')}>150.000đ</div>
            <div className={cx('item-remove')}>
                <CiTrash />
            </div>
        </div>
    )
}

export default CartItem
