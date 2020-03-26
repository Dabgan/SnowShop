import React from "react";
import FiltersContainer from "./filters/FiltersContainer";
import ProductsContainer from "./products container/ProductsContainer";
import "./filters/filtersContainer.css";
import photo from "../../assets/images/products/helmet.jpg";

const CategoryComponent = ({ categoryName, numberOfItems }) => {
    return (
        <div className="category-container">
            <FiltersContainer name={categoryName} />
            <ProductsContainer
                name={categoryName}
                photo={photo}
                items={numberOfItems}
            />
        </div>
    );
};

export default CategoryComponent;
