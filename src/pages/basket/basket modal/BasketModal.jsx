import React, { useContext } from "react";
import { BasketModalContext } from "../../../components/app/App";
import BasketProducts from "../basket products/BasketProducts";
import "./basketModal.css";

const BasketModal = () => {
    const basketModal = useContext(BasketModalContext);
    const isModalVisible = basketModal.isModalVisible ? "block" : "none";
    return (
        <div className="basket-modal" style={{ display: isModalVisible }}>
            <p>Those products are in basket:</p>
            <BasketProducts additionalClass={"col-md-12"} />
        </div>
    );
};

export default BasketModal;
