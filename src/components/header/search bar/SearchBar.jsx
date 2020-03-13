import React from "react";
import "./searchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBar() {
    return (
        <form className="search-bar">
            <input type="text" placeholder="Search" />
            <button type="submit" className="search-icon">
                <FontAwesomeIcon icon="search" />
            </button>
        </form>
    );
}

export default SearchBar;
