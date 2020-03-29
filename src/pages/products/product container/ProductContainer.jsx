import React from "react";
import "./productContainer.css";
import ProductProperties from "./product properties/ProductProperties";
import ProductDescription from "./product description/ProductDescription";
import photo from "../../../assets/images/products/goggles2.jpg";

const ProductContainer = () => {
    return (
        <div className="product-container row">
            <div className="product-photo-container col-md-6">
                <img src={photo} alt="a product" />
            </div>
            <ProductProperties />
            <ProductDescription />
        </div>
    );
};

export default ProductContainer;
