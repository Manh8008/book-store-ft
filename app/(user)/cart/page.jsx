import classNames from 'classnames/bind'
import { CiTrash } from 'react-icons/ci'

import MainLayout from '@/layouts/main-layout'
import { CartItem } from '@/components/cart-item'
import { Button } from '@/components/ui/button'

import styles from './cart.module.scss'
const cx = classNames.bind(styles)

const Cart = () => {
    return (
        <MainLayout>
            <div className={cx('cart')}>
                <div className={cx('cart-header')}>
                    <label className={cx('styled-checkbox')}>
                        <input type="checkbox" className={cx('item-checkbox')} />

                        <span className={cx('label')}>Tất cả (2 sản phẩm)</span>
                    </label>
                    <span></span>
                    <span>Số lượng</span>
                    <span>Thành tiền</span>
                    <span>
                        <CiTrash />
                    </span>
                </div>
                <h2 className={cx('cart-title')}>Giỏ Hàng</h2>
                <div className={cx('cart-content')}>
                    <CartItem />
                    <div className={cx('cart-summary')}>
                        <div className={cx('summary-discount')}>
                            <span>Giảm giá từ Deal</span>
                            <span>-55.000đ</span>
                        </div>
                        <div className={cx('summary-total')}>
                            <span>Tổng tiền</span>
                            <span className={cx('total-amount')}>180.000đ</span>
                        </div>
                        <Button primary className={cx('checkout-button')}>
                            Mua Hàng (1)
                        </Button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Cart
