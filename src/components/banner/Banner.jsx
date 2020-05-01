import React from "react";
import banner from "./../../assets/images/banner7.jpg";
import "./banner.css";

const Banner = () => {
    return (
        <div className="banner">
            <img src={banner} alt="This is banner" />
        </div>
    );
};

export default Banner;
