import React, { useContext } from "react";
import FilterComponent from "./filter component/FilterComponent";
import { ProductsContext } from "../../../components/app/App";

function FiltersContainer({ name }) {
    const products = useContext(ProductsContext);
    const productsOfThisCategory = products.filter((product) => {
        return product.category === name;
    });
    const marks = [
        { name: "pulsar", id: 0 },
        { name: "eagle slash", id: 1 },
        { name: "hiperx", id: 2 },
    ];
    const newMarks = productsOfThisCategory.map((product) => ({
        name: product.mark,
        id: product.id,
    }));
    const prices = [
        { name: "$0-99", id: 0 },
        { name: "$99-199", id: 1 },
        { name: "$199-299", id: 2 },
    ];

    console.log(newMarks);
    return (
        <aside className="filter-container">
            <div className="block category-name">{name}</div>
            <div className="block filters">
                Filtr by:
                <FilterComponent filterName="mark" filterLabels={newMarks} />
                <FilterComponent filterName="price" filterLabels={prices} />
                <button className="my-btn">Clear filters</button>
            </div>
        </aside>
    );
}

// , "eagle slash", "hiperx"

export default FiltersContainer;
