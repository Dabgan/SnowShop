import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import About from "../pages/informations/About/About";
import Contact from "../pages/informations/Contact/Contact";
import firebase from "../firebase";
import "../assets/images/products/products";
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
import Loader from "../components/loader/Loader";
import DisplayCategory from "../components/display category/DisplayCategory";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import OrderStepOne from "../pages/order/step one/OrderStepOne";

import OrderStepTwo from "../pages/order/step two/OrderStepTwo";
import OrderStepThree from "../pages/order/step three/OrderStepThree";
import OrderStepFour from "../pages/order/step four/OrderStepFour";

export const ProductsContext = React.createContext();

const Routes = () => {
    const [otherRoutes, setOtherRoutes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [errorPage, setErrorPage] = useState(false);
    const [isPageLoaded, setIsPageLoaded] = useState(true);

    useEffect(() => {
        const routesRef = firebase.database().ref("other routes");
        routesRef.on("value", (snapshot) => {
            let databaseRoutes = snapshot.val();
            let newRoutes = [];
            for (let dbRoute in databaseRoutes) {
                newRoutes.push({
                    ...databaseRoutes[dbRoute],
                    id: dbRoute,
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
                    ...databaseCategories[dbCategory],
                    id: dbCategory,
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
                    ...databaseProducts[dbProduct],
                    id: dbProduct,
                });
            }
            setProducts(newProducts);
            setErrorPage(true);
            setIsPageLoaded(false);
        });
    }, []);

    return (
        <>
            <ProductsContext.Provider value={products}>
                <div
                    className={`main-wrapper ${isPageLoaded && "flex-center"}`}
                >
                    <Loader isPageLoaded={isPageLoaded} />
                    <div style={{ display: isPageLoaded ? "none" : "block" }}>
                        <Header />
                        <Switch>
                            <Route path="/" exact>
                                <HeroImage />
                                <CloseBasketModal>
                                    <DisplayProducts
                                        title={"Featured products"}
                                        random={false}
                                    />
                                    <DailyPromotion />
                                    <DisplayCategory />
                                    <Newsletter />
                                </CloseBasketModal>
                            </Route>
                            <Route exact path="/basket">
                                <CloseBasketModal>
                                    <BasketComponent />
                                </CloseBasketModal>
                            </Route>
                            <Route exact path="/about">
                                <CloseBasketModal>
                                    <About />
                                </CloseBasketModal>
                            </Route>
                            <Route exact path="/contact">
                                <CloseBasketModal>
                                    <Contact />
                                </CloseBasketModal>
                            </Route>
                            <Route exact path="/order/step1">
                                <CloseBasketModal>
                                    <OrderStepOne />
                                </CloseBasketModal>
                            </Route>
                            <Route exact path="/order/step2">
                                <CloseBasketModal>
                                    <OrderStepTwo />
                                </CloseBasketModal>
                            </Route>
                            <Route exact path="/order/step3">
                                <CloseBasketModal>
                                    <OrderStepThree />
                                </CloseBasketModal>
                            </Route>
                            <Route exact path="/order/step4">
                                <CloseBasketModal>
                                    <OrderStepFour />
                                </CloseBasketModal>
                            </Route>
                            {/* <Route exact path="/admin">
                                <CloseBasketModal>
                                    <Products />
                                </CloseBasketModal>
                            </Route> */}
                            {otherRoutes.map((link) => (
                                <Route
                                    exact
                                    path={`/${link.path}`}
                                    key={link.id}
                                >
                                    <CloseBasketModal>
                                        <InformationComponent
                                            headerName={link.name}
                                        />
                                    </CloseBasketModal>
                                </Route>
                            ))}
                            {products.map((product) => (
                                <Route
                                    exact
                                    path={`/${product.category}/${product.id}`}
                                    key={product.id}
                                >
                                    <CloseBasketModal>
                                        <ProductComponent
                                            productInfo={product}
                                        />
                                    </CloseBasketModal>
                                </Route>
                            ))}
                            {categories.map((category) => (
                                <Route
                                    exact
                                    path={`/${category.name}`}
                                    key={category.id}
                                >
                                    <CloseBasketModal>
                                        <CategoryComponent
                                            categoryName={category.name}
                                            key={category.id}
                                            products={products}
                                        />
                                    </CloseBasketModal>
                                </Route>
                            ))}
                            {errorPage && (
                                <Route to="*">
                                    <CloseBasketModal>
                                        <PathNotFound />
                                    </CloseBasketModal>
                                </Route>
                            )}
                        </Switch>
                        <Footer />
                    </div>
                </div>
            </ProductsContext.Provider>
        </>
    );
};

export default Routes;
