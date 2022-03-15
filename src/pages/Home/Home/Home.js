import React from 'react';
import Banner from '../Banner/Banner';
import NewArrival from '../NewArrival/NewArrival';
import Offer from '../Offer/Offer';
import ParalaxBg from '../ParalaxBg/ParalaxBg';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';

const Home = () => {

    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Offer></Offer>
            <ParalaxBg></ParalaxBg>
            <NewArrival></NewArrival>
            <Footer></Footer>
        </>
    );
};

export default Home;