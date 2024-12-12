'use client'

import Link from 'next/link'
import classNames from 'classnames/bind'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { memo } from 'react'

import { addItem } from '@/redux/slices/cartslice'
import styles from './product-card.module.scss'
const cx = classNames.bind(styles)
const ProductCard = memo((props) => {
    const [quantity] = useState(1)
    const dispatch = useDispatch()

    return (
        <>
            {props &&
                props.data &&
                props.data.map((product) => {
                    return (
                        <div className={cx('item')} key={product?.id}>
                            <Link href={`/book-detail/${product?.id}`}>
                                <img
                                    src={product?.images[0]?.url}
                                    alt={product?.name}
                                    className={cx('thumb')}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </Link>
                            <div className={cx('body')}>
                                <div className={cx('price')}>
                                    {parseFloat(product?.price).toLocaleString('vi-VN')}đ
                                </div>
                                <div className={cx('price-sale')}>
                                    {(parseFloat(product?.price) * 1.2).toLocaleString('vi-VN')}đ
                                </div>
                                <h3 className={cx('title')}>
                                    <Link href={`/book-detail/${product?.id}`}>
                                        {product?.name}
                                    </Link>
                                </h3>
                                <div className={cx('rating-container')}>
                                    <div className={cx('stars')}>
                                        {[...Array(5)].map((_, index) => (
                                            <img key={index} src="/img/star.svg" alt="Star" />
                                        ))}
                                    </div>
                                    <span className={cx('sold-count')}>
                                        Đã bán {product.sales_count}
                                    </span>
                                </div>
                                <button
                                    className={cx('buy-now')}
                                    onClick={() => dispatch(addItem({ product, quantity }))}
                                >
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    )
                })}
        </>
    )
})

export default ProductCard
