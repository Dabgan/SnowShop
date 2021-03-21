import React, { useContext } from 'react';
import { FilteredProductsContext } from '../../CategoryComponent';

function FilterItem({ name, filterName, range }) {
    const filterContext = useContext(FilteredProductsContext);

    return (
        <li className="filter-item">
            <input
                id={name}
                type="radio"
                name={filterName}
                onClick={() => {
                    filterContext.filterProducts({
                        name,
                        myFilter: filterName,
                        range,
                    });
                }}
            />
            <label className="filter-label" htmlFor={name}>
                {name}
            </label>
        </li>
    );
}

export default React.memo(FilterItem);
