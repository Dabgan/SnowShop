import React, { useState, useContext } from "react";
import "./productActions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BasketProductsContext } from "../../../../../components/app/App";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductActions = ({ productInfo }) => {
    const basketContext = useContext(BasketProductsContext);
    const [quantity, setQuantity] = useState(1);

    const formatQuantity = (e) => {
        let inputValue = 1;
        const receivedValue = e.target.value;
        isNaN(receivedValue) || receivedValue === ""
            ? (inputValue = 1)
            : (inputValue = receivedValue);
        return setQuantity(parseInt(inputValue));
    };

    const handleQuantityDecrement = () => {
        setQuantity((prevQuantity) =>
            prevQuantity > 1 ? prevQuantity - 1 : prevQuantity
        );
    };

    const handleQuantityIncrement = () => {
        return setQuantity((prevQuantity) => prevQuantity + 1);
    };

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
                <div className="product-quantity">
                    <button
                        onClick={handleQuantityDecrement}
                        className="quantity-btn"
                    >
                        -
                    </button>
                    <input
                        type="text"
                        value={quantity}
                        onChange={(e) => formatQuantity(e)}
                    />
                    <button
                        onClick={handleQuantityIncrement}
                        className="quantity-btn"
                    >
                        +
                    </button>
                </div>
                <button
                    className="my-btn add-to-cart-btn"
                    onClick={() => {
                        notify();
                        basketContext.manageBasket({
                            operation: "add",
                            product: productInfo,
                            quantity,
                        });
                    }}
                >
                    Add to cart
                    <FontAwesomeIcon icon="shopping-cart" />
                </button>
            </div>
        </div>
    );
};

export default ProductActions;
