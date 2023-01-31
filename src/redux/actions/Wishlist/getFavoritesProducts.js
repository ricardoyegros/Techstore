import axios from "axios";
export const GET_PRODUCTS_FAVORITE = "GET_PRODUCTS_FAVORITE";
export function getFavoriteProducts() {
    return async function (dispatch) {
        try {
            const id = JSON.parse(JSON.parse(sessionStorage.user)).id
            const favorites = await axios.get(`http://localhost:3001/favorite?id=${id}`)
            return dispatch({ type: GET_PRODUCTS_FAVORITE, payload: favorites.data.products });
        } catch (error) {
            console.log(error);
        }
    }
};