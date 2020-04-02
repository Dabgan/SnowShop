import React from "react";
import "./displayProducts.css";
import ProductTile from "./product tile/ProductTile";
import image1 from "./../../assets/images/products/snowboard_boots.jpg";
import image2 from "./../../assets/images/products/snowboard.jpg";
import image3 from "./../../assets/images/products/goggles2.jpg";
import image4 from "./../../assets/images/products/helmet.jpg";

function FeaturedProducts({ title }) {
    const price = "$199,99";
    const crossedPrice = "$299.99";
    const productTitle = "Snowboard Pulsar HiperX model 3";

    const productsInfo = [
        {
            img: image1,
            title: productTitle,
            price: price,
            crossedPrice: crossedPrice,
            id: 0
        },
        {
            img: image2,
            title: productTitle,
            price: price,
            crossedPrice: crossedPrice,
            id: 1
        },
        {
            img: image3,
            title: productTitle,
            price: price,
            crossedPrice: crossedPrice,
            id: 2
        },
        {
            img: image4,
            title: productTitle,
            price: price,
            crossedPrice: crossedPrice,
            id: 3
        }
    ];

    return (
        <div className="featured-products">
            <p className="h3">{title}: </p>
            <div className="featured-products-tiles">
                {productsInfo.map(product => (
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
