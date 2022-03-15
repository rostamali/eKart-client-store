import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import usePreview from '../../hooks/usePreview';
import './QuickView.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { MyContext } from '../../App';


const QuickView = (props) => {

    const { handleImage, preview } = usePreview();
    const { handleAddCart, cart, handleDecreaseCart } = useContext(MyContext);
    const QuickViewFrontImage = ({product}) =>{
            
        const specificProduct = preview?.find(ci => ci.id === product.id);

        return <img className='img-fluid' src={product.images[specificProduct.preview]} alt={specificProduct.title} />;
    }

    const quickViewCheck = Object.keys(props.product).length === 0;

    const QuickViewCart = ({product}) =>{
        const cartSProduct = cart?.find(cartItem => cartItem.id === product.id);
        return <span>{cartSProduct?.cartQty}</span>
    }


    return (
        <>
            <div id="quick__view">
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >

                    <Modal.Body>
                        <div className="quick__view--product">
                            <div className="row gy-4 gx-4">
                                <div className="col-md-6 col-12">
                                    <div className="product__image--wrapper">
                                        <div className="front__image">
                                            <QuickViewFrontImage product={props.product}/>
                                        </div>
                                        <div className="product__thumb--list">
                                            {
                                                !quickViewCheck &&
                                                props.product.images.map((image, index) => <div key={index}
                                                className={`product__thumb--image ${ preview.find(ci => ci.id === props.product.id && ci.preview === index ) ? 'active': ''}`}>
                                                    <img onClick={()=>handleImage(index, props.product)}
                                                    src={image} alt="" />
                                                </div> )
                                            }
                                        </div>
                                    </div>    
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="quick__view--product-info">
                                        <div className="row">
                                            <div className="col-md-10 col-9">
                                                <h3 className="product__md--title">{props.product.title}</h3>
                                            </div>
                                            <div className="col-md-2 col-3 text-end">
                                                <div className="btn__end">
                                                    <button className='close__btn' onClick={props.onHide}><FaTimes/></button>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            !quickViewCheck &&
                                            <div className="product__price--info">
                                                <span className="sale__price">${props.product.salePrice.toFixed(2)}</span>
                                                <span className="regular__price"><del>${props.product.regularPrice.toFixed(2)}</del></span>
                                            </div>
                                        }
                                        
                                        <div className="color__variant mt__md">
                                            {
                                                !quickViewCheck &&
                                                props.product.colors.map((color, index) =><span key={index} style={{
                                                    backgroundColor :`${color}`,
                                                    border: `0.5px solid ${color === 'white' ? "#aaa" : color}`
                                                }} onClick={()=>handleImage(index, props.product)} className={`${color} ${ preview.find(ci => ci.id === props.product.id && ci.preview === index ) ? 'active': ''}`}></span>)
                                            }
                                        </div>
                                        <h4 className="product__tab--title">product details</h4>
                                        <p className="text__muted">
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                                        </p>
                                        <hr className="quick__view--divider" />
                                        <div className="product__quantity--wrapper">
                                            <h4 className="product__tab--title">Quantity</h4>
                                            <div className="quantity__input--group">
                                                <button onClick={()=>handleDecreaseCart(props.product)} className='btn__minus'><AiOutlineMinus/></button>
                                                <span className="cart__qty">
                                                    {
                                                        cart.find(cartItem => cartItem.id === props.product.id) ?
                                                        <QuickViewCart product={props.product}/>
                                                        :
                                                        0
                                                    }
                                                </span>
                                                <button onClick={()=>handleAddCart(props.product)} className='btn__plus'><AiOutlinePlus/></button>
                                            </div>
                                        </div>
                                        {
                                            cart.find(cartItem => cartItem.id === props.product.id) ?
                                            <button className="add__cart--btn">Already in Cart</button>
                                            :
                                            <button onClick={()=>handleAddCart(props.product)} className="add__cart--btn">Add to Cart</button>
                                        }
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
};

export default QuickView;