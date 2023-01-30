import axios from "axios";
import setSessionStorage from "../../utils/setSessionStorage.utils";
export const LOGIN_USER = "LOGIN_USER";
export function userLogin(userData,openModal,setOpenModal,error,setError) {
  return async function (dispatch) {
    try {
      let userLoginRes = await axios.post(
        `http://localhost:3001/users/login`,
        userData
      );
      if (userLoginRes.status == 200) {
        let loginData = {
          userEmail: userData.email,
          token: userLoginRes.data.token,
        };
        setSessionStorage("user", loginData);
        setOpenModal(!openModal);
        return dispatch({ type: LOGIN_USER, payload: loginData });
      }
    } catch (e) {
      setError(!error);
    }
  };
}
