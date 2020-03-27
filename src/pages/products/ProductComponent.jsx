import React from "react";
import ProductContainer from "./product container/ProductContainer";
import FeaturedProducts from "../../components/featured products/FeaturedProducts";
import photo from "../../assets/images/products/goggles2.jpg";

const ProductComponent = () => {
    return (
        <section className="product-wrapper">
            <ProductContainer photo={photo} />
            <FeaturedProducts />
        </section>
    );
};

export default ProductComponent;
