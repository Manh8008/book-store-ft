import classNames from 'classnames/bind'
import Image from 'next/image'
import styles from './package-item.module.scss'

const cx = classNames.bind(styles)

const PackageItem = () => {
    return (
        <div>
            <div className={cx('package-item')}>
                <div className={cx('item-icon')}>
                    <picture className={cx('webpimg-container')}>
                        <source
                            type="image/webp"
                            srcSet="https://salt.tikicdn.com/cache/96x96/ts/product/02/9c/b8/36c9e43832a07ac5371fcafeed3a92b2.jpg.webp"
                        />
                        <Image
                            src="/img/product-1.png"
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
                            Nghệ Thuật Để Trở Thành Một Người Tỏa Sáng
                        </span>
                    </div>
                    <div className={cx('item-info__second-line')}>
                        <div className={cx('item-info__qty')}>SL: x1</div>
                        <div>
                            <div className={cx('item-info__price', 'item-info__price-sale')}>
                                <span className={cx('item-info__original-price')}>129.000 ₫</span>
                                <span>83.850 ₫</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PackageItem
