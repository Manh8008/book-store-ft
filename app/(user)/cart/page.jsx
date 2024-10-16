import classNames from 'classnames/bind'
import { CiTrash } from 'react-icons/ci'

import MainLayout from '@/layouts/main-layout'
import { Button } from '@/components/ui/button'

import styles from './cart.module.scss'
import { CartItem } from '@/components/cart-item'
const cx = classNames.bind(styles)

const Cart = () => {
    return (
        <MainLayout>
            <div className={cx('cart')}>
                <h2 className={cx('cart-title')}>Giỏ Hàng</h2>

                <div className={cx('cart-content')}>
                    <div className={cx('cart-left')}>
                        <div className={cx('cart-header')}>
                            <label className={cx('cart-checkbox')}>
                                <input type="checkbox" className={cx('item-checkbox')} />
                                <span className={cx('label')}>Tất cả (2 sản phẩm)</span>
                            </label>
                            <span>Đơn giá</span>
                            <span>Số lượng</span>
                            <span>Thành tiền</span>
                            <div className={cx('remove-all')}>
                                <CiTrash />
                            </div>
                        </div>
                        <div className={cx('store-section')}>
                            <div className={cx('store-title')}>
                                <input type="checkbox" className={cx('store-checkbox')} />
                                <span>Sóng Official</span>
                            </div>

                            <CartItem />
                            <CartItem />
                            <CartItem />
                        </div>
                    </div>
                    <div className={cx('cart-right')}>
                        <div className={cx('cart-summary')}>
                            <div className={cx('summary-discount')}>
                                <span>Tạm tính</span>
                                <span>-55.000đ</span>
                            </div>
                            <div className={cx('summary-discount')}>
                                <span>Giảm giá từ Deal</span>
                                <span>-55.000đ</span>
                            </div>
                            <div className={cx('summary-total')}>
                                <span>Tổng tiền</span>
                                <span className={cx('total-amount')}>330.000đ</span>
                            </div>
                            <Button primary className={cx('checkout-button')}>
                                Mua Hàng (2)
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Cart
