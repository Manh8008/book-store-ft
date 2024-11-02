"use client"

import classNames from 'classnames/bind'
import { ProductCard } from '@/components/product-card'
import styles from './product-list.module.scss'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'

const cx = classNames.bind(styles)

export default function ProductList({ title }) {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const listProducts = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/getAllBooks`, { cache: 'no-store' })
                .then(res => res.json())
            setProductList(listProducts.data);
        }
        fetchProducts();
    }, []);

    return (
        <>
            <div className={cx('wrapper')}>
                <h4>{title}</h4>
                <div className={cx('list')}>
                    <ProductCard data={productList} />
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
