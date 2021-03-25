import React from 'react';
import Img from 'react-cool-img';
import banner from '../../assets/images/banners/banner5.jpg';

import './heroImage.scss';

const HeroImage = () => {
    return (
        <div className="hero-container">
            <div className="hero-text">
                <h1 className="hero-header">Enjoy the best quality of products</h1>
                <p className="hero-paragraph">
                    In our shop we offer only proven products of the highest quality, which will provide you with the
                    best experience on thesnow!
                </p>
            </div>
            <Img className="hero-img" src={banner} alt="guy snowboarding on ski slope" />
        </div>
    );
};

export default React.memo(HeroImage);
