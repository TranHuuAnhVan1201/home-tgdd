import axios from "axios";
import * as types from "../../../constants/ActionType";

var productDatabase = [];
const getProduct = async () => {
  const api = axios.create({
    baseURL: `http://localhost:4333/product/`,
  });
  let res = await api
    .get()
    .then((res) => {
      console.log(res);
      console.log(productDatabase);
        productDatabase = res.data.result;
        return productDatabase;
    })
    .catch((err) => {
      console.log(err);
    });
};
getProduct();

var myReducer = (state = productDatabase, action) => {
  switch (action.type) {
      case types.GETPRODUCTTEST:
          getProduct();
      return state;
    default:
      return state;
  }
};
export default myReducer;
