import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import './PayPal.scss';
function PayPal(props) {
    const listCarts = useSelector(state => state.GetCarts);
    const paypal = useRef();
    useEffect(() => {
        window.paypal.Buttons({

            //b2 create order.
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Thanh toán",
                            amount: {
                                value: parseFloat(listCarts.totalPrice / 230000).toFixed(2)
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
            },
            onError: (err) => {
                console.log(err);
            }
        }).render(paypal.current)
    },[])
    return (
        <div className="paypal-av">
            <div ref={paypal}></div>
        </div>
    );
}

export default PayPal;