import React from 'react';
import DisplayCategoryTile from './DisplayCategoryTile';

import './displayCategory.scss';

const DisplayCategory = () => {
    return (
        <div className="display-category">
            <DisplayCategoryTile title={'Snowboards'} imgNum={'1'} category="snowboards" />
            <DisplayCategoryTile title={'Waterproof gloves'} imgNum={'2'} category="gloves" />
        </div>
    );
};

export default React.memo(DisplayCategory);
