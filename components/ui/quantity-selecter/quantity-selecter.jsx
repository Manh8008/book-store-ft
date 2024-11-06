'use client'
import React, { useState } from 'react'
import './quantity-selecter.scss'
import { useDispatch } from 'react-redux';
import { updateItem } from "@/redux/slices/cartslice";


const QuantitySelector = ({ product }) => {
    const dispatch = useDispatch();

    const handleDecrease = () => {
        if (product.quantity > 1) {
            dispatch(updateItem({ product, quantity: product.quantity - 1 }));
        }
    };

    const handleIncrease = () => {
        dispatch(updateItem({ product, quantity: product.quantity + 1 }));
    };

    const handleInputChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (!isNaN(newQuantity) && newQuantity >= 1) {
            dispatch(updateItem({ product, quantity: newQuantity }));
        }
    };

    return (
        <div className="quantity-selector">
            <button onClick={handleDecrease}>−</button>
            <input
                type="text"
                value={product.quantity}
                onChange={handleInputChange}
                min="1"
            />
            <button onClick={handleIncrease}>+</button>
        </div>
    )
}

export default QuantitySelector
