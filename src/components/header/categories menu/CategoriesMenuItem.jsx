import React from "react";
import { Link } from "react-router-dom";

function CategoriesMenuItem(props) {
    const { name } = props;
    return (
        <Link to={`/${name}`}>
            <li className="nav-item categories-item">
                <a href="/#" className="categories-link">
                    {name}
                </a>
            </li>
        </Link>
    );
}

export default CategoriesMenuItem;
