import React from "react";
import ProductTile from "../../../components/product tile/ProductTile";

const BasketProducts = () => {
    return (
        <div className="col-md-6 border">
            <div className="row">
                <ProductTile />
                <ProductTile />
                <ProductTile />
                <ProductTile />
            </div>
            {/* <h2>This is products</h2> */}
        </div>
    );
};

export default BasketProducts;
