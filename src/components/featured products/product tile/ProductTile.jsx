import React from "react";
import "./productTile.css";

function ProductTile({ productImg, productTitle, price }) {
    return (
        <div className="product-tile">
            <img src={productImg} alt="item number X" />
            <div className="product-info">{productTitle}</div>
            <div className="product-price">{price}</div>
        </div>
    );
}

export default ProductTile;
