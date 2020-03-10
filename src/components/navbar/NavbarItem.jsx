import React from "react";

function NavbarItem(props) {
    const { name } = props;
    return (
        <li className="nav-item">
            <span>X</span>
            <a href="/#" className="nav-link">
                {name}
            </a>
        </li>
    );
}

export default NavbarItem;
