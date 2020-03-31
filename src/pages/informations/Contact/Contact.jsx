import React from "react";
import "./../informations.css";
import ContactComponent from "../../../components/header/contact info/ContactComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "./contact form/ContactForm";

const Contact = () => {
    return (
        <>
            <div className="information-page-container">
                <div className="contact-snow-shop">
                    <h1 className="h2">Contact Snowshop</h1>
                    Call us:
                    <ContactComponent icon="phone-alt" info="420 213 769" />
                    Or send an email:
                    <ContactComponent icon="envelope" info="shop@snowshop.pl" />
                </div>

                <div className="contact-real">
                    <h2 className="h4">Real contact</h2>
                    <p>
                        Ok, these information above are fake. You can find and
                        contact me here:
                    </p>

                    <div className="footer-socials">
                        <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
                        <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
                        <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
                    </div>
                </div>

                <div className="row">
                    <h2 className="h2">Or you can send me an email:</h2>
                    <ContactForm />
                </div>
            </div>
        </>
    );
};

export default Contact;
