import { combineReducers } from "redux";
import getAllProductsReducer from "./getAllProducts.reducer";
import getAllCategorysReducer from "./getAllCategorys.reducer";
import getAllBrandsReducer from "./getAllBrands.reducer";
import getDetailProductReducer from "./getDetailProduct.reducer";
import userRegisterReducer from "./userRegister.reducer";
import shoppingCartReducer from "./shoppingCart.reducer";
export default combineReducers({
  getAllProductsReducer,
  getAllCategorysReducer,
  getAllBrandsReducer,
  getDetailProductReducer,
  userRegisterReducer,
  shoppingCartReducer
});
