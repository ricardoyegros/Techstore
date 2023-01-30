import { ACTIONS } from "../actions/cartActions";
// import { GET_CART_ITEMS } from "../actions/getCart";

const initialState = {
    cart : [],
    shipping: {}
} 

if(localStorage.getItem("cart")){
    initialState.cart = JSON.parse(localStorage.getItem("cart"))
}else{
    initialState.cart = [];
}

export default function shoppingCartReducer (state = initialState, action) {
    switch(action.type){
        case ACTIONS.ADD_TO_CART :
                return {
                 cart :  [...action.payload]
                }
        case ACTIONS.REMOVE_ONE_FROM_CART :
            return {
                cart :  [...action.payload]
               }
        case ACTIONS.REMOVE_ONE_ALL_FROM_CART : 
        return {
            cart :  [...action.payload]
           }
        // case ACTIONS.CLEAR_CART : 
        //     return {
        //         ...state.cart, cart : []
        //     }
        // case ACTIONS.SHIPPING_DATA :
        //     return {
        //         ...state,
        //         shipping: action.payload
        //     }
        // case GET_CART_ITEMS :
        //     return {
        //         cart: [...action.payload.data]
        //     } 
        default: return state
    }
}