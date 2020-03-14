import React from "react";
import "./categories.css";
import CategoriesMenuItem from "./CategoriesMenuItem";

function CategoriesMenu() {
    return (
        <div className="header-categories navbar navbar-expand-lg navbar-dark bg-dark">
            <div
                className="header-categories-menu collapse navbar-collapse "
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav">
                    <CategoriesMenuItem name={"Snowboard"} />
                    <CategoriesMenuItem name={"Boots"} />
                    <CategoriesMenuItem name={"Goggles"} />
                    <CategoriesMenuItem name={"Gloves"} />
                    <CategoriesMenuItem name={"Helmets"} />
                </ul>
            </div>
        </div>
    );
}

export default CategoriesMenu;
