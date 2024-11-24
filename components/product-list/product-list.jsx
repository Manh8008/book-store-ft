'use client'

import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { ProductCard } from '@/components/product-card'
import styles from './product-list.module.scss'
import productApiRequest from '@/apiRequests/product'

const cx = classNames.bind(styles)

export default function ProductList({ title, data }) {
    return (
        <>
            <div className={cx('wrapper')}>
                <h4>{title}</h4>
                <div className={cx('list')}>
                    <ProductCard data={data} />
                </div>
            </div>
            {/* <div className={cx('see_more_button')}>
                <Button outline large>
                    Xem thêm
                </Button>
            </div> */}
        </>
    )
}
