import React from "react";
import { Link } from "react-router-dom";

function CategoriesMenuItem(props) {
    const { name } = props;
    return (
        <li className="nav-item categories-item">
            <Link to={`/${name}`}>
                <a href="/#" className="categories-link">
                    {name}
                </a>
            </Link>
        </li>
    );
}

export default CategoriesMenuItem;
