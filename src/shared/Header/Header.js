import React, { useContext, useEffect, useState } from 'react';
import logo from '../../images/eKart-logo.png';
import { RiShoppingBasketLine } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import './Header.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import MiniCart from '../MiniCart/MiniCart';
import { MyContext } from '../../App';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {

    const [showMiniCart, setShowMiniCart] = useState(false);
    const handleShowMiniCart = () => setShowMiniCart(true);
    const handleCloseMiniCart = () => setShowMiniCart(false);

    const { cart, newUser } = useContext(MyContext);

    const [stickyNav, setStickyNav] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            if(window.scrollY >= 50){
                setStickyNav(true);
            }else{
                setStickyNav(false);
            }
        });
    });
    
    const { handleSignoutUser } = useFirebase();
    

    return (
        <>
            <div id="header">
                <div className="header__top">
                    <div className="container">
                        <span className="header__top--text"><FaPhoneAlt/> Call Us: 123 - 456 - 7890</span>
                        <span className="header__top--text"><MdOutlineAlternateEmail/> Email Us: Support@Fiot.Com</span>
                    </div>
                </div>
                <div className={`header__menu ${stickyNav ? 'sticky__nav':''}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-12">
                                <div className="header__middle">
                                    <a href="/" className='brand__logo--wrapper'>
                                        <img src={logo} alt="Website logo" className="brand__logo" />
                                    </a>
                                    <div className="cart__mobile--btn">
                                        <button onClick={handleShowMiniCart} className='nav__btn'><RiShoppingBasketLine/>
                                            <span className="cart__count">{cart.length}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 col-12">
                                <div className="header__nav--menu">
                                    <div className="nav__menu">
                                        <a href="/" className='nav__link'>Home</a>
                                        <a href="/shop" className='nav__link'>Shop</a>
                                        {
                                            newUser.email ? 
                                            <button className='logout__btn' onClick={handleSignoutUser}>Logout</button>
                                            :
                                            <a href="/login" className='nav__link'>Login</a>
                                        }
                                        <a href="/dashboard/profile">
                                            <button className='nav__btn'><AiOutlineUser/></button>
                                        </a>
                                        <button onClick={handleShowMiniCart} className='nav__btn'><RiShoppingBasketLine/>
                                            <span className="cart__count">{cart.length}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MiniCart showMiniCart={showMiniCart} handleCloseMiniCart={handleCloseMiniCart}></MiniCart>
        </>
    );
};

export default Header;