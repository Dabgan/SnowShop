import React from "react";
import ProductContainer from "./product container/ProductContainer";
import FeaturedProducts from "../../components/featured products/FeaturedProducts";

const ProductComponent = () => {
    return (
        <section className="product-wrapper">
            <ProductContainer />
            <FeaturedProducts />
        </section>
    );
};

export default ProductComponent;
