import { ADD_CART, REMOVE_CART } from "./actionTypes";

const initialState = {
    count: 0 ,
    items: []
}


const cartReducer = (state = initialState, action ) => {
    switch (action.type) {
        case ADD_CART:
            return action.updatedCart
        case REMOVE_CART:
            return action.updatedCart
        default:
            return state
    }
}


export default cartReducer