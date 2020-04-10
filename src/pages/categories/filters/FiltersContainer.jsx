import React, { useContext } from "react";
import FilterComponent from "./filter component/FilterComponent";
import { ProductsContext } from "../../../components/app/App";

function FiltersContainer({ name }) {
    const products = useContext(ProductsContext);
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

    const prices = [
        { name: "$0-99", id: 0 },
        { name: "$99-199", id: 1 },
        { name: "$199-299", id: 2 },
    ];

    console.log(uniqueMarks);
    return (
        <aside className="filter-container">
            <div className="block category-name">{name}</div>
            <div className="block filters">
                Filtr by:
                <FilterComponent filterName="mark" filterLabels={uniqueMarks} />
                <FilterComponent filterName="price" filterLabels={prices} />
                <button className="my-btn">Clear filters</button>
            </div>
        </aside>
    );
}

export default FiltersContainer;
