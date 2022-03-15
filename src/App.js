import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from 'react';
import useCart from './hooks/useCart';
import Shop from './pages/Shop/Shop/Shop';
import useView from './hooks/useView';
import QuickView from './shared/QuickView/QuickView';
import Toast from './shared/Toast/Toast';
import Cart from './pages/Cart/Cart/Cart';
import Checkout from './pages/Checkout/Checkout/Checkout';
import OrderSuccess from './pages/OrderSuccess/OrderSuccess/OrderSuccess';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import useFirebase from './hooks/useFirebase';
import UserRoute from './shared/UserRoute/UserRoute';
import MobileMenu from './shared/MobileMenu/MobileMenu';
import Dashboard from './dashboard/Dashboard/Dashboard';
import Profile from './dashboard/User/Profile/Profile';
import OrderList from './dashboard/User/OrderList/OrderList/OrderList';

export const MyContext = createContext();

function App() {

  const { cart, handleAddCart, cartTotal, showToast, handleDecreaseCart, deleteCartItem, insertId, handleInsertId } = useCart();
  const {quickViewShow, setQuickViewShow, handleQuickViewData, quickViewData} = useView();
  const {newUser, authLoading} = useFirebase();

  return (
    <>
      <MyContext.Provider value={{handleAddCart, showToast, cart, cartTotal, quickViewShow, setQuickViewShow, handleQuickViewData, handleDecreaseCart, deleteCartItem, newUser, authLoading, insertId, handleInsertId}}>
        <BrowserRouter>
          <MobileMenu></MobileMenu>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<UserRoute><Checkout /></UserRoute>} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-user" element={<Register />} />

            <Route path="/dashboard" element={<UserRoute><Dashboard /></UserRoute>} >
              <Route path='profile' element={<UserRoute><Profile/></UserRoute>} />
              <Route path='order-list' element={<UserRoute><OrderList/></UserRoute>} />
            </Route>
          </Routes>
        </BrowserRouter>
        <QuickView show={quickViewShow} product={quickViewData} onHide={() => setQuickViewShow(false)}></QuickView>
        <Toast></Toast>
      </MyContext.Provider>
    </>
  );
}

export default App;
