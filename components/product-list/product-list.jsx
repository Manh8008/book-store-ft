import classNames from 'classnames/bind'
import { ProductCard } from '@/components/product-card'
import styles from './product-list.module.scss'
import { Button } from '../ui/button'

const cx = classNames.bind(styles)

const products = [
    {
        id: 1,
        name: 'The Enchanted River A magical journey along an enchanted river A magical journey along an enchanted river A magical journey along an enchanted river A magical journey along an enchanted river',
        description: 'A magical journey along an enchanted river.',
        quantity: 10,
        price: 120000,
        image: '/img/product-1.png',
        create_at: '2024-03-01',
        update_at: '2024-03-15',
        star_rating: 4.6
    },
    {
        id: 2,
        name: 'Legends of the Ancient Isles',
        description: 'Uncover hidden legends from ancient islands.',
        quantity: 7,
        price: 120000,
        image: '/img/product-2.png',
        create_at: '2024-01-10',
        update_at: '2024-02-12',
        star_rating: 4.8
    },
    {
        id: 3,
        name: 'Whispers of the Wind',
        description: 'A poetic journey carried by the wind.',
        quantity: 15,
        price: 120000,
        image: '/img/product-3.png',
        create_at: '2024-02-20',
        update_at: '2024-03-05',
        star_rating: 4.4
    },
    {
        id: 4,
        name: 'Echoes of the Past',
        description: 'Discover the echoes of a forgotten world.',
        quantity: 6,
        price: 120000,
        image: '/img/product-4.png',
        create_at: '2024-02-05',
        update_at: '2024-03-01',
        star_rating: 4.7
    },
    {
        id: 5,
        name: 'The Last Horizon',
        description: 'An epic adventure beyond the last horizon.',
        quantity: 12,
        price: 120000,
        image: '/img/product-5.png',
        create_at: '2024-01-25',
        update_at: '2024-02-20',
        star_rating: 4.9
    }
]

export default function ProductList({ title }) {
    return (
        <>
            <div className={cx('wrapper')}>
                <h4>{title}</h4>
                <div className={cx('list')}>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
            <div className={cx('see_more_button')}>
                <Button outline large>
                    Xem thêm
                </Button>
            </div>
        </>
    )
}
