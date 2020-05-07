import { useEffect, useContext } from "react";
import { BasketModalContext } from "../components/app/App";

const CloseBasketModal = () => {
    const basketModal = useContext(BasketModalContext);

    useEffect(() => {
        basketModal.setIsModalVisible("turn off");
        return basketModal.setIsModalVisible("turn off");
    }, []);

    return null;
};

export default CloseBasketModal;
