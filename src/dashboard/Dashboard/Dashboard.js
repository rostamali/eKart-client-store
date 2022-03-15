import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardMenu from '../DashboardMenu/DashboardMenu';
import './Dashboard.css';
import {MyContext} from '../../App';
import { MdOutlineLogout } from 'react-icons/md';
import useFirebase from '../../hooks/useFirebase';

const Dashboard = () => {

    const { newUser } = useContext(MyContext);
    const { handleSignoutUser } = useFirebase();

    return (
        <>
            <div id="dashboard">
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-12">
                        <DashboardMenu></DashboardMenu>
                    </div>
                    <div className="col-lg-10 col-md-9 col-12">
                        <div className="dashboard__top--bar">
                            <h5 className="user__name">{newUser.displayName}</h5> 
                            <button onClick={handleSignoutUser} className='btn__primary btn__brand'>Logout <MdOutlineLogout/></button>   
                        </div>
                        <div className="dashboard__container">
                            <Outlet></Outlet>    
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;