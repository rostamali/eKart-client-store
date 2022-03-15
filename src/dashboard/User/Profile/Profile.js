import React, { useContext } from 'react';
import userImg from '../../../images/ralph.png';
import {MyContext} from '../../../App';
import './Profile.css';

const Profile = () => {

    const { newUser } = useContext(MyContext)

    return (
        <>
            <div id="profile">
                <div className="user__info--wrapper mt__md">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="user__login">
                                <div className="user__thumbnail">
                                    <img src={userImg} alt="User" />
                                </div>
                                <div className="user__info">
                                    <h3 className="user__name">{newUser.displayName}</h3>
                                    <h4 className="user__orderinfo--text">{newUser.email}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 order__info--wrapper">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="user__orderinfo">
                                        <h3 className="user__orderinfo--number">10</h3>
                                        <h4 className="user__orderinfo--text">All Orders</h4>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="user__orderinfo">
                                        <h3 className="user__orderinfo--number">$450.00</h3>
                                        <h4 className="user__orderinfo--text">Total Cost</h4>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="user__orderinfo">
                                        <h3 className="user__orderinfo--number">5</h3>
                                        <h4 className="user__orderinfo--text">Wishlist</h4>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="user__orderinfo">
                                        <h3 className="user__orderinfo--number">16</h3>
                                        <h4 className="user__orderinfo--text">All Orders</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;