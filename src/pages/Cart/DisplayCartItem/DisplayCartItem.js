import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import './DisplayCartItem.css';

const DisplayCartItem = (props) => {

    const singleProductPrice = props.product.salePrice * props.product.cartQty;

    return (
        <>
            <tr className='cart__product--details'>
                <td>
                    <img className='cart__thumbnail' src={props.product.images[0]} alt="Cart thumbnail" />
                </td>
                <td>
                    <h3 className="product__sm--title">{props.product.title}</h3>
                </td>
                <td>
                    <span className="single__price">${props.product.salePrice.toFixed(2)}</span>
                </td>
                <td>
                    <div className="quantity__input--group">
                        <button onClick={()=>props.handleDecreaseCart(props.product)} className='btn__minus'><AiOutlineMinus/></button>
                        <span className="cart__qty">{props.product.cartQty}</span>
                        <button onClick={()=>props.handleAddCart(props.product)} className='btn__plus'><AiOutlinePlus/></button>
                    </div>
                </td>
                <td>
                    <button className="cart__close" onClick={()=>props.deleteCartItem(props.product)}>
                        <span><FaTimes/></span>
                    </button>
                </td>
                <td>
                <span className="total__price">${singleProductPrice.toFixed(2)}</span>
                </td>
            </tr>
        </>
    );
};

export default DisplayCartItem;