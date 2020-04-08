import React from "react";
import "./displayProducts.css";
import ProductTile from "./product tile/ProductTile";

function FeaturedProducts({ title, products }) {
    return (
        <div className="featured-products">
            <p className="h3">{title}: </p>

            <div className="featured-products-tiles">
                {products.map((product) => (
                    <ProductTile
                        productImg={product.img}
                        productTitle={product.title}
                        price={product.price}
                        crossedPrice={product.crossedPrice}
                        key={product.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default FeaturedProducts;
