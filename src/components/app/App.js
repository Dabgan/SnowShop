import React, { useState, useEffect, useReducer } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from "../../firebase.js";
import Routes from "../Routes.jsx";
import "./App.css";

import Header from "../header/Header";
import DisplayProducts from "../featured products/DisplayProducts";
import Banner from "../banner/Banner";
import DailyPromotion from "../daily promotion/DailyPromotion";
import Newsletter from "../newsletter/Newsletter";
import Footer from "../footer/Footer";
import CategoryComponent from "../../pages/categories/CategoryComponent";
import ProductComponent from "../../pages/products/ProductComponent";
import { toast } from "react-toastify";
import Products from "../Products.jsx";
toast.configure();

export const BasketProductsContext = React.createContext();
export const ProductsContext = React.createContext();
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
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [basketProducts, dispatch] = useReducer(basketReducer, []);
    const [isModalVisible, setIsModalVisible] = useReducer(modalReducer, false);

    useEffect(() => {
        const basketProductsRef = firebase.database().ref("basket");
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

    useEffect(() => {
        const productsRef = firebase.database().ref("products");
        productsRef.on("value", (snapshot) => {
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
                });
            }
            setProducts(newProducts);
        });
    }, []);

    useEffect(() => {
        const categoriesRef = firebase.database().ref("categories");
        categoriesRef.on("value", (snapshot) => {
            let databaseCategories = snapshot.val();
            let newCategories = [];
            for (let dbCategory in databaseCategories) {
                newCategories.push({
                    id: dbCategory,
                    name: databaseCategories[dbCategory].name,
                });
            }
            setCategories(newCategories);
        });
    }, []);

    return (
        <Router forceRefresh={true}>
            <ProductsContext.Provider value={products}>
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
                        <Switch>
                            <>
                                <div className="main-container">
                                    <Route path="/" exact>
                                        <Banner />
                                        <DisplayProducts
                                            title={"Featured products"}
                                        />
                                        <DailyPromotion />
                                        <Newsletter />
                                    </Route>
                                    {categories.map((category) => (
                                        <Route
                                            path={`/${category.name}`}
                                            key={category.id}
                                            exact
                                        >
                                            <CategoryComponent
                                                categoryName={category.name}
                                                key={category.id}
                                            />
                                        </Route>
                                    ))}
                                    <Routes />

                                    {/* Here all the products paths are rendered */}
                                    {products.map((product) => (
                                        <Route
                                            path={`/${product.category}/${product.id}`}
                                            key={product.id}
                                        >
                                            <ProductComponent
                                                productInfo={product}
                                            />
                                        </Route>
                                    ))}
                                </div>
                            </>
                        </Switch>
                        <Footer />
                    </BasketModalContext.Provider>
                </BasketProductsContext.Provider>
            </ProductsContext.Provider>
        </Router>
    );
}

export default App;
