import axios from "axios";
export const REGISTER_USER = "REGISTER_USER";
export function registerUser(dataUser) {
        return async function(dispatch){
            try {
                let infoUser = await axios.post(`http://localhost:3001/users/register`,dataUser)
                console.log(infoUser);
                let status = infoUser.status;
                return (dispatch({type:REGISTER_USER,payload:status}))   
            } catch (error) {
                alert(error.message);
            }
             
        }
    
    };