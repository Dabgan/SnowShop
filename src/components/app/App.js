import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faUser,
    faShoppingCart,
    faSearch,
    faPhoneAlt,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";
// import { fas } from "@fortawesome/free-solid-svg-icons";

import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import FeaturedProducts from "../featured products/FeaturedProducts";
import Banner from "../banner/Banner";
import DailyPromotion from "../daily promotion/DailyPromotion";
import Newsletter from "../newsletter/Newsletter";

function App() {
    return (
        <>
            <Header />
            {/* <Navbar />
            <Banner />
            <FeaturedProducts />
            <DailyPromotion />
            <Newsletter /> */}
        </>
    );
}
library.add(faUser, faShoppingCart, faSearch, faPhoneAlt, faEnvelope);
export default App;
