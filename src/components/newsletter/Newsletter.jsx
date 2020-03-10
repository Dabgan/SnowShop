import React from "react";
import "./newsletter.css";
import newsletterBanner from "./../../assets/images/newsletter.jpg";

function Newsletter() {
    return (
        <div className="newsletter-container">
            <form className="newsletter-form">
                <p className="h3">How about 10% off to your next order?</p>
                <p>
                    All you need to do is to sing to our newsletter and get
                    sweet 10% off to your next order! It's so simple!{" "}
                </p>
                <label htmlFor="">Type your email</label>
                <input type="text" />
                <button type="submit">Sign me!</button>
            </form>
            <img src={newsletterBanner} alt="" />
        </div>
    );
}

export default Newsletter;
