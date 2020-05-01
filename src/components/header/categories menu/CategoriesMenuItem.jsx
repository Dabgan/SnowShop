import React from "react";
import { NavLink } from "react-router-dom";

const CategoriesMenuItem = (props) => {
    const { name } = props;
    return (
        <li className="nav-item categories-item">
            <NavLink
                exact
                activeClassName="categories-selected"
                className="categories-link"
                to={`/${name}`}
            >
                {name}
            </NavLink>
        </li>
    );
};

export default CategoriesMenuItem;
