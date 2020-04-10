import React, { useContext, useReducer } from "react";
import FiltersContainer from "./filters/FiltersContainer";
import CategoryProductsContainer from "./category products container/CategoryProductsContainer";
import "./filters/filtersContainer.css";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";
import { ProductsContext } from "../../components/app/App";

export const FilteredProductsContext = React.createContext();

const CategoryComponent = ({ categoryName }) => {
    const products = useContext(ProductsContext);

    const filtrByMark = (state, action) => {
        if (action.isChecked === false) {
            return productsOfThisCategory;
        } else if (action.isChecked === true) {
            const newState = state.filter((product) => {
                return product.mark === action.name;
            });
            return newState;
        }
    };

    const filtrByPrice = (state, action) => {};

    const reducer = (state, action) => {
        switch (action.filtr) {
            case "mark":
                return filtrByMark(state, action);
            case "price":
                // if (action.isChecked === false) {
                //     return productsOfThisCategory;
                // } else if (action.isChecked === true) {
                //     const newState = state.filter((product) => {
                //         return product.mark === action.name;
                //     });
                //     return newState;
                // }
                console.log("sortowanie po cenie");
                return state;
            case "clear":
                return productsOfThisCategory;
            default:
                console.log(`coś sie popsuło`);
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
