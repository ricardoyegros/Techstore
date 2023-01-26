import axios from "axios";
export const GET_DETAIL_PRODUCT = "GET_DETAIL_PRODUCT";
export function getDetailProduct(i) {
    return async function (dispatch) {
        let detailProduct = await axios(
            `http://localhost:3001/products/${i}`
            )
        return dispatch({ type: GET_DETAIL_PRODUCT, payload: detailProduct.data });
    };
};