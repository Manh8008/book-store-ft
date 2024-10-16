import classNames from 'classnames/bind'
import { CiTrash } from 'react-icons/ci'
import styles from './cart-item.module.scss'

const cx = classNames.bind(styles)

export const CartItem = () => {
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
            <div className={cx('item-quantity')}>
                <button>-</button>
                <span>1</span>
                <button>+</button>
            </div>
            <div className={cx('item-total')}>150.000đ</div>
            <div className={cx('item-remove')}>
                <CiTrash />
            </div>
        </div>
    )
}
