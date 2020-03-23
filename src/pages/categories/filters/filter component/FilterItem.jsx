import React from "react";

function FilterItem({ name }) {
    return (
        <li className="filter-item">
            <input type="checkbox" />
            <label className="filter-label" htmlFor="">
                {name}
            </label>
        </li>
    );
}

export default FilterItem;
