import React, { useContext } from "react";
import Icons from "../../../icons";
import { Link } from "react-router-dom";
import { BasketProductsContext, BasketModalContext } from "../../app/App";

const ShoppingCart = () => {
    const basketContext = useContext(BasketProductsContext);
    const basketModal = useContext(BasketModalContext);
    const checkIfMobile = window.innerWidth > 320 && window.innerWidth < 1181;
    const basketLength = basketContext.basketProducts.length;
    return (
        <>
            {checkIfMobile ? (
                <Link to="/basket" className="shopping-cart">
                    <Icons.FaShoppingCart />
                    <p>Basket</p>
                    <span
                        style={{
                            display: basketLength ? "block" : "none",
                        }}
                        className="badge badge-info shopping-cart-badge"
                    >
                        {basketLength}
                    </span>
                </Link>
            ) : (
                <div
                    className="shopping-cart"
                    onClick={() => basketModal.setIsModalVisible()}
                >
                    <Icons.FaShoppingCart />
                    <p>Basket</p>
                    <span
                        style={{
                            display: basketLength ? "block" : "none",
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
