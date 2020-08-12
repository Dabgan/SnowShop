import React from "react";
import "./../informations.scss";
import "./contact.scss";
import ContactForm from "./ContactForm";
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
                        <a
                            href="https://github.com/Dabgan"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icons.FaGithub size="2rem"></Icons.FaGithub>
                        </a>
                        <a
                            href="https://www.facebook.com/gabriel.daniluk"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icons.FaFacebook size="2rem" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/gabrieldaniluk/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icons.FaLinkedin size="2rem" />
                        </a>
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
