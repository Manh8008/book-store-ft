import classNames from 'classnames/bind'
import { CiTrash } from 'react-icons/ci'
import styles from './cart-item.module.scss'

const cx = classNames.bind(styles)

export const CartItem = () => {
    return (
        <div className={cx('store-section')}>
            <div className={cx('store-title')}>
                <input type="checkbox" className={cx('store-checkbox')} />
                <span>Sóng Official</span>
            </div>
            <div className={cx('cart-item')}>
                <input type="checkbox" className={cx('item-checkbox')} />
                <img className={cx('item-image')} src="/img/product-5.png" alt="Book" />
                <div className={cx('item-info')}>
                    <p>Khởi Nguyên Của Vũ Trụ - Lịch Sử 14 Tỉ Năm Tiến Hóa</p>
                    <span className={cx('item-price')}>
                        180.000đ <del>235.000đ</del>
                    </span>
                </div>
                <div className={cx('item-quantity')}>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
                <div className={cx('item-total')}>180.000đ</div>
                <div className={cx('item-remove')}>
                    <CiTrash />
                </div>
            </div>
        </div>
    )
}
