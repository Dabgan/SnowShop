import React from "react";
import "./basketSummary.scss";
import useBasketCost from "../../../hooks/useBasket/useBasketCost.jsx";
import { Link } from "react-router-dom";

const BasketSummary = () => {
    const [productsCost, deliveryCost, totalCost] = useBasketCost();
    return (
        <div className="basket-summary col-lg-6">
            <h2 className="h3 mb-4">Summary:</h2>
            <div className="summary-info">
                <div className="cost-products summary-row">
                    <p>Products:</p>
                    <span>${productsCost}</span>
                </div>
                <div className="cost-delivery summary-row">
                    <p>Delivery:</p>
                    <span>${deliveryCost}</span>
                </div>
                <div className="cost-discounts summary-row">
                    <p>Discounts:</p>
                    <span>5%</span>
                </div>
                <div className="cost-total summary-row">
                    <p>Sum:</p>
                    <span>${totalCost}</span>
                </div>
                <Link to="/order/step1" className="my-btn basket-summary-btn">
                    Go to payment
                </Link>
            </div>
        </div>
    );
};

export default BasketSummary;
