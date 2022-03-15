import React, { useContext, useEffect, useState } from 'react';
import useStorage from '../../../../hooks/useStorage';
import {MyContext} from '../../../../App';
import './OrderList.css';

const OrderList = () => {

    const { clearTheCart } = useStorage();
    const [orderList, setOrderList] = useState([]);
    const { newUser, authLoading } = useContext(MyContext);

    useEffect(()=>{

        const URL = `https://safe-journey-64400.herokuapp.com/order-list/${newUser.email}`;
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            setOrderList(data);
            clearTheCart();
            authLoading(false)
        })

    }, [newUser.email])


    return (
        <>
            <div id="order__list">
                <div className="order__list--product table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">IMAGE</th>
                                <th scope="col">PRODUCT NAME</th>
                                <th scope="col">QUANTITY</th>
                                <th scope="col">TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderList.map(orderLi => 
                                    orderLi.orderProduct.map(orderItem=> <tr key={orderItem.id} className='order__list--details'>
                                        <td>
                                            <img className='cart__thumbnail' src={orderItem.images[0]} alt="Cart thumbnail" />
                                        </td>
                                        <td>
                                            <h3 className="product__sm--title">{orderItem.title}</h3>
                                        </td>
                                        <td>
                                            {orderItem.cartQty} QTY
                                        </td>
                                        <td>
                                            <span className="total__price">${(orderItem.salePrice * orderItem.cartQty).toFixed(2)}</span>
                                        </td>
                                    </tr>)
                                )
                            }
                            
                        </tbody>
                    </table>   
                </div>
            </div>
        </>
    );
};

export default OrderList;