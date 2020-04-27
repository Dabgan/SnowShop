import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
    BasketModalContext,
    BasketProductsContext,
} from "../../../components/app/App";
import BasketProducts from "../basket products/BasketProducts";
import "./basketModal.css";
import BasketTile from "../basket products/basket tile/BasketTile";

const BasketModal = () => {
    const basketModal = useContext(BasketModalContext);
    const basketProducts = useContext(BasketProductsContext);
    const isModalVisible = basketModal.isModalVisible ? "flex" : "none";
    return (
        <div className="basket-modal" style={{ display: isModalVisible }}>
            {basketProducts.basketProducts.length ? (
                <>
                    <div className="row">
                        {basketProducts.basketProducts.map((product) => (
                            <BasketTile
                                productInfo={product}
                                key={product.id}
                                quantityOptions={false}
                            />
                        ))}
                    </div>

                    <Link to="/basket" className="my-btn basket-modal-btn">
                        Go to order
                    </Link>
                </>
            ) : (
                <p className="basket-modal-empty-info">
                    You don't have any products in your shopping cart!
                </p>
            )}
        </div>
    );
};

export default BasketModal;
