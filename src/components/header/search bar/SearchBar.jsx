import React from "react";
import "./searchBar.css";
import Icons from "../../../icons";

function SearchBar() {
    return (
        <form className="search-bar">
            <input type="text" placeholder="Search" />
            <button type="submit" className="search-icon">
                <Icons.FaSearch />
            </button>
        </form>
    );
}

export default SearchBar;
