import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./../product-default/ProductDefault.scss";
import * as actions from "../../../../../../../actions/custommer/products/Product";
import axios from "axios";

function convertToSlug(slug) {
  return slug
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

function ProductDatabase(props) {
  const dispatch = useDispatch();
  const [database, setDatabase] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const api = axios.create({
        baseURL: `http://localhost:4333/product/`,
      });
      let res = await api
        .get()
        .then((res) => {
          console.log(res.data.result);
          setDatabase(res.data.result);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getProduct();
  }, []);
  console.log(database);
  const addProduct = (item) => {
    dispatch(actions.addProductToCart(item));
    console.log(item);
  };
  const getIDName = (item) => {
    dispatch(actions.IDName(item));
  };

  return (
    <div className="home-product">
      <div className="product-top">
        <section className="ProductDatabasesale product-star">
          <div
            id="owl-promo"
            className="owl-promo owl-carousel homepromo item2020  owl-theme"
          >
            <div className="owl-wrapper-outer">
              <div
                className="owl-warpper"
                style={{
                  left: 0,
                  display: "block",
                  transition: "all 0ms ease 0s",
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              >
                {database.map((value, key) => {
                  if (database) {
                    return (
                      <li
                        className={"owl-item" + (value.id === 1 ? " star" : "")}
                        id={value.id}
                        key={key}
                      >
                        <div className="item">
                          <Link
                            to={
                              "/product-detail/" +
                              convertToSlug(value.name) +
                              "." +
                              value.id
                            }
                            onClick={() => getIDName(value)}
                            className="vertion2020 large"
                          >
                            <div class="label-top">
                              <div className="heightlabel">Trả góp 0%</div>

                              <Link to="/carts" className="item-carts">
                                <i
                                  className="fas fa-cart-plus"
                                  onClick={() => addProduct(value)}
                                ></i>
                              </Link>
                            </div>

                            <img
                              src={value.url}
                              className="img-default"
                              alt={value.picAlt}
                            />
                            <div className="text-star">
                              <div>
                                <div className="result-label sale">
                                  <i className="roundy">%</i>
                                  <span className="text">{"Giảm sốc"}</span>
                                </div>
                                <div className="heightlabel">Trả góp 0%</div>
                              </div>
                              <label className="preorder">
                                {" "}
                                {value.preorder}
                              </label>
                              <h3>{value.name}</h3>
                              <div className="props">
                                <span className="dotted  ">
                                  Ram {value.ram} GB
                                </span>
                                <span className="dotted  ">
                                  Ssd {value.ssd} GB
                                </span>
                                <span className="dotted  ">
                                  Core {value.core}
                                </span>
                                <span className="dotted  ">
                                  Pin {value.pin}H
                                </span>
                              </div>
                              <h6 className="textkm">{value.textkm} </h6>
                              <div className="price">
                                <strong>{value.price}đ</strong>
                                <span>{value.priceSale}đ</span>
                                <i>{5}%</i>
                              </div>
                              <div className="promo noimage">
                                <p>{value.textBouns}</p>
                              </div>
                              <div className="ratingresult">
                                <i className="icontgdd-ystar" />
                                <i className="icontgdd-ystar" />
                                <i className="icontgdd-ystar" />
                                <i className="icontgdd-ystar" />
                                <i className="icontgdd-ystar" />
                                <span>{value.review} đánh giá</span>
                              </div>
                              <input
                                className="spInfo"
                                data-brand="Samsung"
                                data-cat="Điện thoại"
                                data-price={23490000}
                                data-pro={3}
                                data-version
                                id="data220833"
                                name="data220833"
                                type="hidden"
                                defaultValue={220833}
                              />
                            </div>
                          </Link>
                        </div>
                      </li>
                    );
                  }
                })}
              </div>
              <div className="clr" />
              <div className="owl-controls clickable">
                <div className="owl-buttons">
                  <div className="owl-prev">&lt;</div>
                  <div className="owl-next">&gt;</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductDatabase;
