import React from "react";
import FilterComponent from "./filter component/FilterComponent";

function FiltersContainer() {
    const marks = ["pulsar", "eagle slash", "hiperx"];
    const prices = ["$0-99", "$100-199", "$199-299"];

    return (
        <div className="filter-container">
            <div className="block category-name">Snowboards</div>
            <div className="block filters">
                Filtr by:
                <FilterComponent filterName="mark" filterLabels={marks} />
                <FilterComponent filterName="price" filterLabels={prices} />
                <button className="my-btn">Clear filters</button>
            </div>
        </div>
    );
}

export default FiltersContainer;
