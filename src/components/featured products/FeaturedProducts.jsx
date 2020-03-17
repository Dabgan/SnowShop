import React from "react";
import "./featuredProducts.css";
import ProductTile from "./product tile/ProductTile";
import image3 from "./../../assets/images/products/product3.jpg";
import image4 from "./../../assets/images/products/product4.jpg";
import image6 from "./../../assets/images/products/product6.jpg";
import image7 from "./../../assets/images/products/product7.jpg";

function FeaturedProducts() {
    const price = "$199,99";
    const productTitle = "Snowboard Pulsar HiperX model 3";

    return (
        <div className="featured-products">
            <p className="h3">Featured Products: </p>
            <div className="featured-products-tiles">
                <ProductTile
                    productImg={image3}
                    productTitle={productTitle}
                    price={price}
                />
                <ProductTile
                    productImg={image4}
                    productTitle={productTitle}
                    price={price}
                />
                <ProductTile
                    productImg={image7}
                    productTitle={productTitle}
                    price={price}
                />
                <ProductTile
                    productImg={image6}
                    productTitle={productTitle}
                    price={price}
                />
            </div>
        </div>
    );
}

export default FeaturedProducts;
