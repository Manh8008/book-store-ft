import classNames from 'classnames/bind'
import styles from './product-list.module.scss'
import { ProductCard } from '../product-card/product-card'

const cx = classNames.bind(styles)

export default function ProductList({ title }) {
    return (
        <div className={cx('wrapper')}>
            <h4>{title}</h4>
            <div className={cx('list')}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}
