import React, { useContext } from 'react';
import { BasketProductsContext } from '../app/App';
import './quantityCounter.scss';

const QuantityCounter = ({ quantity, setQuantity, updateQuantity, productInfo, bigFontSize }) => {
    const basketContext = useContext(BasketProductsContext);
    const fontSize = bigFontSize ? '1.5rem' : '1rem';

    const updateBasket = (action) => {
        if (updateQuantity) {
            basketContext.manageBasket({
                operation: 'update',
                product: productInfo,
                quantity,
                update: action,
            });
        }
    };

    const formatQuantity = (e) => {
        let inputValue = 1;
        const receivedValue = e.target.value;
        isNaN(receivedValue) || receivedValue === '' ? (inputValue = 1) : (inputValue = receivedValue);
        setQuantity(parseInt(inputValue));
        updateBasket('increment');
    };

    const handleQuantityDecrement = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
        updateBasket('decrement');
    };

    const handleQuantityIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
        updateBasket('increment');
    };

    return (
        <div className="product-quantity" style={{ fontSize: fontSize }}>
            <button onClick={handleQuantityDecrement} className="quantity-btn">
                -
            </button>
            {updateQuantity ? (
                <span className="quantity-span">{quantity}</span>
            ) : (
                <input
                    type="text"
                    value={quantity}
                    onChange={(e) => {
                        formatQuantity(e);
                    }}
                />
            )}

            <button onClick={handleQuantityIncrement} className="quantity-btn">
                +
            </button>
        </div>
    );
};

export default React.memo(QuantityCounter);
