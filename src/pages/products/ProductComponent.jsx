import React from "react";
import ProductContainer from "./product container/ProductContainer";
import DisplayProducts from "../../components/featured products/DisplayProducts";

const ProductComponent = () => {
    return (
        <section className="product-wrapper">
            <ProductContainer />
            <DisplayProducts title="Check also" />
        </section>
    );
};

export default ProductComponent;
