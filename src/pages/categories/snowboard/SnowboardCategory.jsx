import React from "react";
import FiltersContainer from "../filters/FiltersContainer";
import ProductsContainer from "../ProductsContainer";
import "../filters/filtersContainer.css";

function SnowboardCategory() {
    return (
        <div className="category-container">
            <FiltersContainer />
            <ProductsContainer />
        </div>
    );
}

export default SnowboardCategory;
