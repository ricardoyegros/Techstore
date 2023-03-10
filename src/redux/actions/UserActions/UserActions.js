import axios from "axios";
import setSessionStorage from "../../../utils/setSessionStorage.utils";
export const USER ={
    REGISTER:"REGISTER_USER",
    LOGIN:"LOGIN_USER",
    LOGOUT:"LOGOUT",
    UPDATE:"UPDATE",
    FORGOT:"FORGOT"
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
export function forgotPassword(dataUser,openModal, setOpenModal, error, setError) {
        return async function(dispatch){
            try {
                let response = await axios.post(`http://localhost:3001/users/forgot`,dataUser)
              if(response.status == 200){
                setOpenModal(!openModal)
              }
              return dispatch({type:USER.FORGOT})
            } catch (e) {
              console.log(e);
               setError(!error)
            }    
        }
    };

export function userLogin(userData,openModal,setOpenModal,error,setError) {
  return async function (dispatch) {
    try {
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
        return (dispatch({ type: USER.LOGIN, payload: loginData }));
      }
    } catch (e) {
      console.log(e.message);
      setError(!error); 
    }
  };
};

export function logoutUser(){
  return function(dispatch){
    sessionStorage.clear();
    return dispatch({ type: USER.LOGOUT});

  }
};

