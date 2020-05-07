import React, { useEffect, useContext } from "react";
import { BasketModalContext } from "../components/app/App";

const CloseBasketModal = ({ children }) => {
    const basketModal = useContext(BasketModalContext);

    useEffect(() => {
        basketModal.setIsModalVisible("turn off");
        return basketModal.setIsModalVisible("turn off");
    }, []);

    return (
        <div className="content-wrapper">
            <div className="content-container">{children}</div>
        </div>
    );
};

export default CloseBasketModal;
