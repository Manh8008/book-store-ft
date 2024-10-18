import Link from 'next/link'
import classNames from 'classnames/bind'
import { Button } from '@/components/ui/button'

import styles from './product-card.module.scss'
const cx = classNames.bind(styles)

export const ProductCard = () => {
    return (
        <div className={cx('item')}>
            <Link href="#!">
                <img src="/img/product-1.png" alt="Nikko Apartments" className={cx('thumb')} />
            </Link>
            <div className={cx('body')}>
                <h3 className={cx('title')}>
                    <Link href="#!">My Hero Academia - Tập 27: One’s Justice</Link>
                </h3>
                <div className={cx('stars')}>
                    <img src="/img/star.svg" alt="Star" />
                    <img src="/img/star.svg" alt="Star" />
                    <img src="/img/star.svg" alt="Star" />
                    <img src="/img/star.svg" alt="Star" />
                    <img src="/img/star.svg" alt="Star" />
                </div>
                <div className={cx('price')}>20.000đ</div>
                <div className={cx('price-sale')}>15.000đ</div>
                <Button primary className={cx('buy-now')}>
                    Mua ngay
                </Button>
            </div>
        </div>
    )
}
