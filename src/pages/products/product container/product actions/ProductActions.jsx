import React, { useState } from "react";
import "./productActions.css";

const ProductActions = () => {
    const [quantity, setQuantity] = useState(1);

    const formatQuantity = e => {
        let inputValue = 1;
        const receivedValue = e.target.value;
        isNaN(receivedValue) || receivedValue === ""
            ? (inputValue = 1)
            : (inputValue = receivedValue);
        return setQuantity(parseInt(inputValue));
    };

    return (
        <div className="product-actions">
            <div className="product-quantity">
                <button
                    onClick={() =>
                        setQuantity(prevQuantity =>
                            prevQuantity > 1 ? prevQuantity - 1 : prevQuantity
                        )
                    }
                    className="quantity-btn decrement-quantity"
                    id="decrement-quantity"
                >
                    -
                </button>
                <input
                    type="text"
                    value={quantity}
                    onChange={e => formatQuantity(e)}
                />
                <button
                    onClick={() =>
                        setQuantity(prevQuantity => prevQuantity + 1)
                    }
                    className="quantity-btn increment-quantity"
                    id="increment-quantity"
                >
                    +
                </button>
            </div>
            <button className="my-btn add-to-cart-btn">Add to cart</button>
        </div>
    );
};

export default ProductActions;
