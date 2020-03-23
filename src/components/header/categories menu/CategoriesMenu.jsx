import React from "react";
import "./categoriesMenu.css";
import CategoriesMenuItem from "./CategoriesMenuItem";

function CategoriesMenu() {
    return (
        <div className="header-categories navbar navbar-expand-lg navbar-dark bg-dark">
            <div
                className="header-categories-menu collapse navbar-collapse "
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav">
                    <CategoriesMenuItem name={"snowboard"} />
                    <CategoriesMenuItem name={"boots"} />
                    <CategoriesMenuItem name={"goggles"} />
                    <CategoriesMenuItem name={"gloves"} />
                    <CategoriesMenuItem name={"helmets"} />
                </ul>
            </div>
        </div>
    );
}

export default CategoriesMenu;
