import { GET_ALL_PRODUCTS } from "../actions/getAllProducts";

const initialState = {
  allProducts: [],
  isLoading : true
};

export default function getAllProductsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}