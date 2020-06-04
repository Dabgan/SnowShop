import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../routes/Routes.jsx";
import ScrollToTopOnMount from "../ScrollToTopOnMount.jsx";
import ToTopButton from "../ToTopButton.jsx";
import "./App.css";

import useSetModalVisibility from "../../hooks/useSetModalVisibility/useSetModalVisibility.jsx";

import { toast } from "react-toastify";
import useBasketLocal from "../../hooks/useBasket/useBasketLocal.jsx";
toast.configure();

export const BasketProductsContext = React.createContext();
export const BasketModalContext = React.createContext();

function App() {
    const [basketProducts, dispatch] = useBasketLocal();
    const [isModalVisible, setIsModalVisible] = useSetModalVisibility();

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
                <BasketModalContext.Provider
                    value={{ isModalVisible, setIsModalVisible }}
                >
                    <Routes />
                </BasketModalContext.Provider>
            </BasketProductsContext.Provider>
        </Router>
    );
}

export default App;
