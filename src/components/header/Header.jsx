import React, { useState } from "react";
import "./header.css";
import logo from "./../../assets/images/logo.png";
import SearchBar from "./search bar/SearchBar";
import Icons from "../../icons";
import BasketModal from "../../pages/basket/basket modal/BasketModal";
import ShoppingCart from "./shopping cart/ShoppingCart";
import Navbar from "./nav bar/Navbar";

const Header = () => {
    const [searchWidget, setSearchWidget] = useState(false);

    const handleSearchWidget = () => {
        return setSearchWidget(!searchWidget);
    };

    return (
        <>
            <header>
                <nav className="header-top navbar navbar-expand-lg navbar-light bg-light">
                    <a href="/">
                        <img src={logo} alt="logo" className="logo" />
                    </a>
                    <div className="header-top-menu-container">
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

                            {/* <div className="login">
                                <Icons.FaUser />
                                <p>Login</p>
                            </div> */}

                            <ShoppingCart />
                            <BasketModal />
                        </div>
                    </div>
                </nav>
                <Navbar />
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
            </header>
        </>
    );
};

export default Header;
