'use client'
import React from 'react'
import './quantity-selecter.scss'
import { useDispatch } from 'react-redux'
import { updateItem } from '@/redux/slices/cartslice'

const QuantitySelector = ({ product }) => {
    const dispatch = useDispatch()

    const handleDecrease = () => {
        if (product.quantity > 1) {
            dispatch(updateItem({ product, quantity: product.quantity - 1 }))
        }
    }

    const handleIncrease = () => {
        if (product.quantity < 20) {
            dispatch(updateItem({ product, quantity: product.quantity + 1 }))
        }
    }

    return (
        <div className="quantity-selector">
            <button onClick={handleDecrease}>−</button>
            <input type="text" value={product.quantity} readOnly />
            <button onClick={handleIncrease} disabled={product.quantity >= 20}>
                +
            </button>
        </div>
    )
}

export default QuantitySelector
