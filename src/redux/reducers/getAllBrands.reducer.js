import { GET_ALL_BRANDS } from "../actions/getAllBrands";

const initialState = {
  allBrands: [],
  isLoading : true
};

export default function getAllBrandsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_BRANDS:
      return {
        ...state,
        allBrands: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};



