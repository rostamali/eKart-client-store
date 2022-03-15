import React, { useContext } from 'react';
import './OrderSuccess.css';
import { FaCheck } from 'react-icons/fa';
import { MyContext } from '../../../App';
import OrderDetails from '../OrderDetails/OrderDetails';
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';

const OrderSuccess = () => {

    const { cart } = useContext(MyContext);

    return (
        <>
            <Header></Header>
                <div id="order__success">
                    <div className="container">
                        <div className="order__success--header">
                            <span className="check__icon"><FaCheck/></span>
                            <h2 className="thanks__msg">THANK YOU</h2>
                            <p className="order__success--msg">
                            Payment is successfully processsed and your order is on the way
                            </p>
                            <p className="order__success--msg">
                            Transaction ID:267676GHERT105467
                            </p>
                        </div>

                        <div className="order__details--wrapper">
                            <div className="cart__products table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">IMAGE</th>
                                            <th scope="col">PRODUCT NAME</th>
                                            <th scope="col">QUANTITY</th>
                                            <th scope="col">TOTAL</th>
                                        </tr>
                                    </thead>
                                    <tbody className='order__details'>
                                        {
                                            cart.map(cartItem => <OrderDetails
                                                key={cartItem.id}
                                                product={cartItem}
                                            ></OrderDetails>)
                                        }
                                    </tbody>
                                </table>   
                            </div>
                        </div>
                        <div className="order__success--bottom pt-3 text-end">
                            <a href="/dashboard/profile" className="btn__primary btn__brand">My Account</a>
                        </div>
                    </div>
                </div>
            <Footer></Footer>
        </>
    );
};

export default OrderSuccess;