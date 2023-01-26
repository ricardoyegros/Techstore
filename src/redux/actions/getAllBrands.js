import axios from "axios";
export const GET_ALL_BRANDS = "GET_ALL_BRANDS";
export function getAllBrands() {
    return async function (dispatch) {
        let allBrands = await axios(
            `http://localhost:3001/brands`
        )
        return dispatch({ type: GET_ALL_BRANDS, payload: allBrands.data });
    };
};