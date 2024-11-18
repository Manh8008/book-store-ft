import classNames from 'classnames/bind'
import Image from 'next/image'
import styles from './package-item.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useUser } from '@/context/user-context'

const cx = classNames.bind(styles)

const PackageItem = ({ cart }) => {
    return (
        <>
            {cart &&
                cart.map((cartItem) => (
                    <div key={cartItem.id}>
                        <div className={cx('package-item')}>
                            <div className={cx('item-icon')}>
                                <picture className={cx('webpimg-container')}>
                                    {/* <source
                                        type="image/webp"
                                        srcSet="https://salt.tikicdn.com/cache/96x96/ts/product/02/9c/b8/36c9e43832a07ac5371fcafeed3a92b2.jpg.webp"
                                    /> */}
                                    <img
                                        src={cartItem.images[0]?.url}
                                        alt="icon"
                                        width="48"
                                        height="48"
                                        className={cx('WebpImg__StyledImg-sc-h3ozu8-0', 'fWjUGo')}
                                    />
                                </picture>
                            </div>

                            <div className={cx('item-info')}>
                                <div className={cx('item-info__first-line')}>
                                    <span
                                        className={cx('item-info__product-name')}
                                        title="Nghệ Thuật Để Trở Thành Một Người Tỏa Sáng"
                                    >
                                        {cartItem.name}
                                    </span>
                                </div>
                                <div className={cx('item-info__second-line')}>
                                    <div className={cx('item-info__qty')}>
                                        SL: {cartItem.quantity}
                                    </div>
                                    <div>
                                        <div
                                            className={cx(
                                                'item-info__price',
                                                'item-info__price-sale'
                                            )}
                                        >
                                            <span className={cx('item-info__original-price')}>
                                                129.000 ₫
                                            </span>
                                            <span>
                                                {parseFloat(cartItem.price).toLocaleString('vi-VN')}
                                                đ
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    )
}

export default PackageItem
