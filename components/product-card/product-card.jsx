import Link from 'next/link'
import classNames from 'classnames/bind'
import { Button } from '@/components/ui/button'

import styles from './product-card.module.scss'
const cx = classNames.bind(styles)
const ProductCard = ({ product }) => {
    return (
        <div className={cx('item')}>
            <Link href="#!">
                <img src={product.image} alt={product.name} className={cx('thumb')} />
            </Link>

            <div className={cx('body')}>
                <div className={cx('price')}>{product.price.toLocaleString('vi-VN')}đ</div>
                <div className={cx('price-sale')}>
                    {(product.price * 1.2).toLocaleString('vi-VN')}đ
                </div>
                <h3 className={cx('title')}>
                    <Link href="#!">{product.name}</Link>
                </h3>

                <div className={cx('rating-container')}>
                    <div className={cx('stars')}>
                        {[...Array(5)].map((_, index) => (
                            <img key={index} src="/img/star.svg" alt="Star" />
                        ))}
                    </div>
                    <span className={cx('sold-count')}>Đã bán 23</span>
                </div>

                <Button className={cx('buy-now')}>Mua ngay</Button>
            </div>
        </div>
    )
}

export default ProductCard
