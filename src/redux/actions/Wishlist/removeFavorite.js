import axios from "axios";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"
export function removeFavorite(idUser, idProduct) {
    return async function (dispatch) {
        try {
            const body = {
                idUser,
                idProduct
            }
            const removeFav = await axios.post("http://localhost:3001/favorite/delete", body)
            return dispatch({ type: REMOVE_FAVORITE, payload: removeFav.data });
        } catch (error) {
            console.log(error);
        }
    }
};
