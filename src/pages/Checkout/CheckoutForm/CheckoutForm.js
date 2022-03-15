import React, { useContext } from 'react';
import { MyContext } from '../../../App';
import './CheckoutForm.css';

const CheckoutForm = ({register}) => {

    const { newUser } = useContext(MyContext);

    return (
        <>
            <div className="form__grid">
                <div className="form__group">
                    <label htmlFor="firstName">First Name</label>
                    <input required type="text" className='form-control' id='firstName' {...register("firstName")} />
                </div>
                <div className="form__group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className='form-control' id='lastName' {...register("lastName")} />
                </div>
            </div>
            <div className="form__grid">
                <div className="form__group">
                    <label htmlFor="phone">Phone</label>
                    <input required type="tel" className='form-control' id='phone' {...register("phoneNumber")} />
                </div>
                <div className="form__group">
                    <label htmlFor="email">Email Address</label>
                    <input value={newUser.email} required type="email" readOnly className='form-control' id='email' {...register("emailAddress")} />
                </div>
            </div>
            <div className="form__full">
                <label htmlFor="address">Address</label>
                <input type="text" className='form-control' id='address' {...register("customerAddress")} />
            </div>
            <div className="form__full">
                <label htmlFor="town">Town/City</label>
                <input type="text" className='form-control' id='town' {...register("customerTown")} />
            </div>
            <div className="form__full">
                <label htmlFor="state">State / County</label>
                <input type="text" className='form-control' id='state' {...register("customerState")} />
            </div>
            <div className="form__full">
                <label htmlFor="postCode">Postal Code</label>
                <input type="text" className='form-control' id='postCode' {...register("customerPostCode")} />
            </div>
        </>
    );
};

export default CheckoutForm;