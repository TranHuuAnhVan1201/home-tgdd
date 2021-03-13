import * as actions from "../../../../actions/custommer/products/Product";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./checkout.scss";


function UpImages(props) {
  const listCarts = useSelector((state) => state.GetCarts);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [image, setImage] = useState("");
  const [state, setState] = useState({ list: [], path: [], listImage: [], productID: [] });
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    name: "",
    quantity_in_stock: 0,
    price: 0,
    description: "",
    category_id: 5,
    htx_id: 7,
    user_id: 12,
    isDeleted: 1,
    ID_Product: 300,
    id_Image: "",
    link_img:
      "https://res.cloudinary.com/cv-thav-herokuapp-com/image/upload/v1615482832/laptop/lwms3vb9kvur0juw4l8y.jpg"
  });
  const list = useSelector((state) => state.GetCarts);
  useEffect(() => {
    connectImgToProduct();
  }, [state.productID])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "laptop");
    setLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/cv-thav-herokuapp-com/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    setImage(file.secure_url);
    setLoading(false);
    let image = {
      type: "image",
      url: `${file.secure_url}`,
    };
    
    let aw = await axios
      .post(`http://localhost:4333/product/add`, image)
      .then(
        (res) => {
          console.log("Post Image success");
          setState({
            ...state,
            list: [...state.list, ...e.target.files],
            path: [...state.path, `${file.secure_url}`],
            listImage: [...state.listImage, `${res.data.image}`],
            userID: listCarts.userID,
          });

        },
        (err) => {
          console.log(err);
        }
    );
    // post product
  };



  // state
  listCarts.upload = state;
  inputs.link_img = listCarts.upload.path;
  // post
  
  const upProduct = async () => {
      await axios.post(`http://localhost:4333/product/adds`, inputs).then(
        (res) => {
          console.log("Post product success");
          setState({
            ...state,
            productID: [...state.productID, res.data.product],
          });
        
        },
        (err) => {
          console.log(err);
        }
      );
    
  };

console.log(state);

const connectImgToProduct = () => {
  if ((state.productID.length !== 0) && (state.productID !== [])) {
    state.listImage.forEach((element) => {
      let connect = {
        image_id: parseInt(element),
        product_image: state.productID,
        main_image: 1,
      };
      axios.post(`http://localhost:4333/product/connect`, connect).then(
        (res) => {
          console.log("data post connect img to product success");
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
};


  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    // product
    upProduct();
    // connect
    connectImgToProduct();
  }


  return (
    <div className="checkout up-img">
      <section>
        <form id="form" className="form" onSubmit={handleSubmit}>
          <div className="column about">
            <h2>Thông tin Sản phẩm</h2>

            <div className="form-control">
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                value={inputs.name}
                onChange={handleChange}
                placeholder="Nhập số name"
              />
              <small>Error message</small>
            </div>

            <div className="form-control">
              <label htmlFor="quantity_in_stock">quantity in Stock</label>
              <input
                type="number"
                name="quantity_in_stock"
                value={inputs.quantity_in_stock}
                onChange={handleChange}
                placeholder="Nhập địa chỉ chi tiết"
              />
              <small>Error message</small>
            </div>

            <div className="form-control">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                value={inputs.price}
                onChange={handleChange}
                placeholder="Nhập Giá"
              />
              <small>Error message</small>
            </div>

            <div className="form-control">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                name="description"
                value={inputs.description}
                onChange={handleChange}
                placeholder="Nhập mô tả"
              />
              <small>Error message</small>
            </div>

            <div className="form-control">
              <label htmlFor="category_id">Category ID</label>
              <input
                type="number"
                id="category_id"
                name="category_id"
                value={inputs.category_id}
                onChange={handleChange}
                placeholder="Nhập Category ID"
              />
              <small>Error message</small>
            </div>
            <div className="form-control">
              <label htmlFor="htx_id">HTX_ID</label>
              <input
                type="number"
                id="htx_id"
                name="htx_id"
                value={inputs.htx_id}
                onChange={handleChange}
                placeholder="Nhập Category ID"
              />
              <small>Error message</small>
            </div>
            <div className="form-control">
              <label htmlFor="user_id">USER_ID</label>
              <input
                type="number"
                id="user_id"
                name="user_id"
                value={inputs.user_id}
                onChange={handleChange}
                placeholder="Nhập Category ID"
              />
              <small>Error message</small>
            </div>
            <div className="form-control">
              <label htmlFor="isDeleted">Delete_ID</label>
              <input
                type="number"
                id="isDeleted"
                name="isDeleted"
                value={inputs.isDeleted}
                onChange={handleChange}
                placeholder="Nhập isDeleted"
              />
              <small>Error message</small>
            </div>
            <div className="form-control">
              <label htmlFor="ID_Product">ID_Product</label>
              <input
                type="number"
                id="ID_Product"
                name="ID_Product"
                value={inputs.ID_Product}
                onChange={handleChange}
                placeholder="Nhập ID_Product"
              />
              <small>Error message</small>
            </div>
            <div className="form-control">
              <label htmlFor="id_Image">ID_IMAGE</label>
              <input
                type="text"
                id="id_Image"
                name="id_Image"
                value={inputs.id_Image}
                onChange={handleChange}
                placeholder="Nhập Category ID"
              />
              <small>Error message</small>
            </div>
          </div>

          <div className="column dividing">
            <input
              type="file"
              name="file"
              multiple
              placeholder="Upload an Image !"
              onChange={uploadImage}
            />

            <button>Post img</button>
            <h3>Loadding</h3>

            {loading ? (
              <h3>Loadding ...</h3>
            ) : (
              <img
                src={`${image}`}
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                }}
                alt={"test"}
              />
            )}
            <h3>album</h3>
            <div
              style={{
                display: "flex",
                maxWidth: "1250px",
                margin: "0 auto",
                flexWrap: "wrap",
              }}
            >
              {listCarts.upload.path
                ? listCarts.upload.path.map((value, key) => {
                    return (
                      <li style={{ padding: "12px 12px 0 0" }} key={key}>
                        <img
                          src={value}
                          style={{
                            width: "300px",
                            height: "300px",
                            objectFit: "cover",
                            display: "block",
                          }}
                          alt="123"
                        ></img>
                      </li>
                    );
                  })
                : null}
            </div>
          </div>
          <div className="column order">
            <h2>Upload</h2>

            <button className="submit order" type="submit">
              Upload Product
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default UpImages;
