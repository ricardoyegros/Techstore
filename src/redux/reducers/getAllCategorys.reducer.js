import { GET_ALL_CATEGORYS } from "../actions/getAllCategorys";

const initialState = {
  allCategorys: [],
  isLoading : true
};

export default function getAllCategorysReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CATEGORYS:
      console.log(action.payload,"categories")
      return {
        ...state,
        allCategorys: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}