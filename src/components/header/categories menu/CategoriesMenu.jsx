import React from "react";
import "./categoriesMenu.css";
import CategoriesMenuItem from "./CategoriesMenuItem";

const CategoriesMenu = () => {
    return (
        <div className=" navbar navbar-expand-lg navbar-dark bg-dark header-categories">
            <div
                className="header-categories-menu collapse navbar-collapse "
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav">
                    <CategoriesMenuItem name={"snowboards"} />
                    <CategoriesMenuItem name={"boots"} />
                    <CategoriesMenuItem name={"goggles"} />
                    <CategoriesMenuItem name={"gloves"} />
                    <CategoriesMenuItem name={"helmets"} />
                </ul>
            </div>
        </div>
    );
};

export default CategoriesMenu;
