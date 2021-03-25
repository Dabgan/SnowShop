import React, { useEffect, useContext } from 'react';
import { BasketModalContext } from '../../components/app/App';
import useCloseBurger from '../../hooks/useCloseBurger/useCloseBurger';

const CloseBasketModal = ({ children }) => {
    const basketModal = useContext(BasketModalContext);
    const setModal = basketModal.setIsModalVisible;

    useEffect(() => {
        setModal('turn off');
        return setModal('turn off');
    }, [setModal]);

    useCloseBurger();

    return (
        <div className="content-wrapper">
            <div className="content-container">{children}</div>
        </div>
    );
};

export default React.memo(CloseBasketModal);
