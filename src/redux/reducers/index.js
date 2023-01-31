import { combineReducers } from "redux";
import getAllProductsReducer from "./getAllProducts.reducer";
import getAllCategorysReducer from "./getAllCategorys.reducer";
import getAllBrandsReducer from "./getAllBrands.reducer";
import getDetailProductReducer from "./getDetailProduct.reducer";
import userReducer from "./User.reducer";
import shoppingCartReducer from "./shoppingCart.reducer";

import wishlistReducer from "./wishlist.reducer";
export default combineReducers({
  getAllProductsReducer,
  getAllCategorysReducer,
  getAllBrandsReducer,
  getDetailProductReducer,
  userReducer,
  shoppingCartReducer,
  wishlistReducer
});
