import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactComponent({ icon, info }) {
    return (
        <div>
            <FontAwesomeIcon icon={icon} />
            <p>{info}</p>
        </div>
    );
}

export default ContactComponent;
