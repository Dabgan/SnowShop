import React from "react";
import FiltersContainer from "./filters/FiltersContainer";
import CategoryProductsContainer from "./category products container/CategoryProductsContainer";
import "./filters/filtersContainer.css";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";

const CategoryComponent = ({ categoryName }) => {
    return (
        <div className="category-container">
            <ScrollToTopOnMount />
            <FiltersContainer name={categoryName} />
            <CategoryProductsContainer name={categoryName} />
        </div>
    );
};

export default CategoryComponent;
