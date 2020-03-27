import React from "react";
import FiltersContainer from "./filters/FiltersContainer";
import CategoryProductsContainer from "./category products container/CategoryProductsContainer";
import "./filters/filtersContainer.css";
import photo from "../../assets/images/products/helmet.jpg";

const CategoryComponent = ({ categoryName, numberOfItems }) => {
    return (
        <div className="category-container">
            <FiltersContainer name={categoryName} />
            <CategoryProductsContainer
                name={categoryName}
                photo={photo}
                items={numberOfItems}
            />
        </div>
    );
};

export default CategoryComponent;
