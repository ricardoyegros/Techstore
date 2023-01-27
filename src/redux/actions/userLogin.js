import axios from "axios";
export const LOGIN_USER = "LOGIN_USER";
export function userLogin(userData) {
    return async function (dispatch) {
        try {
            let userLoginRes = await axios.post(
                `http://localhost:3001/users/login`,userData
            )
            console.log(userLoginRes,"action")
            return dispatch({ type: LOGIN_USER, payload: userLoginRes.data });
            
        } catch (error) {
            console.log(error);
        }
    };
};