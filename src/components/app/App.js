import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from "../../firebase.js";
import "./App.css";
import { library } from "../../fontAwesomeIcons";

import Header from "../header/Header";
import DisplayProducts from "../featured products/DisplayProducts";
import Banner from "../banner/Banner";
import DailyPromotion from "../daily promotion/DailyPromotion";
import Newsletter from "../newsletter/Newsletter";
import Footer from "../footer/Footer";
import CategoryComponent from "../../pages/categories/CategoryComponent";
import ProductComponent from "../../pages/products/ProductComponent";
import About from "../../pages/informations/About/About";
import Contact from "../../pages/informations/Contact/Contact";
import InformationComponent from "../../pages/informations/others/InformationComponent";
import image from "../../assets/images/products/snowboard_set.jpg";

function App() {
    const [products, setProducts] = useState([]);
    const [otherRoutes, setOtherRoutes] = useState([]);
    const [categories, setCategories] = useState([]);

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
        const routesRef = firebase.database().ref("other routes");
        routesRef.on("value", (snapshot) => {
            let databaseRoutes = snapshot.val();
            let newRoutes = [];
            for (let dbRoute in databaseRoutes) {
                newRoutes.push({
                    id: dbRoute,
                    name: databaseRoutes[dbRoute].name,
                    path: databaseRoutes[dbRoute].path,
                });
            }
            setOtherRoutes(newRoutes);
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
    const addProduct = () => {
        const productsRef = firebase.database().ref("products");
        const product = {
            img: image,
            title: "Beliar Emperor Snowboard Set",
            price: 229.99,
            crossedPrice: 399.99,
            category: "boots",
            availability: 2,
            mark: "beliar",
        };
        productsRef.push(product);
    };

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
        <Router>
            <ProductsContext.Provider value={products}>
                <Header />
                {/* <button className="my-btn" onClick={() => addProduct()}>
                    Add Product to database
                </button> */}
                <Switch>
                    <>
                        <div className="main-container">
                            <Route path="/" exact>
                                <Banner />
                                <DisplayProducts title={"Featured products"} />
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
                            <Route path="/product">
                                <ProductComponent />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                            {otherRoutes.map((link) => (
                                <Route path={`/${link.path}`} key={link.id}>
                                    <InformationComponent
                                        headerName={link.name}
                                    />
                                </Route>
                            ))}
                            {/* Here all the products paths are rendered */}
                            {products.map((product) => (
                                <Route
                                    path={`/${product.category}/${product.id}`}
                                    key={product.id}
                                >
                                    <ProductComponent productInfo={product} />
                                </Route>
                            ))}
                        </div>
                    </>
                </Switch>
                <Footer />
            </ProductsContext.Provider>
        </Router>
    );
}

export default App;
export const ProductsContext = React.createContext();
