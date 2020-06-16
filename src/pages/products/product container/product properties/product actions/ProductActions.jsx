import React, { useState, useContext } from "react";
import "./productActions.scss";
import { BasketProductsContext } from "../../../../../components/app/App";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Icons from "../../../../../icons";
import QuantityCounter from "../../../../../components/quantity counter/QuantityCounter";

const ProductActions = ({ productInfo }) => {
    const basketContext = useContext(BasketProductsContext);
    const [quantity, setQuantity] = useState(1);

    const notify = () => {
        return toast.success(
            `${quantity} ${
                quantity === 1 ? "product" : "products"
            } successfully added to shopping cart!`,
            {
                autoClose: 2000,
                className: "basket-alert",
            }
        );
    };

    return (
        <div className="product-actions">
            <div className="product-actions-container">
                <QuantityCounter
                    quantity={quantity}
                    setQuantity={setQuantity}
                    bigFontSize={true}
                />
                <button
                    className="my-btn add-to-cart-btn"
                    onClick={() => {
                        notify();
                        document.title = `SnowShop (${basketContext.basketProducts.length})`;
                        basketContext.manageBasket({
                            operation: "add",
                            product: productInfo,
                            quantity,
                        });
                    }}
                >
                    Add to cart
                    <Icons.FaShoppingCart />
                </button>
            </div>
        </div>
    );
};

export default ProductActions;
