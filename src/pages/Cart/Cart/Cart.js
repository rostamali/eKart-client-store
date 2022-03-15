import React, { useContext } from 'react';
import { MyContext } from '../../../App';
import DisplayCartItem from '../DisplayCartItem/DisplayCartItem';
import './Cart.css';
import shoppingBag from "../../../images/cart-bag.png";
import CartTotal from '../CartTotal/CartTotal';
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';

const Cart = () => {

    const { cart, handleAddCart, handleDecreaseCart, deleteCartItem } = useContext(MyContext);
    const checkCart = cart.length === 0;

    return (
        <>
            <Header></Header>
            <div id="cart">
                <div className="container">
                    {
                        !checkCart ?
                        <>
                            <div className="cart__products table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">IMAGE</th>
                                            <th scope="col">PRODUCT NAME</th>
                                            <th scope="col">PRICE</th>
                                            <th scope="col">QUANTITY</th>
                                            <th scope="col">ACTION</th>
                                            <th scope="col">TOTAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cart.map(cartItem => <DisplayCartItem
                                                key={cartItem.id}
                                                product={cartItem}
                                                handleDecreaseCart={handleDecreaseCart}
                                                handleAddCart={handleAddCart}
                                                deleteCartItem={deleteCartItem}
                                            ></DisplayCartItem>)
                                        }
                                    </tbody>
                                </table>   
                            </div>
                            <div className="cart__bottom">
                                <div className="row">
                                    <div className="col-md-6 col-12"></div>
                                    <div className="col-md-6 col-12">
                                        <CartTotal></CartTotal>
                                    </div>
                                </div>
                                <div className="cart__action--btn">
                                    <a href="/shop" className="btn__primary btn__brand">continue shopping</a>
                                    <a href="/checkout" className="btn__primary btn__brand">check out</a>
                                </div>
                            </div>
                        </>
                        :
                        <div className='cart__empty--notification'>
                            <img src={shoppingBag} alt="shoppingBag" />
                            <p className='empty__text'> 
                                Your shopping bag is empty.
                                <br />
                                Start shopping
                            </p>
                        </div>
                    }
                    
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Cart;