import React from "react";
import "./mobileHeaderIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MobileHeaderIcon({ icon, info, className, handleClickMobileSearch }) {
    return (
        <div
            className={className}
            onClick={handleClickMobileSearch}
            onClick={() => {
                alert("lol");
            }}
        >
            <FontAwesomeIcon icon={icon} />
            <p>{info}</p>
        </div>
    );
}

export default MobileHeaderIcon;
