import React, { Component } from "react";
import "./dailyPromotion.css";
import dailyItem from "./../../assets/images/products/snowboard_set.jpg";
import Countdown from "./countdown/Countdown";
import Icons from "../../icons";

export class DailyPromotion extends Component {
    render() {
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

                    <button className="my-btn daily-btn">
                        Check promotion <Icons.FaLongArrowAltRight />
                    </button>
                </div>
            </div>
        );
    }
}

export default DailyPromotion;
