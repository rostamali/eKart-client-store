import React from 'react';

const DisplayOrderList = (props) => {

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
                <span className="total__price">${(props.product.salePrice * props.product.cartQty).toFixed(2)}</span>
                </td>
            </tr>
        </>
    );
};

export default DisplayOrderList;