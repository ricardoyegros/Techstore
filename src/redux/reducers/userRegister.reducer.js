import { REGISTER_USER } from "../actions/UserRegister/putUserRegister";

const initialState = {
  status: ""
};

export default function userRegisterReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        status: action.payload,
   
      };
    default:
      return state;
  }
}