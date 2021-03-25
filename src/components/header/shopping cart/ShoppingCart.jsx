import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { BasketProductsContext, BasketModalContext } from '../../app/App';

const ShoppingCart = () => {
    const basketContext = useContext(BasketProductsContext);
    const basketModal = useContext(BasketModalContext);
    const checkIfMobile = window.innerWidth > 300 && window.innerWidth < 1181;
    const basketLength = basketContext.basketProducts.length;
    return (
        <>
            {checkIfMobile ? (
                <Link to="/basket" className="shopping-cart">
                    <FaShoppingCart />
                    <p>Basket</p>
                    <span
                        style={{
                            display: basketLength ? 'block' : 'none',
                        }}
                        className="badge badge-info shopping-cart-badge"
                    >
                        {basketLength}
                    </span>
                </Link>
            ) : (
                <div className="shopping-cart" onClick={() => basketModal.setIsModalVisible()}>
                    <FaShoppingCart />
                    <p>Basket</p>
                    <span
                        style={{
                            display: basketLength ? 'block' : 'none',
                        }}
                        className="badge badge-info shopping-cart-badge"
                    >
                        {basketLength}
                    </span>
                </div>
            )}
        </>
    );
};

export default ShoppingCart;
