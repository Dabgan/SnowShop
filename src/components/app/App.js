import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../routes/Routes.jsx";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ScrollToTopOnMount from "../ScrollToTopOnMount.jsx";
import ToTopButton from "../ToTopButton.jsx";
import "./App.css";

import useSetModalVisibility from "../../hooks/useSetModalVisibility/useSetModalVisibility.jsx";

// import Products from "../Products.jsx";
import { toast } from "react-toastify";
import useBasketLocal from "../../hooks/useBasket/useBasketLocal.jsx";
toast.configure();

export const BasketProductsContext = React.createContext();
export const BasketModalContext = React.createContext();

function App() {
    // useEffect(() => {}, []);

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
                    {/* <Products /> */}
                    <Header />
                    <Routes />
                    <Footer />
                </BasketModalContext.Provider>
            </BasketProductsContext.Provider>
        </Router>
    );
}

export default App;
