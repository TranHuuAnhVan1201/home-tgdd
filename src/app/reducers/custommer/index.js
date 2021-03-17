import { combineReducers } from "redux";
import IDName from "./product/Id";
import GetCarts from "./product/GetCarts";
import GetProduct from "./product/GetProduct";
import GetUser from "./../admin/user/getUser";
import GetProductDatabase from "./product/GetProductDatabase";
import LoadProduct from "./product/LoadProduct";
const appReducer = combineReducers({
  IDName,
  GetProduct,
  GetCarts,
  GetUser,
  GetProductDatabase,
  LoadProduct,
});

export default appReducer;
