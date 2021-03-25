import React, { useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DisplayCategoryTile = ({ title, imgNum, category }) => {
    const [isCategoryHovered, setIsCategoryHovered] = useState(false);
    const hoveredClass = isCategoryHovered ? 'display-category-arrow-hovered' : '';

    return (
        <Link
            to={`/${category}`}
            className="display-category-container"
            onMouseEnter={() => setIsCategoryHovered(!isCategoryHovered)}
            onMouseLeave={() => setIsCategoryHovered(!isCategoryHovered)}
        >
            <div className={`display-category-image display-category${imgNum}`}></div>
            <p className="display-category-title">{title}</p>
            <FaLongArrowAltRight className={`display-category-arrow ${hoveredClass}`} />
        </Link>
    );
};

export default DisplayCategoryTile;
