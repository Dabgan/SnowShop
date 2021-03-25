import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../../routes/Routes.jsx';
import ScrollToTopOnMount from './ScrollToTopOnMount.jsx';
import ToTopButton from './ToTopButton';
import './App.scss';

import useSetModalVisibility from '../../hooks/useSetModalVisibility/useSetModalVisibility.jsx';

import { toast } from 'react-toastify';
import useBasketLocal from '../../hooks/useBasket/useBasketLocal.jsx';
toast.configure();

export const BasketProductsContext = React.createContext();
export const BasketModalContext = React.createContext();
export const BurgerMenuContext = React.createContext();

function App() {
    const [basketProducts, dispatch] = useBasketLocal();
    const [isModalVisible, setIsModalVisible] = useSetModalVisibility();
    const [openBurger, setOpenBurger] = useState(false);

    return (
        <Router>
            <ScrollToTopOnMount />
            <ToTopButton />
            <BasketProductsContext.Provider
                value={{
                    basketProducts,
                    manageBasket: dispatch,
                }}
            >
                <BasketModalContext.Provider value={{ isModalVisible, setIsModalVisible }}>
                    <BurgerMenuContext.Provider value={{ openBurger, setOpenBurger }}>
                        <Routes />
                    </BurgerMenuContext.Provider>
                </BasketModalContext.Provider>
            </BasketProductsContext.Provider>
        </Router>
    );
}

export default App;
