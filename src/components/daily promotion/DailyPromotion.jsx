import React, { Component } from "react";
import "./dailyPromotion.css";
import dailyItem from "./../../assets/images/products/product5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const time = new Date();
// const timer = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

export class DailyPromotion extends Component {
    state = {
        timer: 100,
        hours: 24,
        minutes: 59,
        seconds: 59
    };

    changeSmth = () => {
        const { hours, minutes, seconds } = this.state;
        return this.setState(prevState => ({ timer: prevState.timer - 1 }));
    };

    componentDidMount() {
        setInterval(this.changeSmth, 1000);
    }

    render() {
        const { hours, minutes, seconds, timer } = this.state;
        return (
            <div className="daily-promotion">
                <div id="final-countdown" className="daily-promotion-timer">
                    <div onClick={this.changeSmth}>
                        <span className="text-gradient h2">#</span>
                        DailyPromotion
                    </div>
                    <p id="time-left" className="text-gradient h1">
                        {this.state.timer}
                        {/* {hours}:{minutes}:{seconds} */}
                        {/* 100 */}
                    </p>
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
                    <span className="daily-price text-gradient">$399,99</span>
                    <button className="daily-btn">
                        Check promotion{" "}
                        <FontAwesomeIcon icon="long-arrow-alt-right" />
                    </button>
                </div>
            </div>
        );
    }
}

export default DailyPromotion;
