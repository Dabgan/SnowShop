import React from 'react';
import FilterItem from './FilterItem';
import './filters.scss';

function FilterComponent({ filterName, filterLabels }) {
    return (
        <div className={`filter filter-${filterName}`}>
            <p>{filterName}:</p>
            <ul>
                {filterLabels.map((label) => (
                    <FilterItem name={label.name} key={label.id} filterName={filterName} range={label.range} />
                ))}
            </ul>
        </div>
    );
}

export default React.memo(FilterComponent);
