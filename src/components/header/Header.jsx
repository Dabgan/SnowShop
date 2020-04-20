import React, { useState, useContext } from "react";
import "./header.css";
import logo from "./../../assets/images/logo.png";
import SearchBar from "./search bar/SearchBar";
import ContactComponent from "./contact info/ContactComponent";
import MobileHeaderIcon from "./mobile icon/MobileHeaderIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoriesMenu from "./categories menu/CategoriesMenu";
import { Link } from "react-router-dom";
import { BasketProductsContext } from "../app/App";

const Header = () => {
    const basketContext = useContext(BasketProductsContext);
    const [searchWidget, setSearchWidget] = useState(false);
    const handleSearchWidget = () => {
        return setSearchWidget(!searchWidget);
    };

    return (
        <header>
            <nav className="header-top navbar navbar-expand-lg navbar-light bg-light">
                <button
                    className="navbar-toggler bg-secondary"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand mx-3" href="/">
                    <img src={logo} alt="logo" className="logo" />
                </a>

                <div className="header-top-menu collapse navbar-collapse">
                    <SearchBar />
                    <div className="contact-container">
                        <ContactComponent icon="phone-alt" info="420 213 769" />
                        <ContactComponent
                            icon="envelope"
                            info="shop@snowshop.pl"
                        />
                    </div>

                    <MobileHeaderIcon
                        className="search-mobile"
                        icon="search"
                        handleClickMobileSearch={() => handleSearchWidget()}
                    />

                    <MobileHeaderIcon
                        className="login"
                        icon="user"
                        info="Login"
                    />
                    <Link to="/basket" className="shopping-cart">
                        <FontAwesomeIcon icon="shopping-cart" />
                        <p>Basket</p>
                        <span
                            style={{
                                display: basketContext.basketProducts.length
                                    ? "block"
                                    : "none",
                            }}
                            className="badge badge-info shopping-cart-badge"
                        >
                            {basketContext.basketProducts.length}
                        </span>
                    </Link>
                </div>
            </nav>
            <div
                id="mobileSearchWidget"
                style={{
                    display: searchWidget ? "block" : "none",
                }}
                className={"mobile-search-widget navbar-light bg-light"}
            >
                <form className="">
                    <input type="text" placeholder="Search" />
                    <button type="submit" className="mobile-search-icon">
                        <FontAwesomeIcon icon="search" />
                    </button>
                </form>
            </div>
            <CategoriesMenu />
        </header>
    );
};

export default Header;
