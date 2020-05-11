import React from "react";
import "./displayCategory.css";
import DisplayCategoryTile from "./DisplayCategoryTile";

const DisplayCategory = () => {
    return (
        <div className="display-category">
            <DisplayCategoryTile
                title={"Snowboards"}
                imgNum={"1"}
                category="snowboards"
            />
            <DisplayCategoryTile
                title={"Boots"}
                imgNum={"3"}
                category="boots"
            />
            <DisplayCategoryTile
                title={"UV protection goggles"}
                imgNum={"2"}
                category="goggles"
            />
        </div>
    );
};

export default DisplayCategory;
