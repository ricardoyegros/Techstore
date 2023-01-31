import axios from "axios";
import setSessionStorage from "../../../utils/setSessionStorage.utils";
export const USER ={
    REGISTER:"REGISTER_USER",
    LOGIN:"LOGIN_USER",
    LOGOUT:"LOGOUT",
    UPDATE:"UPDATE"
}

export function registerUser(dataUser) {
        return async function(dispatch){
            try {
                let infoUser = await axios.post(`http://localhost:3001/users/register`,dataUser)
                let userData = {
                    status:infoUser.status,
                    name:infoUser.data.name,
                    lastName:infoUser.data.lastName,
                    email: infoUser.data.email,
                    id:infoUser.data.id,
                    token: infoUser.data.token
                }
                setSessionStorage("user",userData)
                return (dispatch({type:USER.REGISTER,payload:userData}))   
            } catch (error) {
                alert(error.message);
            }    
        }
    };

export function userLogin(userData,openModal,setOpenModal,error,setError) {
  return async function (dispatch) {
    try {
      console.log(userData);
      let userLoginRes = await axios.post(
        `http://localhost:3001/users/login`,
        userData
        );
      if (userLoginRes.status == 201) {
        let loginData = {
          name:userLoginRes.data.name,
          lastName:userLoginRes.data.lastName,
          email: userLoginRes.data.email,
          id:userLoginRes.data.id,
          token: userLoginRes.data.token
        };
        setOpenModal(!openModal)
        setSessionStorage("user",loginData)
        return dispatch({ type: USER.LOGIN, payload: loginData });
      }
    } catch (e) {
      console.log(e);
      setError(!error); 
    }
  };
};

export function logoutUser(){
  return function(dispatch){
    return dispatch({ type: USER.LOGOUT});

  }
}