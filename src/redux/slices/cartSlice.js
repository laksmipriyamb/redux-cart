import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        //addtocart
        addToCart: (state, action) => {
            const existingProduct = state.find(item => item.id == action.payload.id)
            if (existingProduct) {
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                const remainingProduct = state.filter(item => item.id != existingProduct.id)
                state = [...remainingProduct, existingProduct]
            } else {
                state.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price })
            }
        },
        //remove cart item,action payload has product id
        removeCartItem: (state, action) => {
            return state.filter(item => item.id != action.payload)
        },
        //increment quantity
        incrementCartItem:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload.id)
            existingProduct.quantity++
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingProduct = state.filter(item=>item.id!=existingProduct.id)
            state = [...remainingProduct,existingProduct]
        },
        //decrement quantity
        decrementCartItem:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload.id)
            existingProduct.quantity--
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingProduct = state.filter(item=>item.id!=existingProduct.id)
            state = [...remainingProduct,existingProduct]
        },
        emptyCart:(state)=>{
            return []
        }
    }
})
export const { addToCart,removeCartItem,incrementCartItem,decrementCartItem,emptyCart } = cartSlice.actions
export default cartSlice.reducer