import React from 'react';
import { FaRegSnowflake } from 'react-icons/fa';

import './loader.scss';

const Loader = ({ isPageLoaded }) => {
    return (
        <div>
            <FaRegSnowflake
                size="10rem"
                className="icon-spinning"
                style={{ display: isPageLoaded ? 'block' : 'none' }}
            ></FaRegSnowflake>
        </div>
    );
};

export default Loader;
