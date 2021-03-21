import React from 'react';
import { Link } from 'react-router-dom';
import Img from 'react-cool-img';
import './productTile.scss';

const ProductTile = ({ productInfo, newClass = '' }) => {
    const { img, title, price, crossedPrice } = productInfo;
    const productPath = `/${productInfo.category}/${productInfo.id}`;

    return (
        <Link to={productPath} className={`product-tile ${newClass}`}>
            <div className="product-img-container">
                <Img src={img} alt={productInfo.title} />
            </div>
            <div className="product-info">{title}</div>
            <div className="product-price product-price-crossed">${crossedPrice}</div>
            <div className="product-price">${price}</div>
        </Link>
    );
};

export default React.memo(ProductTile);
