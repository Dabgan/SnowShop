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

function App() {
    return (
        <>
            <Header />
            <div className="main-container">
                <Banner />
                <FeaturedProducts />
                <DailyPromotion />
                <Newsletter />
            </div>
            <Footer />
        </>
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
