import React from "react";
import FilterContainer from "../FilterContainer";
import ProductsContainer from "../ProductsContainer";
import "../categories.css";

function SnowboardCategory() {
    return (
        <div className="category-container">
            <FilterContainer />
            <ProductsContainer />
        </div>
    );
}

export default SnowboardCategory;
