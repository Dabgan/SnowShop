import React from "react";
import "./featuredProducts.css";
import ProductTile from "./ProductTile";

function FeaturedProducts() {
    const productImg = "";
    const productTitle = "Snowboard Pulsar HiperX model 3";
    const price = "$199.99";

    return (
        <div className="featured-products">
            <p className="h4">Featured Products: </p>
            <div className="featured-products-tiles">
                <ProductTile
                    productImg={productImg}
                    productTitle={productTitle}
                    price={price}
                />
                <ProductTile
                    productImg={productImg}
                    productTitle={productTitle}
                    price={price}
                />
                <ProductTile
                    productImg={productImg}
                    productTitle={productTitle}
                    price={price}
                />
                <ProductTile
                    productImg={productImg}
                    productTitle={productTitle}
                    price={price}
                />
            </div>
            <a className="check-more-link" href="#">
                Check more from this category{" "}
                <span className="bold-text">></span>
            </a>
        </div>
    );
}

export default FeaturedProducts;
