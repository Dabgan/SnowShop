import React, { useState, useEffect, useReducer } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from "../../firebase.js";
import "./App.css";
import Routes from "../Routes.jsx";

import Header from "../header/Header";
import DisplayProducts from "../featured products/DisplayProducts";
import Banner from "../banner/Banner";
import DailyPromotion from "../daily promotion/DailyPromotion";
import Newsletter from "../newsletter/Newsletter";
import Footer from "../footer/Footer";
import CategoryComponent from "../../pages/categories/CategoryComponent";
import ProductComponent from "../../pages/products/ProductComponent";
// import image from "../../assets/images/products/snowboard_set.jpg";
import { toast } from "react-toastify";
toast.configure();

export const BasketProductsContext = React.createContext();
export const ProductsContext = React.createContext();

const reducer = (state, action) => {
    console.log(`this is reducer`, state, action);
    switch (action.operation) {
        case "add":
            console.log(`this is reducer`, state, action);
            const productsBasketRef = firebase.database().ref("basket");

            const basketProduct = {
                id: action.product.id,
                img: action.product.img,
                title: action.product.title,
                price: action.product.price,
                crossedPrice: action.product.crossedPrice,
                category: action.product.category,
                availability: action.product.availability,
                mark: action.product.mark,
                quantity: action.quantity,
            };
            productsBasketRef.push(basketProduct);
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
    const [basketProducts, dispatch] = useReducer(reducer, []);

    // const addProductToBasket = () => {};

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

    // const addProduct = () => {
    // const productsRef = firebase.database().ref("products");
    // const product = {
    //     img: image,
    //     title: "Beliar Emperor Snowboard Set",
    //     price: 229.99,
    //     crossedPrice: 399.99,
    //     category: "boots",
    //     availability: 2,
    //     mark: "beliar",
    // };
    // productsRef.push(product);
    // };

    // const addCategory = () => {
    //     const productsRef = firebase.database().ref("categories");
    //     // const product = {
    //     //     img: image4,
    //     //     title: "Helmet Pulsar 2020",
    //     //     price: 79.99,
    //     //     crossedPrice: 129.99,
    //     // };
    //     productsRef.push(categories[6]);
    // };

    return (
        <Router forceRefresh={true}>
            <ProductsContext.Provider value={products}>
                <BasketProductsContext.Provider
                    value={{ basketProducts, manageBasket: dispatch }}
                >
                    <Header />
                    {/* <button className="my-btn" onClick={() => addProduct()}>
                    Add Product to database
                </button> */}
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
                </BasketProductsContext.Provider>
            </ProductsContext.Provider>
        </Router>
    );
}

export default App;
