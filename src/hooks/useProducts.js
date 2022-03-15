import { useEffect, useState } from "react";

const useProducts = () => {

    const [allProducts, setAllProducts] = useState([]);
    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => {
            setAllProducts(data)
        })
    },[])


    return {
        allProducts
    };
};

export default useProducts;