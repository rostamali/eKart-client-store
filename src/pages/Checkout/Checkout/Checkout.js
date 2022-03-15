import React, { useContext } from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import OrderReview from '../OrderReview/OrderReview';
import './Checkout.css';
import { useForm } from "react-hook-form";
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';
import { MyContext } from '../../../App';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

    const { register, handleSubmit } = useForm();
    const { cart, handleInsertId } = useContext(MyContext);
    const navigate = useNavigate();

    const onSubmit = data => {

        data.orderProduct = cart;

        fetch('https://safe-journey-64400.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                handleInsertId(data.insertedId);
                navigate('/order-success');
            }
        })
    };

    return (
        <>
            <Header></Header>
            <div id="checkout">
                <div className="container">
                    <div id="checkout__form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row gy-5 gx-5">
                                <div className="col-md-6">
                                    <h3 className="form__sm--title">Billing Details</h3>
                                    <CheckoutForm key={register} register={register}></CheckoutForm>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="form__sm--title">Order Details</h3>
                                    <OrderReview key={register} register={register}></OrderReview>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Checkout;