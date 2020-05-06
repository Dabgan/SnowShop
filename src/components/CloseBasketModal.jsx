import { useEffect, useContext } from "react";
import { BasketModalContext } from "../components/app/App";

const CloseBasketModal = () => {
    const basketModal = useContext(BasketModalContext);

    useEffect(() => {
        basketModal.setIsModalVisible(true);
        return basketModal.setIsModalVisible(true);
    }, []);

    return null;
};

export default CloseBasketModal;
