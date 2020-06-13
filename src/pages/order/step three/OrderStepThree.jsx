import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { BasketProductsContext } from "../../../components/app/App";
import ShoppingPath from "../ShoppingPath";
import BasketTile from "../../basket/basket products/basket tile/BasketTile";
import useBasketCost from "../../../hooks/useBasket/useBasketCost.jsx";
import {
    OrderSummaryPanel,
    OrderSummary,
    OrderDataItem,
    OrderSummaryInfo,
    OrderTitle,
    ButtonPannel,
} from "./stepThreeStyles";
import "../../basket/basket summary/basketSummary.css";
const OrderStepThree = () => {
    const basketContext = useContext(BasketProductsContext);
    const [productsCost, deliveryCost, totalCost] = useBasketCost();
    const history = useHistory();
    const formData = history.location.state || {
        name: "please submit your shipping information first",
    };

    return (
        <>
            <ShoppingPath active={3} />
            <OrderSummary>
                <OrderSummaryPanel>
                    {basketContext.basketProducts.map((product) => (
                        <BasketTile
                            productInfo={product}
                            key={product.id}
                            orderTile
                        />
                    ))}
                </OrderSummaryPanel>
                <OrderSummaryPanel>
                    <OrderTitle center>Total cost:</OrderTitle>
                    <OrderSummaryInfo fullWidth>
                        <div className="cost-products summary-row">
                            <p>Products:</p>
                            <span>${productsCost}</span>
                        </div>
                        <div className="cost-delivery summary-row">
                            <p>Delivery:</p>
                            <span>${deliveryCost}</span>
                        </div>
                        <div className="cost-discounts summary-row">
                            <p>Discounts:</p>
                            <span>0%</span>
                        </div>
                        <div className="cost-total summary-row">
                            <p>Sum:</p>
                            <span>${totalCost}</span>
                        </div>
                    </OrderSummaryInfo>
                </OrderSummaryPanel>

                <OrderSummaryPanel flexRow>
                    <OrderSummaryInfo>
                        <OrderTitle>Buyer data:</OrderTitle>
                        {Object.keys(formData)
                            .slice(0, 4)
                            .map((key) => {
                                return (
                                    <OrderDataItem key={key}>
                                        <p>{formData[key]}</p>
                                    </OrderDataItem>
                                );
                            })}
                    </OrderSummaryInfo>
                    <OrderSummaryInfo>
                        <OrderTitle>Shipping addresss:</OrderTitle>
                        {Object.keys(formData)
                            .slice(4, 9)
                            .map((key) => {
                                return (
                                    <OrderDataItem key={key}>
                                        <p>{formData[key]}</p>
                                    </OrderDataItem>
                                );
                            })}
                    </OrderSummaryInfo>
                    <OrderSummaryInfo>
                        <OrderTitle>Comments:</OrderTitle>
                        <OrderDataItem>{formData.comments}</OrderDataItem>
                    </OrderSummaryInfo>
                    <OrderSummaryInfo>
                        <OrderTitle>Information:</OrderTitle>
                        <OrderDataItem>
                            Expected time of shipment : <span>2-3 days</span>
                        </OrderDataItem>
                        <OrderDataItem>
                            Form of delivery: <span>personal collection</span>
                        </OrderDataItem>
                        <OrderDataItem>
                            Payment method: <span>cash on delivery</span>
                        </OrderDataItem>
                    </OrderSummaryInfo>
                </OrderSummaryPanel>
            </OrderSummary>
            <ButtonPannel>
                <Link to="/order/step2" className="my-btn">
                    Go Back
                </Link>

                <Link to="/order/step4" className="my-btn">
                    Confirm Order
                </Link>
            </ButtonPannel>
        </>
    );
};

export default OrderStepThree;
