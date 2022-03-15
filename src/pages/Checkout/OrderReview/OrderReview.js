import React, { useContext } from 'react';
import './OrderReview.css';
import {MyContext} from '../../../App';

const OrderReview = ({register}) => {

    const { cartTotal } = useContext(MyContext)

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
                            <td><b>Free Shipping</b></td>
                        </tr>
                        <tr>
                            <th scope="row">Subtotal</th>
                            <td><span className="cart__total-total-price">${cartTotal.toFixed(2)}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="payment__select">
                <h3 className="filter__title">Select Payment Method</h3>
                <div className="form__full">
                    <div className="payment__input--group">
                        <input checked {...register("selectPayment")} type="radio" id='stripe' value="stripe" />
                        <label htmlFor="stripe">
                            <span className="brand__checked--style"></span>
                            Stripe
                        </label>
                    </div>
                </div>
                <div className="form__full">
                    <div className="payment__input--group">
                        <input {...register("selectPayment")} type="radio" id='paypal' value="paypal" />
                        <label htmlFor="paypal">
                            <span className="brand__checked--style"></span>
                            PayPal
                        </label>
                    </div>
                </div>
            </div>
            <div className="place__order--wrapper">
                <input className='btn__primary btn__brand' type="submit" value="Place Order" />
            </div>
        </>
    );
};

export default OrderReview;