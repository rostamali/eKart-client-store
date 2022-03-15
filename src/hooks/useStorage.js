const useStorage = () =>{

    const getDb = () => localStorage.getItem('react_eKart_cart');
    let react_eKart_cart = {};

    // add product on local storage
    const addToDb = id => {

        const exists = getDb();

        if (!exists) {
            react_eKart_cart[id] = 1;
        }
        else {

            react_eKart_cart = JSON.parse(exists);

            if (react_eKart_cart[id]) {

                react_eKart_cart[id] = react_eKart_cart[id] + 1;
            }
            else {
                react_eKart_cart[id] = 1;
            }
        }
        updateDb(react_eKart_cart);
    }

    // decrease the db quantity
    const handleDbQty = id =>{
        const exists = getDb();
        react_eKart_cart = JSON.parse(exists);
        if(react_eKart_cart[id] >= 1){

            react_eKart_cart[id] = react_eKart_cart[id] - 1;

            if(react_eKart_cart[id] === 0){
                delete react_eKart_cart[id];
            }
            updateDb(react_eKart_cart);
        }
    }

    // remove product from local storage
    const removeFromDb = id => {
        const exists = getDb();
        const react_eKart_cart = JSON.parse(exists);
        delete react_eKart_cart[id];
        updateDb(react_eKart_cart);
    }

    const updateDb = cart => {
        localStorage.setItem('react_eKart_cart', JSON.stringify(cart));
    }

    // get data from local storage
    const getStoredCart = () => {
        const exists = getDb();
        return exists ? JSON.parse(exists) : {};
    }

    // clear the cart
    const clearTheCart = () => {
        localStorage.removeItem('react_eKart_cart');
    }



    return{
        addToDb,
        removeFromDb,
        handleDbQty,
        getStoredCart,
        clearTheCart
    }
}

export default useStorage;