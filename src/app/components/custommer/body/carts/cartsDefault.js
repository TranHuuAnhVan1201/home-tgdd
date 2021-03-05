import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import './carts.scss';
import *as actions from '../../../../actions/custommer/products/Product';
import PayPal from '../paypal/PayPal';
import jwtDecode from 'jwt-decode';

function CartsDefault(props) {
    const listCarts = useSelector(state => state.GetCarts);
    const [checkout, setCheckOut] = useState(false);
    const [role, setRole] = useState(null);
    let history = useHistory();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            var decoded = jwtDecode(localStorage.getItem("token"));
            setRole(decoded.role);            
        }
    }, []);
    const dispatch = useDispatch();
    const deleteProductInCart = (item) => {
        dispatch(actions.deleteProductInCart(item));
    }
    const Increase_Quantity = (increase) => {
        dispatch(actions.getIncrease_Quantity(increase));
    }
    const Decrease_Quantity = (decrease) => {
        dispatch(actions.getDecrease_Quantity(decrease));
    }
    const handlePayPal = () => {
        if (role) {
            setCheckOut(true);
            history.push('/paypal');
        }
        else {
            history.push("/login");
        }
    }
    const removedot = (dot) => {
        return dot.replace(/\./g, "");
    }

    const formatVND = (str) => {
        if (typeof (str) !== "string") {
            let toStr = String(str);
            return toStr.split('').reverse().reduce((prev, next, index) => {
                return ((index % 3) ? next : (next + '.')) + prev
            })
        }
    }

    return (
        <section>
            <div className="carts">
                <h2 className="text-center">Giỏ hàng của bạn</h2>
                <div className="cart-content">
                    <table>
                        <thead>
                            <tr>
                                <th>Ảnh</th>
                                <th>Sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Giá </th>
                                <th>Thành tiền</th>
                                <th>Xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listCarts.items.map((value, key) => {
                                    return (

                                        <tr key={key}>
                                            <td><img src={value.url} alt={123}></img>
                                            </td>
                                            <td>{value.title}</td>
                                            <td className="td-group">
                                                <span onClick={() => Decrease_Quantity(key)}>-</span>
                                                <span>{value.quantity}</span>
                                                <span onClick={() => Increase_Quantity(key)}>+</span>
                                            </td>
                                            <td>{value.price} đ</td>
                                            <td>{formatVND(parseInt(removedot(value.price)) * (value.quantity || 1))} đ</td>
                                            <td onClick={() => deleteProductInCart(key)}>xóa</td>

                                        </tr>
                                    );

                                })

                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={4}>Tổng cộng: </td>

                                <td>{formatVND(listCarts.totalPrice)} đ</td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="btn-carts">
                    <Link to="/" className="btn-back link">
                        <i className="fas fa-long-arrow-alt-left"></i>Tiếp tục mua sắm
                    </Link>
                    <Link to="/checkout" className="btn-checkout link">
                        <i className="fas fa-long-arrow-alt-right"></i> Thanh toán
                    </Link>

                    {
                        (checkout) ? (<PayPal />) : (<button className="btn-checkout link" onClick={handlePayPal}>CheckOut Paypal</button>)
                    }



                </div>
            </div>
        </section>


    );
}

export default CartsDefault;