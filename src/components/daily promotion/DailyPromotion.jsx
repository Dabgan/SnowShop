import React from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Countdown from './countdown/Countdown';
import Img from 'react-cool-img';
import dailyItem from './../../assets/images/products/snowboard_set.jpg';
import placeholder from '../../assets/images/products/image-placeholder.png';

import './dailyPromotion.scss';

const DailyPromotion = () => {
    return (
        <div className="daily-promotion">
            <div id="final-countdown" className="daily-promotion-timer">
                <div>
                    <span className="text-gradient h2">#</span>
                    DailyPromotion
                </div>
                <Countdown />
            </div>
            <div className="daily-promotion-item">
                <Img src={dailyItem} alt="daily promotion item" placeholder={placeholder} />
            </div>
            <div className="daily-promotion-info">
                <div className="daily-description">
                    <p className="h4">Eagle Slash Snowboard set:</p>
                    Goggles + Helmet + Shoes + <span className="text-gradient">Gloves FREE</span>
                </div>
                <span className="daily-price">
                    <span className="text-gradient">$399,99</span>
                    <span className="price-crossed">$699,99</span>
                </span>

                <Link to="/boots/-M7iN00LVf6_KG2GXnwe" className="my-btn daily-btn">
                    Check promotion <FaLongArrowAltRight></FaLongArrowAltRight>
                </Link>
            </div>
        </div>
    );
};

export default React.memo(DailyPromotion);
