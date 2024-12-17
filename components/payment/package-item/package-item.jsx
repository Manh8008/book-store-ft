import classNames from 'classnames/bind'
import Image from 'next/image'
import styles from './package-item.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useUser } from '@/context/user-context'

const cx = classNames.bind(styles)

const PackageItem = ({ cart }) => {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price)
    }

    return (
        <div className={cx('package-items-container')}>
            {cart &&
                cart.map((cartItem) => (
                    <div key={cartItem.id} className={cx('package-item-wrapper')}>
                        <div className={cx('package-item')}>
                            <div className={cx('item-icon')}>
                                {cartItem.images[0]?.url && (
                                    <img
                                        src={cartItem.images[0].url}
                                        alt={cartItem.name}
                                        className={cx('product-image')}
                                    />
                                )}
                            </div>

                            <div className={cx('item-info')}>
                                <div className={cx('item-info__content')}>
                                    <div className={cx('item-info__title-group')}>
                                        <h4 className={cx('item-info__product-name')}>
                                            {cartItem.name}
                                        </h4>
                                        <span className={cx('item-info__qty')}>
                                            Số lượng: {cartItem.quantity}
                                        </span>
                                    </div>

                                    <div className={cx('item-info__price-group')}>
                                        {cartItem.original_price && (
                                            <span className={cx('item-info__original-price')}>
                                                {formatPrice(cartItem.original_price)}
                                            </span>
                                        )}
                                        <span className={cx('item-info__current-price')}>
                                            {formatPrice(cartItem.price)}
                                        </span>
                                    </div>
                                </div>

                                {cartItem.original_price && (
                                    <div className={cx('item-info__discount')}>
                                        -
                                        {Math.round(
                                            (1 - cartItem.price / cartItem.original_price) * 100
                                        )}
                                        %
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default PackageItem
