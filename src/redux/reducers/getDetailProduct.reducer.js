import { GET_DETAIL_PRODUCT } from "../actions/getDetailProduct";

const initialState = {
  detailProduct: [],
  isLoading : true
};

export default function getDetailProductReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DETAIL_PRODUCT:
      return {
        ...state,
        detailProduct: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}