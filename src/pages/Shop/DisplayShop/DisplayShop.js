import Rate from 'rc-rate';
import React from 'react';
import { FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';

const DisplayShop = (props) => {

    const ShopFrontImage = ({product}) =>{
            
        const specificProduct = props.preview.find(ci => ci.id === product.id);

        return <img className='img-fluid' src={product.images[specificProduct.preview]} alt={specificProduct.title} />;
    }
    const ShopBackImage = ({product}) =>{
            
        const specificProduct = props.preview.find(ci => ci.id === product.id);

        return <img className='img-fluid' src={product.images[specificProduct.preview]} alt={specificProduct.title} />;
    }

    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                <div className="product__box">
                    <div className="product__image--wrapper">
                        <div className="front__image">
                            <ShopFrontImage product={props.product}/>
                        </div>
                        
                        <div className="back__image">
                            <ShopBackImage product={props.product}/>
                        </div>
                        <div className="product__thumb--list">
                            {
                                props.product.images.map((image, index) => <div key={index}
                                className={`product__thumb--image ${ props.preview.find(ci => ci.id === props.product.id && ci.preview === index ) ? 'active': ''}`}>
                                    <img onClick={()=>props.handleImage(index, props.product)}
                                    src={image} alt="" />
                                </div> )
                            }
                        </div>
                        <div className="product__action--btn">
                            <button 
                            disabled={props.cart.find(item => item.id === props.product.id)}
                            onClick={()=>props.handleAddCart(props.product)} title="Add to Cart">
                                <FaShoppingCart/>
                            </button>
                            <button title="Add to Wishlist">
                                <FaHeart/>
                            </button>
                            <button onClick={()=>[props.handleQuickViewData(props.product), props.setQuickViewShow(true)]} title="Quick View">
                                <FaSearch/>
                            </button>
                        </div>
                    </div>
                    <h3 className="product__sm--title">{props.product.title}</h3>
                    <Rate value={4} disabled/>
                    <div className="product__box--bottom">
                        <div className="color__variant">
                            {
                                props.product.colors.map((color, index) =><span key={index} style={{
                                    backgroundColor :`${color}`,
                                    border: `0.5px solid ${color === 'white' ? "#aaa" : color}`
                                }} onClick={()=>props.handleImage(index, props.product)} className={`${color} ${ props.preview.find(ci => ci.id === props.product.id && ci.preview === index ) ? 'active': ''}`}></span>)
                            }
                        </div>
                        <div className="product__price--info">
                            <span className="sale__price">${props.product.salePrice.toFixed(2)}</span>
                            <span className="regular__price"><del>${props.product.regularPrice.toFixed(2)}</del></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DisplayShop;