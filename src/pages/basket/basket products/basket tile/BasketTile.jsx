import React, { useContext } from "react";
import "./basketTile.css";
import { BasketProductsContext } from "../../../../components/app/App";
import Icons from "../../../../icons";

const BasketTile = ({ productInfo }) => {
    const basketContext = useContext(BasketProductsContext);
    return (
        <div className="basket-product-container">
            <div className="basket-product-img">
                <img src={productInfo.img} alt="shoes" />
            </div>
            <div className="basket-product-info">
                <div className="basket-product-title">{productInfo.title}</div>
                <div className="basket-product-quantity">
                    Quantity: <span>{productInfo.quantity}</span>
                </div>
            </div>
            <div className="basket-product-actions">
                <div className="basket-product-price">${productInfo.price}</div>
                <Icons.FaTrashAlt
                    onClick={() =>
                        basketContext.manageBasket({
                            operation: "delete",
                            productId: productInfo.id,
                        })
                    }
                />
            </div>
        </div>
    );
};

export default BasketTile;
