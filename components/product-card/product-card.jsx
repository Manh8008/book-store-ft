'use client'

import Link from 'next/link'
import classNames from 'classnames/bind'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { memo } from 'react'

import { addItem } from '@/redux/slices/cartslice'
import styles from './product-card.module.scss'
import { ToastContainer, ToastSuccess } from '../ui/toast-success/toast-success'

const cx = classNames.bind(styles)
const ProductCard = memo((props) => {
    const [quantity] = useState(1)
    const dispatch = useDispatch()
    const [toasts, setToasts] = useState([])

    const handleAddToCart = (product) => {
        dispatch(addItem({ product, quantity }))
        const newToast = {
            id: Date.now(),
            message: 'Thêm vào giỏ hàng thành công!'
        }
        setToasts((prev) => [...prev, newToast])
    }

    return (
        <>
            <ToastContainer toasts={toasts} />

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

                                <h3 className={cx('title')}>
                                    <Link href={`/book-detail/${product?.id}`}>
                                        {product?.name}
                                    </Link>
                                </h3>
                                <div className={cx('rating-container')}>
                                    <span className={cx('sold-count')}>
                                        Đã bán {product.sales_count}
                                    </span>
                                </div>
                                <button
                                    className={cx('buy-now')}
                                    onClick={() => handleAddToCart(product)}
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
