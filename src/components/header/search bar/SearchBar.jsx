import React from "react";
import "./searchBar.scss";
import Icons from "../../../icons";

const SearchBar = () => {
    return (
        <form className="search-bar">
            <input type="text" placeholder="Search" />
            <button type="submit" className="search-icon">
                <Icons.FaSearch />
            </button>
        </form>
    );
};

export default SearchBar;
