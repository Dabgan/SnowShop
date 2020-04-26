import React, { useContext } from "react";
import "./basketTile.css";
import { BasketProductsContext } from "../../../../components/app/App";
import Icons from "../../../../icons";
import { Link } from "react-router-dom";

const BasketTile = ({ productInfo }) => {
    const basketContext = useContext(BasketProductsContext);
    const totalPrice = productInfo.quantity * productInfo.price;
    return (
        <div className="basket-product-container">
            <Link
                to={`/${productInfo.category}/${productInfo.oldId}`}
                className="basket-product-img"
            >
                <img src={productInfo.img} alt="shoes" />
            </Link>
            <div className="basket-product-info">
                <div className="basket-product-title">{productInfo.title}</div>
                <div className="basket-product-quantity">
                    Quantity: <span>{productInfo.quantity}</span>
                </div>
            </div>
            <div className="basket-product-actions">
                <div className="basket-product-prices">
                    <div className="basket-product-total-price">
                        ${totalPrice}
                    </div>
                    {productInfo.quantity > 1 && (
                        <div className="basket-product-price">
                            per item: ${productInfo.price}
                        </div>
                    )}
                </div>
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
