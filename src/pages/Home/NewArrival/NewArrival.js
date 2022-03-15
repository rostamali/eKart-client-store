import React, { useContext, useEffect, useState } from 'react';
import usePreview from '../../../hooks/usePreview';
import './NewArrival.css';
import { FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import bgImg from '../../../images/bg-image.jpg';
import {MyContext} from '../../../App';

const NewArrival = () => {

    const { handleImage, preview } = usePreview();
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => {
        setData(data)
        })
    },[])

    const FrontImage = ({product}) =>{
            
        const specificProduct = preview?.find(ci => ci.id === product.id);

        return <img className='img-fluid' src={product.images[specificProduct.preview]} alt={specificProduct.title} />;
    }
    const BackImage = ({product}) =>{
            
        const specificProduct = preview?.find(ci => ci.id === product.id);
        
        // if(specificProduct.preview === product.images.length - 1){
        //     return <img className='img-fluid' src={product.images[specificProduct.preview - 1]} alt={specificProduct.title} />;
        // }else{
        //     return <img className='img-fluid' src={product.images[specificProduct.preview + 1]} alt={specificProduct.title} />;
        // }
        return <img className='img-fluid' src={product.images[specificProduct.preview]} alt={specificProduct.title} />;
    }

    const { handleAddCart, cart, setQuickViewShow, handleQuickViewData } = useContext(MyContext);

    return (
        <>
            <div id="new__arrival">
                <div className="container">
                    <div className="section__bg" style={{
                        backgroundImage: `url(${bgImg})`
                    }}>
                        <div className="header__section">
                            <h4 className="section__subtitle">Exclusive Products</h4>
                            <h2 className="section__title">SPECIAL PRODUCTS</h2>
                            <p className="section__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                        <div className="new__arrival--products">
                            <div className="row gy-4 gx-4">
                                {
                                    data.map(product => <div key={product.id} className="col-lg-3 col-md-4 col-6">
                                        <div className="product__box">
                                            <div className="product__image--wrapper">
                                                <div className="front__image">
                                                    <FrontImage product={product}/>
                                                </div>
                                                <div className="back__image">
                                                    <BackImage product={product}/>
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
                                                    <button 
                                                    disabled={cart.find(item => item.id === product.id)}
                                                    onClick={()=>handleAddCart(product)} title={`${cart.find(item => item.id === product.id) ? "Already in Cart" : "Add to Cart"}`} >
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
                                    </div>)
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewArrival;