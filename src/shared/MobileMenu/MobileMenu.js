import React, { useContext } from 'react';
import { FaRegUser, FaRegHeart } from 'react-icons/fa';
import './MobileMenu.css';
import { BsChatDots } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { BiStore } from 'react-icons/bi';
import {MyContext} from '../../App';

const MobileMenu = () => {

    const { cart } = useContext(MyContext)

    return (
        <>
            <div id="mobile__menu">
                <div className="menu__icon--wrapper">
                    <a href="/shop" className="mobile__menu--link"><BiStore/></a>
                    <a href="/" className="mobile__menu--link"><FaRegHeart/></a>
                    <a href="/cart" className="mobile__menu--link mobile__cart--count-wrapper">
                        <FiShoppingCart/>
                        <span className="mobile__cart--count">{cart.length}</span>
                    </a>
                    <a href="dashboard/profile" className="mobile__menu--link"><FaRegUser/></a>
                    <a href="/" className="mobile__menu--link"><BsChatDots/></a>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;