import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export function getAllProducts(filter) {
    return async function (dispatch) {
        try {
            const { categoryId, brandId, type, sort, page, size, name } = filter;
            let url = `http://localhost:3001/filter?type=${type || ""
                }&sort=${sort || ""}&categoryId=${categoryId || ""}&brandId=${brandId || ""
                }&page=${page - 1 || "0"}&size=${size || "12"}&name=${name || ""}`;

            let allProducts = await axios(url);
            return dispatch({ type: GET_ALL_PRODUCTS, payload: allProducts.data });

        } catch (e) {
            console.log(e);
        }
    };
};