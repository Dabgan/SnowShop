import React, { useContext, useState } from "react";
import FilterComponent from "./filter component/FilterComponent";
import { ProductsContext } from "../../../components/app/App";
import { FilteredProductsContext } from "../CategoryComponent";

function FiltersContainer({ name }) {
    const products = useContext(ProductsContext);
    const filterContext = useContext(FilteredProductsContext);
    const productsOfThisCategory = products.filter((product) => {
        return product.category === name;
    });

    const marksInCategory = productsOfThisCategory.map((product) => ({
        name: product.mark,
        id: product.id,
    }));

    const removeDuplicates = (originalArray, key) => {
        return [
            ...new Map(originalArray.map((item) => [item[key], item])).values(),
        ];
    };
    const uniqueMarks = removeDuplicates(marksInCategory, "name");

    const [inputIsChecked, setinputIsChecked] = useState();

    const prices = [
        { name: "$0-99", id: 0 },
        { name: "$99-199", id: 1 },
        { name: "$199-299", id: 2 },
    ];

    return (
        <aside className="filter-container">
            <div className="block category-name">{name}</div>
            <div className="block filters">
                Filtr by:
                {uniqueMarks.length ? (
                    <FilterComponent
                        filterName="mark"
                        filterLabels={uniqueMarks}
                        isChecked={inputIsChecked}
                    />
                ) : null}
                <FilterComponent
                    filterName="price"
                    filterLabels={prices}
                    isChecked={inputIsChecked}
                />
                <button
                    className="my-btn"
                    onClick={() => {
                        filterContext.filterProducts({ filtr: "clear" });
                        setinputIsChecked(false);
                    }}
                >
                    Clear filters
                </button>
            </div>
        </aside>
    );
}

export default FiltersContainer;
