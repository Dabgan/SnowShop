import React from "react";
import logo from "./../../assets/images/logo.png";
import SearchBar from "./SearchBar";
import "./header.css";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand mx-3" href="/#">
                    <img src={logo} alt="logo" className="logo" />
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <SearchBar />
                    <div className="contact-container">
                        <p>420 213 769</p>
                        <p>shop@snowshop.pl</p>
                    </div>

                    <div className="login">
                        <span>X</span>
                        <p>Login</p>
                    </div>

                    <div className="shopping-cart">
                        <span>X</span>
                        <p>Basket</p>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
