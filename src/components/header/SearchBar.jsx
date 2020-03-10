import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBar() {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search" />
            <FontAwesomeIcon icon="search" />
        </div>
    );
}

export default SearchBar;
