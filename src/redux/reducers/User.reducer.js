import { USER } from "../actions/UserActions/UserActions";

const initialState = {
  name:"",
  status:"",
  token:"",
  id:""
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER.REGISTER:
      return {
        ...state,
        id:action.payload.id,
        status: action.payload.status,
        name: action.payload.name,
        token: action.payload.token
   
      };
    case USER.LOGIN:
      return{
        ...state,
        id:action.payload.id,
        status: action.payload.status,
        name: action.payload.name,
        token: action.payload.token
      } 
    default:
      return state;
  }
}