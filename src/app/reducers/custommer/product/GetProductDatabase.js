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
      productDatabase = res.data.result;
      return productDatabase;
    })
    .catch((err) => {
      console.log(err);
    });
};


var myReducer = (state = productDatabase, action) => {
  switch (action.type) {
    case types.GETPRODUCTTEST:
      return state;
    default:
      return state;
  }
};
export default myReducer;
