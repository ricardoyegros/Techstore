import axios from "axios";
export const GET_ALL_CATEGORYS = "GET_ALL_CATEGORYS";
export function getAllCategorys() {
    return async function (dispatch) {
        let allCategorys = await axios(
            `http://localhost:3001/categorys`
        )
        return dispatch({ type: GET_ALL_CATEGORYS, payload: allCategorys.data });
    };
};