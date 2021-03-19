import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './searchBar.scss';

const SearchBar = () => {
    return (
        <form className="search-bar">
            <input type="text" placeholder="Search" />
            <button type="submit" className="search-icon">
                <FaSearch />
            </button>
        </form>
    );
};

export default SearchBar;
