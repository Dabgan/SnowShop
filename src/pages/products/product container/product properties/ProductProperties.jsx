import React from 'react';
import { FaArchive, FaTruck, FaClock } from 'react-icons/fa';
import ProductActions from './product actions/ProductActions';
import './productProperties.scss';

const ProductProperties = ({ productInfo }) => {
    const deliveryDate = new Date();

    const setDeliveryDate = () => {
        return deliveryDate.setDate(deliveryDate.getDate() + 1);
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
        <div className="product-info-container">
            <h1 className="product-name">{productInfo.title}</h1>
            <h2 className="product-info-price">
                ${productInfo.price} <span className="product-info-price-crossed">${productInfo.crossedPrice}</span>
            </h2>
            <p className="product-properties product-availability">
                <FaArchive />
                In Store: {productInfo.availability ? 'available' : 'sold out'}
            </p>
            <p className="product-properties delivery-info-price">
                <FaTruck />
                Free delivery
            </p>
            <p className="product-properties delivery-info-date">
                <FaClock />
                At your place on {getDeliveryDate()}
            </p>
            <ProductActions productInfo={productInfo} />
        </div>
    );
};

export default React.memo(ProductProperties);
