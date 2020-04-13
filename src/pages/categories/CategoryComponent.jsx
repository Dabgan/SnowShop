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

    const sortProductsBySort = (state, val) => {
        const compare = (a, b) => {
            let varA, varB;
            switch (val) {
                case "az":
                case "za":
                    varA = a.title.toUpperCase();
                    varB = b.title.toUpperCase();
                    break;
                case "asc":
                case "desc":
                    varA = a.price;
                    varB = b.price;
                    break;
                default:
                    return;
            }

            let comparison = 0;
            varA > varB ? (comparison = 1) : (comparison = -1);
            // sort items alphabetically, else invert value (by multiplying by -1)
            return val === "desc" || val === "az"
                ? comparison
                : comparison * -1;
        };
        const sortedArray = [...state].sort(compare);
        return sortedArray;
    };

    const reducer = (state, action) => {
        switch (action.filtr) {
            case "mark":
                return sortProductsByParameter(productsOfThisCategory, action, {
                    type: "name",
                });
            case "price":
                return filtrByPrice(state, action);
            case "sort":
                return sortProductsBySort(state, action.val);
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
                <CategoryProductsContainer name={categoryName} />
            </div>
        </FilteredProductsContext.Provider>
    );
};

export default CategoryComponent;
