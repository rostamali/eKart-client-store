import React from 'react';
import dashboardLogo from '../../images/eKart-logo.png';
import './DashboardMenu.css';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const DashboardMenu = () => {


    return (
        <>
            <div className="dashboard__menu--wrapper">
                <a href="/">
                    <img src={dashboardLogo} alt="Brand logo" className="dashboard__logo" />    
                </a>
                <div className="dashboard__menu"> 
                    <NavLink to="/dashboard/profile" className="dashboard__menu--link">
                        <FaRegUser/> Profile
                    </NavLink> 
                    <NavLink to="/dashboard/order-list" className="dashboard__menu--link">
                        <AiOutlineUnorderedList/> Order List
                    </NavLink> 
                </div>
            </div>
        </>
    );
};

export default DashboardMenu;