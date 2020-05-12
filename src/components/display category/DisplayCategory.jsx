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
                title={"Waterproof gloves"}
                imgNum={"2"}
                category="gloves"
            />
        </div>
    );
};

export default DisplayCategory;
