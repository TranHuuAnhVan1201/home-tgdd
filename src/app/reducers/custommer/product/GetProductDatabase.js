import axios from "axios";
import * as types from "../../../constants/ActionType";

var init = { numberCart: 0, edit: {} };

const getProduct = async () => {
  const api = axios.create({
    baseURL: `http://localhost:4333/product`,
  });
  let res = await api
    .get("/")
    .then((res) => {
      init.data = res.data.result;
    })
    .catch((err) => {
      console.log(err);
    });
};
getProduct();

var myReducer = (state = init, action) => {
  console.log(state);
  switch (action.type) {
    case types.GETPRODUCT_DATABASE:
      return state;
    case types.PRODUCT_EDIT:
      
      let edit = {
        id: action.payload.id,
        name: action.payload.name,
        quantity_in_stock: action.payload.quantity_in_stock,
        price: action.payload.price,
        description: action.payload.description,
        category_id: action.payload.category_id,
        htx_id: action.payload.htx_id,
        user_id: action.payload.user_id,
        isDeleted: action.payload.isDeleted,
        ID_Product: action.payload.ID_Product,
        id_Image: action.payload.id_Image,
        link_img: action.payload.link_img,
      };
      state.edit = edit; 

      return {
        ...state,
        numberCart: 1,
      };
    default:
      return state;
  }
};
export default myReducer;
