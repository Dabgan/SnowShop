import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { BasketProductsContext } from "../../../components/app/App";
import ShoppingPath from "../ShoppingPath";
import BasketTile from "../../basket/basket products/basket tile/BasketTile";
import useBasketCost from "../../../hooks/useBasket/useBasketCost.jsx";

const OrderStepThree = () => {
    const basketContext = useContext(BasketProductsContext);
    const history = useHistory();
    const [productsCost, deliveryCost, totalCost] = useBasketCost();

    console.log(history.location.state);

    return (
        <>
            <ShoppingPath active={3} />
            <div className={"basket-products-wrapper col-lg-6"}>
                <div className="row basket-products-container">
                    {basketContext.basketProducts.map((product) => (
                        <BasketTile
                            productInfo={product}
                            key={product.id}
                            orderTile
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default OrderStepThree;
