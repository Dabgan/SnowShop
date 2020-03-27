import React from "react";
import { Link } from "react-router-dom";
import "./productTile.css";

function ProductTile({ productImg, productTitle, price, newClass = "" }) {
    return (
        <Link to="/product" className={`product-tile ${newClass}`}>
            <img src={productImg} alt="item number X" />
            <div className="product-info">{productTitle}</div>
            <div className="product-price">{price}</div>
        </Link>
    );
}

export default ProductTile;
