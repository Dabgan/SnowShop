import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
    BasketModalContext,
    BasketProductsContext,
} from "../../../components/app/App";
import BasketProducts from "../basket products/BasketProducts";
import "./basketModal.css";

const BasketModal = () => {
    const basketModal = useContext(BasketModalContext);
    const basketProducts = useContext(BasketProductsContext);
    const isModalVisible = basketModal.isModalVisible ? "flex" : "none";
    return (
        <div className="basket-modal" style={{ display: isModalVisible }}>
            {basketProducts.basketProducts.length ? (
                <>
                    <div className="basket-modal-products">
                        <BasketProducts additionalClass={"col-md-12"} />
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
