import React, { useContext } from "react";
import { FilteredProductsContext } from "../../CategoryComponent";

function FilterItem({ name, isChecked }) {
    const filterContext = useContext(FilteredProductsContext);

    return (
        <li className="filter-item">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) =>
                    filterContext.filterProducts({
                        name,
                        isChecked: e.target.checked,
                        filtr: "mark",
                    })
                }
            />
            <label className="filter-label" htmlFor="">
                {name}
            </label>
        </li>
    );
}

export default FilterItem;
