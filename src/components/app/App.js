import React from "react";
import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faUser,
    faShoppingCart,
    faSearch,
    faPhoneAlt,
    faEnvelope,
    faLongArrowAltRight,
    faChevronCircleUp
} from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faFacebook,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import Header from "../header/Header";
import FeaturedProducts from "../featured products/FeaturedProducts";
import Banner from "../banner/Banner";
import DailyPromotion from "../daily promotion/DailyPromotion";
import Newsletter from "../newsletter/Newsletter";
import Footer from "../footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CategoryComponent from "../../pages/categories/CategoryComponent";

function App() {
    const categories = [
        { name: "snowboard", items: 6, id: 0 },
        { name: "boots", items: 3, id: 1 },
        { name: "goggles", items: 5, id: 2 },
        { name: "gloves", items: 4, id: 3 },
        { name: "helmets", items: 2, id: 4 }
    ];

    return (
        <Router>
            <Header />
            <Switch>
                <>
                    <div className="main-container">
                        <Route path="/" exact>
                            <Banner />
                            <FeaturedProducts />
                            <DailyPromotion />
                            <Newsletter />
                        </Route>
                        {categories.map(category => (
                            <Route path={`/${category.name}`} key={category.id}>
                                <CategoryComponent
                                    categoryName={category.name}
                                    numberOfItems={category.items}
                                    key={category.id}
                                />
                            </Route>
                        ))}
                    </div>
                </>
            </Switch>
            <Footer />
        </Router>
    );
}
library.add(
    faUser,
    faShoppingCart,
    faSearch,
    faPhoneAlt,
    faEnvelope,
    faLongArrowAltRight,
    faGithub,
    faFacebook,
    faLinkedin,
    faChevronCircleUp
);
export default App;
