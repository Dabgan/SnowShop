import React, { useContext, useReducer } from "react";
import FiltersContainer from "./filters/FiltersContainer";
import CategoryProductsContainer from "./category products container/CategoryProductsContainer";
import "./filters/filtersContainer.css";
import { ProductsContext } from "../../components/app/App";

export const FilteredProductsContext = React.createContext();

const CategoryComponent = ({ categoryName }) => {
    const products = useContext(ProductsContext);
    const reducer = (state, action) => {
        switch (action.filtr) {
            case "mark":
                return filtrProductsBy(productsOfThisCategory, action, {
                    type: "name",
                });
            case "price":
                return filtrProductsBy(productsOfThisCategory, action, {
                    type: "price",
                    range: action.range,
                });
            case "sort":
                return sortProductsBy(state, action.val);
            case "clear":
                return productsOfThisCategory;
            default:
                return state;
        }
    };

    const productsOfThisCategory = products.filter((product) => {
        return product.category === categoryName;
    });

    const filtrProductsBy = (state, action, param) => {
        const newState = state.filter((product) => {
            if (param.type === "name") {
                return product.mark === action.name;
            } else if (param.type === "price") {
                return (
                    product.price > param.range.min &&
                    product.price < param.range.max
                );
            }
            return newState;
        });
        return newState;
    };

    const sortProductsBy = (state, val) => {
        const compare = (a, b) => {
            let varA, varB;

            if (val === "az" || val === "za") {
                varA = a.title.toUpperCase();
                varB = b.title.toUpperCase();
            } else if (val === "desc" || val === "asc") {
                varA = a.price;
                varB = b.price;
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

    const [filteredProducts, dispatch] = useReducer(
        reducer,
        productsOfThisCategory
    );

    return (
        <FilteredProductsContext.Provider
            value={{ filteredProducts, filterProducts: dispatch }}
        >
            <div className="category-container">
                {/* <ScrollToTopOnMount /> */}
                <FiltersContainer name={categoryName} />
                <CategoryProductsContainer name={categoryName} />
            </div>
        </FilteredProductsContext.Provider>
    );
};

export default CategoryComponent;
