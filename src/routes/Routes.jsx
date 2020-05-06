import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import About from "../pages/informations/About/About";
import Contact from "../pages/informations/Contact/Contact";
import firebase from "../firebase";
import InformationComponent from "../pages/informations/others/InformationComponent";
import BasketComponent from "../pages/basket/BasketComponent";
import Banner from "../components/banner/Banner";
import DailyPromotion from "../components/daily promotion/DailyPromotion";
import Newsletter from "../components/newsletter/Newsletter";
import DisplayProducts from "../components/display products/DisplayProducts";
import CategoryComponent from "../pages/categories/CategoryComponent";
import ProductComponent from "../pages/products/ProductComponent";
import PathNotFound from "../pages/404 page/PathNotFound";
import CloseBasketModal from "../components/CloseBasketModal";

export const ProductsContext = React.createContext();

const Routes = () => {
    const [otherRoutes, setOtherRoutes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [errorPage, setErrorPage] = useState(false);

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
        });
    }, []);

    return (
        <>
            <ProductsContext.Provider value={products}>
                <Switch>
                    <Route path="/" exact>
                        <Banner />
                        <DisplayProducts title={"Featured products"} />
                        <DailyPromotion />
                        <Newsletter />
                    </Route>
                    <Route exact path="/basket">
                        <BasketComponent />
                    </Route>
                    <Route exact path="/about">
                        <CloseBasketModal />
                        <About />
                    </Route>
                    <Route exact path="/contact">
                        <CloseBasketModal />
                        <Contact />
                    </Route>

                    {otherRoutes.map((link) => (
                        <Route exact path={`/${link.path}`} key={link.id}>
                            <CloseBasketModal />
                            <InformationComponent headerName={link.name} />
                        </Route>
                    ))}
                    {products.map((product) => (
                        <Route
                            exact
                            path={`/${product.category}/${product.id}`}
                            key={product.id}
                        >
                            <CloseBasketModal />
                            <ProductComponent productInfo={product} />
                        </Route>
                    ))}
                    {categories.map((category) => (
                        <Route
                            exact
                            path={`/${category.name}`}
                            key={category.id}
                        >
                            <CloseBasketModal />
                            <CategoryComponent
                                categoryName={category.name}
                                key={category.id}
                                products={products}
                            />
                        </Route>
                    ))}
                    {errorPage && (
                        <Route to="*">
                            <PathNotFound />
                        </Route>
                    )}
                </Switch>
            </ProductsContext.Provider>
        </>
    );
};

export default Routes;
