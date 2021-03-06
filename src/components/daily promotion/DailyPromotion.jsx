import React from "react";
import "./dailyPromotion.scss";
import dailyItem from "./../../assets/images/products/snowboard_set.jpg";
import Countdown from "./countdown/Countdown";
import Icons from "../../icons";
import { Link } from "react-router-dom";

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
                <img src={dailyItem} alt="daily promotion item" />
            </div>
            <div className="daily-promotion-info">
                <div className="daily-description">
                    <p className="h4">Eagle Slash Snowboard set:</p>
                    Goggles + Helmet + Shoes +{" "}
                    <span className="text-gradient">Gloves FREE</span>
                </div>
                <span className="daily-price">
                    <span className="text-gradient">$399,99</span>
                    <span className="price-crossed">$699,99</span>
                </span>

                <Link
                    to="/boots/-M7iN00LVf6_KG2GXnwe"
                    className="my-btn daily-btn"
                >
                    Check promotion <Icons.FaLongArrowAltRight />
                </Link>
            </div>
        </div>
    );
};

export default DailyPromotion;
