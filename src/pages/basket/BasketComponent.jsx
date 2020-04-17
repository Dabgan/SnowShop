import React from "react";
import BasketProducts from "./basket products/BasketProducts";
import BasketSummary from "./basket summary/BasketSummary";

const BasketComponent = () => {
    return (
        <div className="wrapper">
            <div className="row">
                {/* <h1 className="h3">Shopping cart contents:</h1> */}
            </div>
            <div className="row">
                <BasketProducts />
                <BasketSummary />
            </div>
        </div>
    );
};

export default BasketComponent;
