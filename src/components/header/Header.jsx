import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaSearch } from 'react-icons/fa';
import SearchBar from './search bar/SearchBar';
import BasketModal from '../../pages/basket/basket modal/BasketModal';
import ShoppingCart from './shopping cart/ShoppingCart';
import Navbar from './nav bar/Navbar';
import logo from './../../assets/images/logo.png';
import Img from 'react-cool-img';

import './header.scss';

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
                        <Img src={logo} alt="logo" className="logo" />
                    </a>
                    <div className="header-top-menu-container">
                        <div className="header-top-menu collapse navbar-collapse">
                            <SearchBar />
                            <div className="contact-container">
                                <div>
                                    <FaPhoneAlt />
                                    <p>420 777 777</p>
                                </div>
                                <div>
                                    <FaEnvelope size="20px" />
                                    <p>shop@snowshop.pl</p>
                                </div>
                            </div>
                            <div className="search-mobile" onClick={() => handleSearchWidget()}>
                                <FaSearch />
                            </div>
                            <ShoppingCart />
                            <BasketModal />
                        </div>
                    </div>
                </nav>
                <Navbar />
                <div
                    id="mobileSearchWidget"
                    style={{
                        display: searchWidget ? 'block' : 'none',
                    }}
                    className={'mobile-search-widget navbar-light bg-light'}
                >
                    <form className="">
                        <input type="text" placeholder="Search" />
                        <button type="submit" className="mobile-search-icon">
                            <FaSearch />
                        </button>
                    </form>
                </div>
            </header>
        </>
    );
};

export default React.memo(Header);
