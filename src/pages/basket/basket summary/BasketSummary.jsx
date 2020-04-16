import React from "react";
import "./basketSummary.css";

const BasketSummary = () => {
    return (
        <div className="basket-summary col-md-6">
            <h2 className="h3 mb-4">Summary:</h2>
            <div className="summary-info">
                <div className="cost-products summary-row">
                    <p>Products:</p>
                    <span>$69.69</span>
                </div>
                <div className="cost-delivery summary-row">
                    <p>Delivery:</p>
                    <span>$4.99</span>
                </div>
                <div className="cost-discounts summary-row">
                    <p>Discounts:</p>
                    <span>0</span>
                </div>
                <div className="cost-total summary-row">
                    <p>Sum:</p>
                    <span>$74.68</span>
                </div>
                <button className="my-btn basket-summary-btn">
                    Go to payment
                </button>
            </div>
        </div>
    );
};

export default BasketSummary;
