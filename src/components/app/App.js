import React, { useState, useEffect, useReducer } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import firebase from "../../firebase.js";
import Routes from "../../routes/Routes.js";
import "./App.css";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import { toast } from "react-toastify";
toast.configure();

export const BasketProductsContext = React.createContext();

export const BasketModalContext = React.createContext();

const modalReducer = (state, action) => {
    return !state;
};

const basketReducer = (state, action) => {
    const basketRef = firebase.database().ref("basket");
    let productQuantity = 0;
    let newItemReference = null;
    switch (action.operation) {
        case "add":
            basketRef
                .orderByChild("title")
                .equalTo(action.product.title)
                .on("child_added", (data) => {
                    console.log(data.val());
                    return (
                        (productQuantity = data.val().quantity),
                        (newItemReference = data.ref)
                    );
                });
            if (newItemReference) {
                newItemReference.update({
                    quantity: action.quantity + productQuantity,
                });
            } else {
                const basketProduct = {
                    img: action.product.img,
                    title: action.product.title,
                    price: action.product.price,
                    crossedPrice: action.product.crossedPrice,
                    category: action.product.category,
                    availability: action.product.availability,
                    mark: action.product.mark,
                    quantity: action.quantity,
                    oldId: action.product.id,
                };
                basketRef.push(basketProduct);
            }
            return state;
        case "update":
            console.log(action.product);
            basketRef
                .orderByChild("title")
                .equalTo(action.product.title)
                .on("child_added", (data) => {
                    console.log(data.val());
                    return (
                        (productQuantity = data.val().quantity),
                        (newItemReference = data.ref)
                    );
                });
            if (newItemReference) {
                console.log(`to jest podane quanitt:`, action.quantity);
                newItemReference.update({
                    quantity:
                        action.update === "increment"
                            ? action.quantity + 1
                            : action.quantity - 1,
                });
            }
            return state;
        case "delete":
            const productRef = firebase
                .database()
                .ref(`basket/${action.productId}`);
            productRef.remove();
            return state;
        case "set":
            const newState = action.state;
            return newState;
        default:
            return state;
    }
};

function App() {
    const [basketProducts, dispatch] = useReducer(basketReducer, []);
    const [isModalVisible, setIsModalVisible] = useReducer(modalReducer, false);

    useEffect(() => {
        const basketProductsRef = firebase.database().ref("basket");
        console.log(`database updated`);
        basketProductsRef.on("value", (snapshot) => {
            let databaseProducts = snapshot.val();
            let newProducts = [];
            for (let dbProduct in databaseProducts) {
                newProducts.push({
                    id: dbProduct,
                    img: databaseProducts[dbProduct].img,
                    title: databaseProducts[dbProduct].title,
                    price: databaseProducts[dbProduct].price,
                    crossedPrice: databaseProducts[dbProduct].crossedPrice,
                    category: databaseProducts[dbProduct].category,
                    availability: databaseProducts[dbProduct].availability,
                    mark: databaseProducts[dbProduct].mark,
                    quantity: databaseProducts[dbProduct].quantity,
                    oldId: databaseProducts[dbProduct].oldId,
                });
            }
            dispatch({ operation: "set", state: newProducts });
        });
    }, []);

    return (
        <Router>
            <BasketProductsContext.Provider
                value={{
                    basketProducts,
                    manageBasket: dispatch,
                }}
            >
                <BasketModalContext.Provider
                    value={{ isModalVisible, setIsModalVisible }}
                >
                    <Header />
                    <>
                        <div className="main-container">
                            <Routes />
                        </div>
                    </>
                    <Footer />
                </BasketModalContext.Provider>
            </BasketProductsContext.Provider>
        </Router>
    );
}

export default App;
