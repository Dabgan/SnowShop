import React from "react";
import ProductActions from "./product actions/ProductActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./productProperties.css";

const ProductProperties = () => {
    const deliveryDate = new Date();

    const setDeliveryDate = () => {
        return deliveryDate.setDate(deliveryDate.getDate() + 2);
    };

    const addLeadingZeros = date => {
        return date < 10 ? `0${date}` : date;
    };

    const getDeliveryDate = () => {
        setDeliveryDate();
        const formattedDeliveryDate = `
        ${addLeadingZeros(deliveryDate.getDate())}.${addLeadingZeros(
            deliveryDate.getMonth() + 1
        )}.${deliveryDate.getFullYear()}`;

        return formattedDeliveryDate;
    };

    return (
        <div className="product-info-container col-md-6">
            <h1 className="product-name">Random Goggles 3X</h1>
            <h2 className="product-info-price">
                $199.99 <span className="product-info-price-crossed">$299</span>
            </h2>
            <p className="product-properties product-availability">
                <FontAwesomeIcon icon="archive" />
                In Store
            </p>
            <p className="product-properties delivery-info-price">
                <FontAwesomeIcon icon="truck" />
                Free delivery
            </p>
            <p className="product-properties delivery-info-date">
                <FontAwesomeIcon icon="clock" />
                At your place on {getDeliveryDate()}
            </p>
            <ProductActions />
        </div>
    );
};

export default ProductProperties;
