import * as types from "./../../../constants/ActionType";
var initialState = [];
// const findIndex = (products, id) => {
//     var result = -1;
//     products.forEach((product, index) => {
//         if (product.id === id) {
//             result = index;
//         }
//     });
//     return result;
// }
const products = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_PRODUCT_LIST:
      state = action.dataProduct.result;
      return [...state];
    default:
      return [...state];
  }
};
export default products;
