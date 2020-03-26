import React from "react";
import FilterComponent from "./filter component/FilterComponent";

function FiltersContainer({ name }) {
    const marks = [
        { name: "pulsar", id: 0 },
        { name: "eagle slash", id: 1 },
        { name: "hiperx", id: 2 }
    ];
    const prices = [
        { name: "$0-99", id: 0 },
        { name: "$99-199", id: 1 },
        { name: "$199-299", id: 2 }
    ];

    return (
        <aside className="filter-container">
            <div className="block category-name">{name}</div>
            <div className="block filters">
                Filtr by:
                <FilterComponent filterName="mark" filterLabels={marks} />
                <FilterComponent filterName="price" filterLabels={prices} />
                <button className="my-btn">Clear filters</button>
            </div>
        </aside>
    );
}

// , "eagle slash", "hiperx"

export default FiltersContainer;
