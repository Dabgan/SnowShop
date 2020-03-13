import React, { Component } from "react";
import "./header.css";
import logo from "./../../assets/images/logo.png";
import SearchBar from "./search bar/SearchBar";
import ContactComponent from "./contact info/ContactComponent";
import MobileHeaderIcon from "./mobile icon/MobileHeaderIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Header extends Component {
    state = {
        isSearchWidgetVisible: "none"
    };

    expandSearchWidget = () => {
        const isVisible = this.state.isSearchWidgetVisible;
        return this.setState({
            isSearchWidgetVisible: isVisible === "none" ? "block" : "none"
        });
    };

    render() {
        const { isSearchWidgetVisible } = this.state;
        const { expandSearchWidget } = this;
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand mx-3" href="/#">
                        <img src={logo} alt="logo" className="logo" />
                    </a>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <SearchBar />
                        <div className="contact-container">
                            <ContactComponent
                                icon="phone-alt"
                                info="420 213 769"
                            />
                            <ContactComponent
                                icon="envelope"
                                info="shop@snowshop.pl"
                            />
                        </div>

                        <MobileHeaderIcon
                            className="search-mobile"
                            icon="search"
                            handleClickMobileSearch={expandSearchWidget}
                        />

                        <MobileHeaderIcon
                            className="login"
                            icon="user"
                            info="Login"
                        />
                        <MobileHeaderIcon
                            className="shopping-cart"
                            icon="shopping-cart"
                            info="Basket"
                        />
                    </div>
                </nav>
                <div
                    id="mobileSearchWidget"
                    style={{
                        display: isSearchWidgetVisible
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
            </header>
        );
    }
}

export default Header;
