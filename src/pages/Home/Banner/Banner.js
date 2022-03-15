import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import slide1 from '../../../images/slide-1.jpg';
import slide2 from '../../../images/slide-2.jpg';
import './Banner.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Banner = () => {

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    return (
        <>
            <div id="banner">
                <button ref={navigationPrevRef} className="swiper__arrow arrow__prev"><FaArrowLeft/></button>          
                <div className="banner__slider">
                    <Swiper
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        className="mySwiper"
                        modules={[Navigation, Autoplay]}
                        autoplay={true}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                    >
                        <SwiperSlide className="banner__bg" style={{
                            backgroundImage: `url(${slide1})`
                        }}>
                            <div className="banner__text">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <h4 className="banner__subtitle">welcome to fashion</h4>
                                            <h1 className="banner__title">welcome to fashion</h1>
                                            <button className="btn__primary btn__brand">Shop Now</button>
                                        </div>
                                        <div className="col-lg-6 col-12 banner__hide"></div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="banner__bg" style={{
                            backgroundImage: `url(${slide2})`
                        }}>
                            <div className="banner__text">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6 col-12 banner__hide"></div>
                                        <div className="col-lg-6 col-12">
                                            <h4 className="banner__subtitle">welcome to fashion</h4>
                                            <h1 className="banner__title">welcome to fashion</h1>
                                            <button className="btn__primary btn__brand">Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <button ref={navigationNextRef} className="swiper__arrow arrow__next"><FaArrowRight/></button>
            </div>
        </>
    );
};

export default Banner;