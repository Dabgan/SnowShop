import React from "react";

function CategoriesMenuItem(props) {
    const { name } = props;
    return (
        <li className="nav-item categories-item">
            <a href="/#" className="categories-link">
                {name}
            </a>
        </li>
    );
}

export default CategoriesMenuItem;
