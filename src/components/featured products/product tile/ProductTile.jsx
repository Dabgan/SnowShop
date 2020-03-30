import React from "react";
import { Link } from "react-router-dom";
import "./productTile.css";

function ProductTile({
    productImg,
    productTitle,
    price,
    crossedPrice,
    newClass = ""
}) {
    return (
        <Link to="/product" className={`product-tile ${newClass}`}>
            <div className="product-img-container">
                <img src={productImg} alt="item number X" />
            </div>
            <div className="product-info">{productTitle}</div>
            <div className="product-price product-price-crossed">
                {crossedPrice}
            </div>
            <div className="product-price">{price}</div>
        </Link>
    );
}

export default ProductTile;
