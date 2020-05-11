import React from "react";
import "./../informations.css";
import "./contact.css";
import ContactForm from "./contact form/ContactForm";
import ScrollToTopOnMount from "../../../components/ScrollToTopOnMount";
import Icons from "../../../icons";

const Contact = () => {
    return (
        <>
            <ScrollToTopOnMount />
            <div className="">
                <div className="contact-snow-shop information-page-container">
                    <h1 className="info-component-header">Contact Snowshop</h1>

                    <div className="contact-container">
                        <div>
                            <Icons.FaPhoneAlt />
                            <p>420 213 769</p>
                        </div>
                        <div>
                            <Icons.FaEnvelope />
                            <p>shop@snowshop.pl</p>
                        </div>
                    </div>
                </div>

                <div className="contact-real information-page-container">
                    <h2 className="info-component-header">Real contact</h2>
                    <p>
                        Okey, those informations above are fake. You can find
                        and contact me here:
                    </p>

                    <div className="footer-socials">
                        <Icons.FaGithub size="2rem" />
                        <Icons.FaFacebook size="2rem" />
                        <Icons.FaLinkedin size="2rem" />
                    </div>
                </div>

                <div className="contact-form information-page-container">
                    <h2 className="info-component-header">
                        Or send me an email:
                    </h2>
                    <ContactForm />
                </div>
            </div>
        </>
    );
};

export default Contact;
