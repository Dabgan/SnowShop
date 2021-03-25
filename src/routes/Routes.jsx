import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../pages/informations/About/About';
import Contact from '../pages/informations/Contact/Contact';
import firebase from '../firebase';
import InformationComponent from '../pages/informations/others/InformationComponent';
import BasketComponent from '../pages/basket/BasketComponent';
import DailyPromotion from '../components/daily promotion/DailyPromotion';
import Newsletter from '../components/newsletter/Newsletter';
import DisplayProducts from '../components/display products/DisplayProducts';
import CategoryComponent from '../pages/categories/CategoryComponent';
import ProductComponent from '../pages/products/ProductComponent';
import PathNotFound from '../pages/404 page/PathNotFound';
import CloseBasketModal from '../pages/basket/CloseBasketModal';
import HeroImage from '../components/hero image/HeroImage';
import DisplayCategory from '../components/display category/DisplayCategory';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import OrderStepOne from '../pages/order/step one/OrderStepOne';
import OrderStepTwo from '../pages/order/step two/OrderStepTwo';
import OrderStepThree from '../pages/order/step three/OrderStepThree';
import OrderStepFour from '../pages/order/step four/OrderStepFour';

import '../assets/images/products/products';

export const ProductsContext = React.createContext();

const Routes = () => {
    const [otherRoutes, setOtherRoutes] = useState([]);
    const [categories, setCategories] = useState([
        { name: 'boots', id: 1 },
        { name: 'snowboards', id: 2 },
        { name: 'goggles', id: 3 },
        { name: 'gloves', id: 4 },
        { name: 'helmets', id: 5 },
    ]);
    const [products, setProducts] = useState([
        { id: 1, category: 'snowboards' },
        { id: 2, category: 'snowboards' },
        { id: 3, category: 'snowboards' },
        { id: 4, category: 'snowboards' },
        { id: 5, category: 'boots' },
        { id: 6, category: 'boots' },
        { id: 7, category: 'boots' },
        { id: 8, category: 'boots' },
        { id: 9, category: 'boots' },
        { id: 10, category: 'boots' },
        { id: 11, category: 'boots' },
        { id: 12, category: 'boots' },
        { id: 13, category: 'goggles' },
        { id: 14, category: 'goggles' },
        { id: 15, category: 'goggles' },
        { id: 16, category: 'goggles' },
        { id: 17, category: 'goggles' },
        { id: 18, category: 'goggles' },
        { id: 19, category: 'gloves' },
        { id: 20, category: 'gloves' },
        { id: 21, category: 'gloves' },
        { id: 22, category: 'helmets' },
        { id: 23, category: 'helmets' },
        { id: 24, category: 'helmets' },
        { id: 25, category: 'helmets' },
    ]);
    const [errorPage, setErrorPage] = useState(false);

    useEffect(() => {
        const routesRef = firebase.database().ref('other routes');
        routesRef.on('value', (snapshot) => {
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
        const categoriesRef = firebase.database().ref('categories');
        categoriesRef.on('value', (snapshot) => {
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
        const productsRef = firebase.database().ref('products');
        productsRef.on('value', (snapshot) => {
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
        });
    }, []);

    return (
        <>
            <ProductsContext.Provider value={products}>
                <div className={`main-wrapper `}>
                    <Header />
                    <Switch>
                        <Route path="/" exact>
                            <HeroImage />
                            <CloseBasketModal>
                                <DisplayProducts title={'Featured products'} random={false} />
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
                        {otherRoutes.map((link) => (
                            <Route exact path={`/${link.path}`} key={link.id}>
                                <CloseBasketModal>
                                    <InformationComponent headerName={link.name} />
                                </CloseBasketModal>
                            </Route>
                        ))}
                        {products.map((product) => (
                            <Route exact path={`/${product.category}/${product.id}`} key={product.id}>
                                <CloseBasketModal>
                                    <ProductComponent productInfo={product} />
                                </CloseBasketModal>
                            </Route>
                        ))}
                        {categories.map((category) => (
                            <Route exact path={`/${category.name}`} key={category.id}>
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
            </ProductsContext.Provider>
        </>
    );
};

export default React.memo(Routes);
