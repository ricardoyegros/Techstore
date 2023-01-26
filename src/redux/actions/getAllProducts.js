import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export function getAllProducts() {
    return async function (dispatch) {
        let allProducts = await axios(
            `http://localhost:3001/filter?size=100`
        )
        return dispatch({ type: GET_ALL_PRODUCTS, payload: allProducts.data });
    };
};