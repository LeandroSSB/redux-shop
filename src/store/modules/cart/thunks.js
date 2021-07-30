import { addCart, removeCart } from "./action";

export const addCartThunk = (comment) => (dispatch, getState) =>{
    const { cart } = getState()
    const updatedUser = {...cart, count: cart.count + 1 ,items:[...cart.items, comment ]}
    dispatch(addCart(updatedUser))
    console.log(cart)
    
}

export const removeCartThunk = (comment) => (dispatch, getState) => {
    const  {cart} = getState((state) => state.cart)
    const {items} = cart
    const updatedUser = items.filter((a) => a !== comment)
    dispatch(removeCart(updatedUser))
}

// const previus = localStorage.getItem("@KenzieShop:Items")
