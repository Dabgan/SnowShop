import React, { useContext } from "react";
import "./displayProducts.css";
import ProductTile from "./product tile/ProductTile";
import { ProductsContext } from "../../components/app/App";

function FeaturedProducts({ title }) {
    const products = useContext(ProductsContext);
    return (
        <div className="featured-products">
            <p className="h3">{title}: </p>

            <div className="featured-products-tiles">
                {products.slice(0, 4).map((product) => (
                    <ProductTile
                        productImg={product.img}
                        productTitle={product.title}
                        price={product.price}
                        crossedPrice={product.crossedPrice}
                        key={product.id}
                        productPath={`/${product.category}/${product.id}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default FeaturedProducts;
