import { LOGIN_USER } from "../actions/userLogin";
/* crear action para logout */
const initialState = {
  userEmail:{},
  token:{}
};

export default function userLoginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        userEmail: action.payload.userEmail,
        token: action.payload.token

      }
   /*  case LOGOUT_USER:
       
      return {
        ...state,
        userEmail: {},
        token:{}
      } */
    default:
      return state;
  }
}