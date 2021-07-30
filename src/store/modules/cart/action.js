import { ADD_CART, REMOVE_CART } from "./actionTypes";

export const addCart = (updatedCart) => ({
    type: ADD_CART,
    updatedCart,
})

export const removeCart = (updatedCart) => ({
    type: REMOVE_CART, 
    updatedCart,
})