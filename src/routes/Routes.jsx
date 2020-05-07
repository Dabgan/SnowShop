import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import About from "../pages/informations/About/About";
import Contact from "../pages/informations/Contact/Contact";
import firebase from "../firebase";
import InformationComponent from "../pages/informations/others/InformationComponent";
import BasketComponent from "../pages/basket/BasketComponent";
import DailyPromotion from "../components/daily promotion/DailyPromotion";
import Newsletter from "../components/newsletter/Newsletter";
import DisplayProducts from "../components/display products/DisplayProducts";
import CategoryComponent from "../pages/categories/CategoryComponent";
import ProductComponent from "../pages/products/ProductComponent";
import PathNotFound from "../pages/404 page/PathNotFound";
import CloseBasketModal from "../components/CloseBasketModal";
import HeroImage from "../components/hero image/HeroImage";
import Icons from "../icons";

export const ProductsContext = React.createContext();

const Routes = () => {
    const [otherRoutes, setOtherRoutes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [errorPage, setErrorPage] = useState(false);
    const [loader, setLoader] = useState(true);

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
            setErrorPage(!errorPage);
            setLoader(false);
        });
    }, []);

    return (
        <>
            <ProductsContext.Provider value={products}>
                <div
                    className={`super-main-wrapper ${
                        loader ? "super-main-wrapper2" : ""
                    }`}
                >
                    <Icons.FaRegSnowflake
                        size="10rem"
                        className="icon-spinning"
                        style={{ display: loader ? "block" : "none" }}
                    ></Icons.FaRegSnowflake>
                    <div
                        className="main-containerr"
                        style={{ display: loader ? "none" : "block" }}
                    >
                        <Switch>
                            <Route path="/" exact>
                                <HeroImage />
                                <div className="main-wrapper">
                                    <div className="main-container">
                                        <DisplayProducts
                                            title={"Featured products"}
                                        />
                                        <DailyPromotion />
                                        <Newsletter />
                                    </div>
                                </div>
                            </Route>
                            <Route exact path="/basket">
                                <div className="main-wrapper">
                                    <div className="main-container">
                                        <BasketComponent />
                                    </div>
                                </div>
                            </Route>
                            <Route exact path="/about">
                                <div className="main-wrapper">
                                    <div className="main-container">
                                        <CloseBasketModal />
                                        <About />
                                    </div>
                                </div>
                            </Route>
                            <Route exact path="/contact">
                                <div className="main-wrapper">
                                    <div className="main-container">
                                        <CloseBasketModal />
                                        <Contact />
                                    </div>
                                </div>
                            </Route>

                            {otherRoutes.map((link) => (
                                <Route
                                    exact
                                    path={`/${link.path}`}
                                    key={link.id}
                                >
                                    <div className="main-wrapper">
                                        <div className="main-container">
                                            <CloseBasketModal />
                                            <InformationComponent
                                                headerName={link.name}
                                            />
                                        </div>
                                    </div>
                                </Route>
                            ))}
                            {products.map((product) => (
                                <Route
                                    exact
                                    path={`/${product.category}/${product.id}`}
                                    key={product.id}
                                >
                                    <div className="main-wrapper">
                                        <div className="main-container">
                                            <CloseBasketModal />
                                            <ProductComponent
                                                productInfo={product}
                                            />
                                        </div>
                                    </div>
                                </Route>
                            ))}
                            {categories.map((category) => (
                                <Route
                                    exact
                                    path={`/${category.name}`}
                                    key={category.id}
                                >
                                    <div className="main-wrapper">
                                        <div className="main-container">
                                            <CloseBasketModal />
                                            <CategoryComponent
                                                categoryName={category.name}
                                                key={category.id}
                                                products={products}
                                            />
                                        </div>
                                    </div>
                                </Route>
                            ))}
                            {errorPage && (
                                <Route to="*">
                                    <PathNotFound />
                                </Route>
                            )}
                        </Switch>
                    </div>
                </div>
            </ProductsContext.Provider>
        </>
    );
};

export default Routes;
