import axios from "axios";
import setSessionStorage from "../../../utils/setSessionStorage.utils";
export const REGISTER_USER = "REGISTER_USER";
export function registerUser(dataUser) {
        return async function(dispatch){
            try {
                let infoUser = await axios.post(`http://localhost:3001/users/register`,dataUser)
                let status = infoUser.status;
                setSessionStorage("user",JSON.stringify(infoUser.data))
                return (dispatch({type:REGISTER_USER,payload:status}))   
            } catch (error) {
                alert(error.message);
            }    
        }
    };
