import React, { useContext } from "react";
import { FilteredProductsContext } from "../../CategoryComponent";

function FilterItem({ name, filterName, range }) {
    const filterContext = useContext(FilteredProductsContext);

    return (
        <li className="filter-item">
            <input
                type="radio"
                name={filterName}
                onClick={() => {
                    filterContext.filterProducts({
                        name,
                        filtr: filterName,
                        range,
                    });
                }}
            />
            <label className="filter-label" htmlFor="">
                {name}
            </label>
        </li>
    );
}

export default FilterItem;
