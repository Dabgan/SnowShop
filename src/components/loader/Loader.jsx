import React from "react";
import Icons from "../../icons";
import "./loader.scss";

const Loader = ({ isPageLoaded }) => {
    return (
        <div>
            <Icons.FaRegSnowflake
                size="10rem"
                className="icon-spinning"
                style={{ display: isPageLoaded ? "block" : "none" }}
            ></Icons.FaRegSnowflake>
        </div>
    );
};

export default Loader;
