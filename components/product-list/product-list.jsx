import classNames from 'classnames/bind'
import styles from './product-list.module.scss'
import { ProductCard } from '../product-card/product-card'

const cx = classNames.bind(styles)

export default function ProductList() {
    return (
        <div className={cx('wrapper')}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}
