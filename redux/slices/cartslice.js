import { checkLogin } from '@/lib/utils'

const { createSlice } = require('@reduxjs/toolkit')
export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem: (state, actions) => {
            const { product, quantity } = actions.payload
            const cart = state
            const index = cart.findIndex((item) => item.id == product.id)
            if (index == -1) {
                //Chưa có -> thêm vào
                if (!checkLogin()) return
                cart.push({ ...product, quantity })
                alert('Thêm vào giỏ hàng thành công !')
            } else {
                //Đã có -> tăng số lượng
                cart[index].quantity = Number(cart[index].quantity) + Number(quantity)
            }
            state = cart
            return state
        },
        removeItem: (state, actions) => {
            const { product } = actions.payload
            const cart = state
            const index = cart.findIndex((item) => item.id == product.id)
            cart.splice(index, 1)
            return cart
        },
        removeCart: (state) => (state = []),
        updateItem: (state, actions) => {
            const { product, quantity } = actions.payload
            const cart = state
            const index = cart.findIndex((item) => item.id == product.id)
            cart[index].quantity = Math.max(1, quantity)
            return cart
        },
        clearCart() {
            return []
        }
    }
})
export const { addItem, removeItem, removeCart, updateItem, clearCart } = cartSlice.actions

export default cartSlice.reducer
