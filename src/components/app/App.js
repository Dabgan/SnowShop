import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faUser,
    faShoppingCart,
    faSearch,
    faPhoneAlt,
    faEnvelope,
    faLongArrowAltRight
} from "@fortawesome/free-solid-svg-icons";

import Header from "../header/Header";
import FeaturedProducts from "../featured products/FeaturedProducts";
import Banner from "../banner/Banner";
import DailyPromotion from "../daily promotion/DailyPromotion";
import Newsletter from "../newsletter/Newsletter";

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
        </>
    );
}
library.add(
    faUser,
    faShoppingCart,
    faSearch,
    faPhoneAlt,
    faEnvelope,
    faLongArrowAltRight
);
export default App;
