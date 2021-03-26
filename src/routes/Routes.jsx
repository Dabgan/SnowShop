import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import firebase from '../firebase';

import '../assets/images/products/products';

const Header = lazy(() => import('../components/header/Header'));
const HeroImage = lazy(() => import('../components/hero image/HeroImage'));
const CloseBasketModal = lazy(() => import('../pages/basket/CloseBasketModal'));
const DisplayProducts = lazy(() => import('../components/display products/DisplayProducts'));
const DailyPromotion = lazy(() => import('../components/daily promotion/DailyPromotion'));
const Newsletter = lazy(() => import('../components/newsletter/Newsletter'));
const Footer = lazy(() => import('../components/footer/Footer'));

const About = lazy(() => import('../pages/informations/About/About'));
const Contact = lazy(() => import('../pages/informations/Contact/Contact'));
const InformationComponent = lazy(() => import('../pages/informations/others/InformationComponent'));
const BasketComponent = lazy(() => import('../pages/basket/BasketComponent'));
const CategoryComponent = lazy(() => import('../pages/categories/CategoryComponent'));
const ProductComponent = lazy(() => import('../pages/products/ProductComponent'));
const PathNotFound = lazy(() => import('../pages/404 page/PathNotFound'));
const DisplayCategory = lazy(() => import('../components/display category/DisplayCategory'));
const OrderStepOne = lazy(() => import('../pages/order/step one/OrderStepOne'));
const OrderStepTwo = lazy(() => import('../pages/order/step two/OrderStepTwo'));
const OrderStepThree = lazy(() => import('../pages/order/step three/OrderStepThree'));
const OrderStepFour = lazy(() => import('../pages/order/step four/OrderStepFour'));

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
                <Suspense fallback={null}>
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
                </Suspense>
            </ProductsContext.Provider>
        </>
    );
};

export default React.memo(Routes);
