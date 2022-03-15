import React, { useContext, useEffect, useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper";
import { FaHeart, FaShoppingCart, FaSearch, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import usePreview from '../../../hooks/usePreview';
import './Offer.css';
import bgImg from '../../../images/bg-image.jpg';
import { MyContext } from '../../../App';

const Offer = () => {

    const [offerData, setOfferData] = useState([]);
    const { handleImage, preview } = usePreview();

    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => {
            setOfferData(data)
        })
    },[])

    const OfferFrontImage = ({product}) =>{
            
        const specificProduct = preview?.find(ci => ci.id === product.id);

        return <img className='img-fluid' src={product.images[specificProduct.preview]} alt={specificProduct.title} />;
    }


    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

    const { cart, handleAddCart, setQuickViewShow, handleQuickViewData } = useContext(MyContext);

    return (
        <>
            <div id="offer">
                <div className="container">
                    <div className="section__bg bg__translate" style={{
                        backgroundImage: `url(${bgImg})`
                    }}>
                        <div className="header__section">
                            <h4 className="section__subtitle">Special Offer</h4>
                            <h2 className="section__title">TOP COLLECTION</h2>
                            <p className="section__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>

                        <div className="slider__btn">
                            <button ref={navigationPrevRef} className="swiper__arrow--prev"><FaArrowLeft/></button>
                            <button ref={navigationNextRef} className="swiper__arrow--next"><FaArrowRight/></button>
                        </div>
                        
                        <div className="offer__slider">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                pagination={{
                                clickable: true,
                                }}
                                breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                                }}
                                className="mySwiper"
                                modules={[Navigation, Pagination, Autoplay]}
                                autoplay={true}
                                navigation={{
                                    prevEl: navigationPrevRef.current,
                                    nextEl: navigationNextRef.current,
                                }}
                            >

                                {
                                    offerData.map(product => <SwiperSlide key={product.id}>
                                        <div className="product__box">
                                            <div className="product__image--wrapper">
                                                <div className="front__image">
                                                    <OfferFrontImage product={product}/>
                                                </div>
                                                <div className="product__thumb--list">
                                                    {
                                                        product.images.map((image, index) => <div key={index}
                                                        className={`product__thumb--image ${ preview.find(ci => ci.id === product.id && ci.preview === index ) ? 'active': ''}`}>
                                                            <img onClick={()=>handleImage(index, product)}
                                                            src={image} alt="" />
                                                        </div> )
                                                    }
                                                </div>
                                                <div className="product__action--btn">
                                                    <button onClick={()=>handleAddCart(product)} title={`${cart.find(item => item.id === product.id) ? "Already in Cart" : "Add to Cart"}`}>
                                                        <FaShoppingCart/>
                                                    </button>
                                                    <button title="Add to Wishlist">
                                                        <FaHeart/>
                                                    </button>
                                                    <button onClick={()=>[handleQuickViewData(product), setQuickViewShow(true)]} title="Quick View">
                                                        <FaSearch/>
                                                    </button>
                                                </div>
                                            </div>
                                            <h3 className="product__sm--title">{product.title}</h3>
                                            <Rate value={4} disabled/>
                                            <div className="product__box--bottom">
                                                <div className="color__variant">
                                                    {
                                                        product.colors.map((color, index) =><span key={index} style={{
                                                            backgroundColor :`${color}`,
                                                            border: `0.5px solid ${color === 'white' ? "#aaa" : color}`
                                                        }} onClick={()=>handleImage(index, product)} className={`${color} ${ preview.find(ci => ci.id === product.id && ci.preview === index ) ? 'active': ''}`}></span>)
                                                    }
                                                </div>
                                                <div className="product__price--info">
                                                    <span className="sale__price">${product.salePrice.toFixed(2)}</span>
                                                    <span className="regular__price"><del>${product.regularPrice.toFixed(2)}</del></span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>)
                                }

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Offer;