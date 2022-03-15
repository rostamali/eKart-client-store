import React, { useContext } from 'react';
import { MyContext } from '../../../App';
import './CartTotal.css';

const CartTotal = () => {

    const { cartTotal } = useContext(MyContext);

    return (
        <>
            <div id="cart__total--table">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th colSpan="2">Cart Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Total Price</th>
                            <td><span className="cart__total-total-price">${cartTotal.toFixed(2)}</span></td>
                        </tr>
                        <tr>
                            <th scope="row">Shipping</th>
                            <td>Free Shipping</td>
                        </tr>
                        <tr>
                            <th scope="row">Subtotal</th>
                            <td><span className="cart__total-total-price">${cartTotal.toFixed(2)}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default CartTotal;