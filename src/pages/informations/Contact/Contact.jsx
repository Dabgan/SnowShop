import React from "react";
import "./../informations.css";
import "./contact.css";
import ContactComponent from "../../../components/header/contact info/ContactComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "./contact form/ContactForm";
import ScrollToTopOnMount from "../../../components/ScrollToTopOnMount";

const Contact = () => {
    return (
        <>
            <ScrollToTopOnMount />
            <div className="">
                <div className="contact-snow-shop information-page-container">
                    <h1 className="h2 mb-3">Contact Snowshop</h1>

                    <div className="contact-container">
                        <ContactComponent icon="phone-alt" info="420 213 769" />
                        <ContactComponent
                            icon="envelope"
                            info="shop@snowshop.pl"
                        />
                    </div>
                </div>

                <div className="contact-real information-page-container">
                    <h2 className="h2 mb-3">Real contact</h2>
                    <p>
                        Okey, those informations above are fake. You can find
                        and contact me here:
                    </p>

                    <div className="footer-socials">
                        <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
                        <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
                        <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
                    </div>
                </div>

                <div className="contact-form information-page-container">
                    <h2 className="h2">Or send me an email:</h2>
                    <ContactForm />
                </div>
            </div>
        </>
    );
};

export default Contact;
