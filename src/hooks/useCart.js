import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import useProducts from "./useProducts";
import useStorage from "./useStorage";

const useCart = () => {

    const [cart, setCart] = useState([]);
    const { addToDb, handleDbQty, removeFromDb, getStoredCart } = useStorage();
    const { allProducts } = useProducts();
    const [insertId, setInsertId] = useState('');

    /* cart added toastify */
    const showToast = (text) => {
        toast(text)
    };

    useEffect(()=>{
        
        if(allProducts?.length){
            const storedCart = [];
            const saveCart = getStoredCart();
            for(const key in saveCart){
                const addedProduct = allProducts.find(pd => pd.id.toString() === key.toString());
                if(addedProduct){
                    const cartQty = saveCart[key];
                    addedProduct['cartQty'] = cartQty;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    },[allProducts]);

    const handleAddCart = product =>{
        const exist = cart.find( pd => pd.id === product.id );
        let newAdd = [];

        if(!exist){
            product['cartQty'] = 1;
            newAdd = [...cart, product];
            showToast('Product Added to Cart');
        }else{
            // const rest = cart.filter(pd => pd.id !== product.id);
            product['cartQty'] =  exist['cartQty'] + 1;
            newAdd = [...cart];
        }
        setCart(newAdd);
        addToDb(product.id)
    }

    const handleDecreaseCart = product =>{
        const exist = cart.find( pd => pd.id === product.id );

        if(exist.cartQty >= 1){

            product['cartQty'] = exist['cartQty'] - 1;
            let newCount = [];
            
            if(product.cartQty === 0){
                product['cartQty'] = 0;
                const removeEmptyQty = cart.filter(pd => pd.id !==product.id);
                newCount = [...removeEmptyQty];
                showToast('Product removed from cart');
            }else{
                // const remainQtyProduct = cart.filter(pd => pd.id !== product.id)
                // // newCount = [ product, ...remainQtyProduct];
                newCount = [...cart];
            }
            setCart(newCount);
            handleDbQty(product.id)
        }
    }

    const deleteCartItem = product =>{
        const newCartItem = cart.filter(item=> item.id !== product.id);
        setCart(newCartItem);
        showToast('Product removed from cart');
        removeFromDb(product.id)
    }

    /* cart total */
    let cartTotal = 0;
    for(const cartItem of cart){
        cartTotal = (cartItem.salePrice * cartItem.cartQty) + cartTotal;
    }

    const handleInsertId = id =>{
        setInsertId(id);
    }
    

    return {
        handleAddCart,
        cart,
        cartTotal,
        showToast,
        handleDecreaseCart,
        deleteCartItem,
        handleInsertId,
        insertId
    };
};

export default useCart;