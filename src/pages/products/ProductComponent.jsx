import React from "react";
import ProductContainer from "./product container/ProductContainer";
import DisplayProducts from "../../components/featured products/DisplayProducts";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";

const ProductComponent = ({ productInfo }) => {
    return (
        <section className="product-wrapper">
            <ScrollToTopOnMount />
            <ProductContainer productInfo={productInfo} />
            <DisplayProducts title="Check also" />
        </section>
    );
};

export default ProductComponent;
