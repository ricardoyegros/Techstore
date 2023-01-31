// import { ADD_FAVORITE, REMOVE_FAVORITE, GET_FAVORITE, GET_PRODUCTS_FAVORITE } from "../actions/wishlistActions";
import { ADD_FAVORITE } from "../actions/Wishlist/addFavorite";
import { GET_PRODUCTS_FAVORITE } from "../actions/Wishlist/getFavoritesProducts";
import { REMOVE_FAVORITE } from "../actions/Wishlist/removeFavorite";

const initialState = {
    favorite: [],
    message: {},
    products: [],
};

export default function wishlistReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                message: action.payload
            };
        case REMOVE_FAVORITE:
            let prod = state.products.filter(e => e.id !==action.payload.id)
            return {
                ...state,
                products: prod
            };
        // case GET_FAVORITE:
        //     let fav
        //     if(action.payload.products.length > 0){
        //         fav = action.payload.products.map(prod => prod.id )
        //     } else {fav = []}
        //     //console.log(fav)
        //     return {
        //         ...state,
        //         favorite: fav
        //     };
        case GET_PRODUCTS_FAVORITE:
            return {
                ...state,
                products: action.payload
            };
        default:
            return state;
    };
};