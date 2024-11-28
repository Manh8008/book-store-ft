'use client'

import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { ProductCard } from '@/components/product-card'
import styles from './product-list.module.scss'
import productApiRequest from '@/apiRequests/product'
import { Button } from '../ui/button'

const cx = classNames.bind(styles)

export default function ProductList({ title, data, seeMore }) {
    return (
        <>
            <div className={cx('wrapper')}>
                <h4 className={cx('title')}>{title}</h4>
                <div className={cx('list')}>
                    <ProductCard data={data} />
                </div>
            </div>
            <div className={cx('see_more_button')}>
                {seeMore && (
                    <Button outline large>
                        Xem thêm
                    </Button>
                )}
            </div>
        </>
    )
}
