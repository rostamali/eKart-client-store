import React from 'react';
import './Footer.css';
import brandLogo from '../../images/eKart-logo.png';
import { FaFacebookF, FaGooglePlusG, FaTwitter, FaInstagram, FaRss, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';


const Footer = () => {
    return (
        <>
            <div id="footer">
                <div className="container">
                    <div className="newsletter">
                        <div className="row gx-5 gy-4">
                            <div className="col-lg-6 col-12">
                                <h4 className="newsletter__title">KNOW IT ALL FIRST!</h4>
                                <p className="newsletter__subtitle text__muted">Never Miss Anything From Multikart By Signing Up To Our Newsletter.</p>
                            </div>
                            <div className="col-lg-6 col-12">
                                <form className='subscribe__form'>
                                    <div className="subscribe__form--group">
                                        <input placeholder='Enter your email' type="text" className='form-control form-control' />
                                        <button className='btn__primary subscribe__btn'>subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <hr className="divider" />
                    <div className="footer__bottom">
                        <div className="row gy-4">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <img src={brandLogo} alt="Brand logo" className="brand__logo" />
                                <p className="text__muted mt-3 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                                <div className="footer__social--menu">
                                    <a className="footer__social--menu-link" href="https://www.facebook.com/GoWithRostam/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                                    <a target="_blank" rel="noreferrer" className="footer__social--menu-link" href="mailto:rostamsardar446@gmail.com"><FaGooglePlusG className='google__icon' /></a>
                                    <a target="_blank" className="footer__social--menu-link" href="/"><FaTwitter /></a>
                                    <a target="_blank" className="footer__social--menu-link" href="/"><FaInstagram /></a>
                                    <a className="footer__social--menu-link" href="/"><FaRss /></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="footer__pading-box">
                                    <h4 className="footer__title">About Us</h4>
                                    <ul className="footer__menu">
                                        <li><a href="/" className="footer__link">Careers</a></li>
                                        <li><a href="/" className="footer__link">Our Stores</a></li>
                                        <li><a href="/" className="footer__link">Our Cares</a></li>
                                        <li><a href="/" className="footer__link">Featured</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <h4 className="footer__title">Usefull Links</h4>
                                <ul className="footer__menu">
                                    <li><a href="/" className="footer__link">Shipping & Return</a></li>
                                    <li><a href="/" className="footer__link">Secure Shopping</a></li>
                                    <li><a href="/" className="footer__link">Affiliates</a></li>
                                    <li><a href="/" className="footer__link">Contacts</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                <h4 className="footer__title">STORE INFORMATION</h4>
                                <div className="store__info">
                                    <div className="store__info--items">
                                        <div className="store__info--icon">
                                            <FaMapMarkerAlt/>
                                        </div>
                                        <div className="store__info--text">
                                            Court station, Horogram notun para, Rajshahi, Bangladesh
                                        </div>
                                    </div>
                                    <div className="store__info--items">
                                        <div className="store__info--icon">
                                            <FaPhoneAlt/>
                                        </div>
                                        <div className="store__info--text">
                                            Call Us: <a href="tel:01321070987">+880 132-1070-987</a>
                                        </div>
                                    </div>
                                    <div className="store__info--items">
                                        <div className="store__info--icon">
                                            <MdOutlineAlternateEmail/>
                                        </div>
                                        <div className="store__info--text">
                                            Email Us: <a href="mailto:rostamsardar446@gmail.com">rostamsardar446@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                <p>&copy; 2022 Copyright all right reserved by Rostam</p>
            </div>
        </>
    );
};

export default Footer;