import React from "react";
import ProductActions from "./product actions/ProductActions";
import "./productProperties.css";
import Icons from "../../../../icons";

const ProductProperties = ({ productInfo }) => {
    const deliveryDate = new Date();

    const setDeliveryDate = () => {
        return deliveryDate.setDate(deliveryDate.getDate() + 2);
    };

    const addLeadingZeros = (date) => {
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
            <h1 className="product-name">{productInfo.title}</h1>
            <h2 className="product-info-price">
                ${productInfo.price}{" "}
                <span className="product-info-price-crossed">
                    ${productInfo.crossedPrice}
                </span>
            </h2>
            <p className="product-properties product-availability">
                <Icons.FaArchive />
                In Store
            </p>
            <p className="product-properties delivery-info-price">
                <Icons.FaTruck />
                Free delivery
            </p>
            <p className="product-properties delivery-info-date">
                <Icons.FaClock />
                At your place on {getDeliveryDate()}
            </p>
            <ProductActions productInfo={productInfo} />
        </div>
    );
};

export default ProductProperties;
