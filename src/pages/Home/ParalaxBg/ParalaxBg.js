import React from 'react';
import paralaxBg from '../../../images/paralax-bg.jpg';
import './ParalaxBg.css';

const ParalaxBg = () => {
    return (
        <>
            <div id="paralax">
                <div className="container">
                    <div className="paralax__bg" style={{backgroundImage: `url(${paralaxBg})`}}>
                        <div className="paralax__text">
                            <h4 className="banner__subtitle">welcome to fashion</h4>
                            <h1 className="banner__title">FASHION TRENDS</h1>
                            <button className="btn__primary btn__brand">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ParalaxBg;