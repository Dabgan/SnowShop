import React from "react";
import "./newsletter.css";

function Newsletter() {
    return (
        <div className="newsletter-container">
            <form className="newsletter-form">
                <p className="h2">How about 10% off to your next order?</p>
                <p>
                    All you need to do, is to sing to our newsletter and get
                    sweet 10% off to your next order! It's so simple!{" "}
                </p>
                <div className="newsletter-input-container">
                    <input type="text" placeholder="Type your email" />
                </div>
                <button type="submit" className="my-btn">
                    Sign me!
                </button>
            </form>
        </div>
    );
}

export default Newsletter;
