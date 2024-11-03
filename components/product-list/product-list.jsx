'use client'

import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { ProductCard } from '@/components/product-card'
import styles from './product-list.module.scss'
import { Button } from '../ui/button'
import productApiRequest from '@/apiRequests/product'

const cx = classNames.bind(styles)

export default function ProductList({ title }) {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const listProducts = await productApiRequest.getAllBooks()
                setProductList(listProducts.payload.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchProducts()
    }, [])

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
