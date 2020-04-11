import React, { useContext, useReducer } from "react";
import FiltersContainer from "./filters/FiltersContainer";
import CategoryProductsContainer from "./category products container/CategoryProductsContainer";
import "./filters/filtersContainer.css";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";
import { ProductsContext } from "../../components/app/App";

export const FilteredProductsContext = React.createContext();

const CategoryComponent = ({ categoryName }) => {
    const products = useContext(ProductsContext);

    const sortProductsByParameter = (state, action, param) => {
        const newState = state.filter((product) => {
            if (param.type === "name") {
                return product.mark === action.name;
            } else if (param.type === "price") {
                return (
                    product.price > param.lowPrice &&
                    product.price < param.highPrice
                );
            }
            return newState;
        });
        return newState;
    };

    const filtrByPrice = (state, action) => {
        switch (action.name) {
            case "$0-99":
                return sortProductsByParameter(productsOfThisCategory, action, {
                    type: "price",
                    lowPrice: 0,
                    highPrice: 99,
                });
            case "$99-199":
                return sortProductsByParameter(productsOfThisCategory, action, {
                    type: "price",
                    lowPrice: 99,
                    highPrice: 199,
                });
            case "$199-299":
                return sortProductsByParameter(productsOfThisCategory, action, {
                    type: "price",
                    lowPrice: 199,
                    highPrice: 299,
                });
            default:
                return state;
        }
    };

    const reducer = (state, action) => {
        switch (action.filtr) {
            case "mark":
                return sortProductsByParameter(productsOfThisCategory, action, {
                    type: "name",
                });
            case "price":
                return filtrByPrice(state, action);
            case "clear":
                return productsOfThisCategory;
            default:
                return state;
        }
    };

    const productsOfThisCategory = products.filter((product) => {
        return product.category === categoryName;
    });
    const [filteredProducts, dispatch] = useReducer(
        reducer,
        productsOfThisCategory
    );

    return (
        <FilteredProductsContext.Provider
            value={{ filteredProducts, filterProducts: dispatch }}
        >
            <div className="category-container">
                <ScrollToTopOnMount />
                <FiltersContainer name={categoryName} />
                <CategoryProductsContainer
                    name={categoryName}
                    filteredProducts={filteredProducts}
                />
            </div>
        </FilteredProductsContext.Provider>
    );
};

export default CategoryComponent;
