import React, { useContext } from "react";
import { FilteredProductsContext } from "../../CategoryComponent";

function FilterItem({ name, filterName, isChecked }) {
    const filterContext = useContext(FilteredProductsContext);

    return (
        <li className="filter-item">
            <input
                type="radio"
                name={filterName}
                // checked={isChecked}
                onChange={(e) => {
                    console.log(e.target.value);
                    filterContext.filterProducts({
                        name,
                        filtr: filterName,
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
