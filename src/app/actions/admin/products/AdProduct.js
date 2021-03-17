import * as AdProduct from "../../../constants/ActionType";

export const getProductDatabase = () => {
  return {
    type: AdProduct.GETPRODUCT_DATABASE,
  };
};
export const getProductEdit = (payload) => {
  return {
    type: AdProduct.PRODUCT_EDIT,
    payload
  };
};