import axios from "axios";
export const GET_DETAIL_PRODUCT = "GET_DETAIL_PRODUCT";
export function getDetailProduct(id) {
    return async function (dispatch) {
        console.log(id,"soy el id");
        let detailProduct = await axios(
            `http://localhost:3001/products/${Number(id)}`
            )
        return dispatch({ type: GET_DETAIL_PRODUCT, payload: detailProduct.data });
    };
};