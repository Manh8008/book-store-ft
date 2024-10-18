'use client'
import React, { useState } from 'react'
import './quantity-selecter.scss'

const QuantitySelector = ({ initialQuantity = 1, min = 1, max = 10, onChange }) => {
    const [quantity, setQuantity] = useState(initialQuantity)

    const handleDecrease = () => {
        if (quantity > min) {
            const newQuantity = quantity - 1
            setQuantity(newQuantity)
            onChange && onChange(newQuantity)
        }
    }

    const handleIncrease = () => {
        if (quantity < max) {
            const newQuantity = quantity + 1
            setQuantity(newQuantity)
            onChange && onChange(newQuantity)
        }
    }

    const handleInputChange = (e) => {
        let value = parseInt(e.target.value, 10)
        if (isNaN(value)) {
            value = min
        } else if (value < min) {
            value = min
        } else if (value > max) {
            value = max
        }
        setQuantity(value)
        onChange && onChange(value)
    }

    return (
        <div className="quantity-selector">
            <button onClick={handleDecrease} disabled={quantity <= min}>
                −
            </button>
            <input
                type="text"
                value={quantity}
                onChange={handleInputChange}
                onBlur={handleInputChange}
            />
            <button onClick={handleIncrease} disabled={quantity >= max}>
                +
            </button>
        </div>
    )
}

export default QuantitySelector
