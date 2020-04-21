import React, { useState, useContext } from "react";
import "./header.css";
import logo from "./../../assets/images/logo.png";
import SearchBar from "./search bar/SearchBar";
import CategoriesMenu from "./categories menu/CategoriesMenu";
import { Link } from "react-router-dom";
import { BasketProductsContext } from "../app/App";
import Icons from "../../icons";

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
                        <div>
                            <Icons.FaPhoneAlt />
                            <p>420 213 769</p>
                        </div>
                        <div>
                            <Icons.FaEnvelope size="20px" />
                            <p>shop@snowshop.pl</p>
                        </div>
                    </div>
                    <div
                        className="search-mobile"
                        onClick={() => handleSearchWidget()}
                    >
                        <Icons.FaSearch />
                    </div>

                    <div className="login">
                        <Icons.FaUser />
                        <p>Login</p>
                    </div>

                    <Link to="/basket" className="shopping-cart">
                        <Icons.FaShoppingCart />
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
                        <Icons.FaSearch />
                    </button>
                </form>
            </div>
            <CategoriesMenu />
        </header>
    );
};

export default Header;
