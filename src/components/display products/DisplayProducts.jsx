import React, { useContext } from "react";
import "./displayProducts.scss";
import ProductTile from "../product tile/ProductTile";
import { ProductsContext } from "../../routes/Routes";

const DisplayProducts = ({ title, randomProducts }) => {
    const products = useContext(ProductsContext);

    // Shuffle array of products
    if (randomProducts) {
        products.sort(() => 0.5 - Math.random());
    }

    return (
        <div className="display-products">
            <p className="h3">{title}: </p>

            <div className="display-products-tiles">
                {products.slice(0, 4).map((product) => (
                    <ProductTile productInfo={product} key={product.id} />
                ))}
            </div>
        </div>
    );
};

export default DisplayProducts;
