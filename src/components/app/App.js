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
import SnowboardCategory from "../../pages/categories/snowboard/SnowboardCategory";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <div className="main-container">
                    <Route path="/" exact>
                        <Banner />
                        <FeaturedProducts />
                        <DailyPromotion />
                        <Newsletter />
                    </Route>
                    <Route path="/snowboard">
                        <SnowboardCategory />
                    </Route>
                </div>
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
