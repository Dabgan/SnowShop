import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./basketTile.css";

const BasketTile = ({ productInfo }) => {
    return (
        <div className="basket-product-container">
            <div className="basket-product-img">
                <img src={productInfo.img} alt="shoes" />
            </div>
            <div className="basket-product-info">
                <div className="basket-product-title">{productInfo.title}</div>
                <div className="basket-product-quantity">
                    Quantity: <span>{productInfo.quantity}</span>
                </div>
            </div>
            <div className="basket-product-actions">
                <div className="basket-product-price">{productInfo.price}</div>
                <FontAwesomeIcon icon="user" />
            </div>
        </div>
    );
};

export default BasketTile;
