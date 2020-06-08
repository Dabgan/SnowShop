import React, { useContext } from "react";
import "./basketSummary.css";
import { BasketProductsContext } from "../../../components/app/App";
import { Link } from "react-router-dom";

const BasketSummary = () => {
    const basketContext = useContext(BasketProductsContext);
    const deliveryCost = 6.99;
    const productsCost =
        Math.floor(
            basketContext.basketProducts.reduce((accumulator, product) => {
                return accumulator + product.price * product.quantity;
            }, 0) * 100
        ) / 100;
    const discount = (productsCost + deliveryCost) * 0.05;
    const totalCost =
        productsCost === 0
            ? 0
            : Math.floor((productsCost + deliveryCost - discount) * 100) / 100;

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
