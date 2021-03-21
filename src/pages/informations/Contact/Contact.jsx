import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import ScrollToTopOnMount from '../../../components/app/ScrollToTopOnMount';
import ContactForm from './ContactForm';
import './../informations.scss';
import './contact.scss';

const Contact = () => {
    return (
        <>
            <ScrollToTopOnMount />
            <div className="">
                <div className="contact-snow-shop information-page-container">
                    <h1 className="info-component-header">Contact Snowshop</h1>

                    <div className="contact-container">
                        <div>
                            <FaPhoneAlt />
                            <p>420 213 769</p>
                        </div>
                        <div>
                            <FaEnvelope />
                            <p>shop@snowshop.pl</p>
                        </div>
                    </div>
                </div>

                <div className="contact-real information-page-container">
                    <h2 className="info-component-header">Real contact</h2>
                    <p>Okey, those informations above are fake. You can find and contact me here:</p>

                    <div className="footer-socials">
                        <a href="https://github.com/Dabgan" target="_blank" rel="noopener noreferrer">
                            <FaGithub size="2rem" />
                        </a>
                        <a href="https://www.facebook.com/gabriel.daniluk" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size="2rem" />
                        </a>
                        <a href="https://www.linkedin.com/in/gabrieldaniluk/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size="2rem" />
                        </a>
                    </div>
                </div>

                <div className="contact-form information-page-container">
                    <h2 className="info-component-header">Or send me an email:</h2>
                    <ContactForm />
                </div>
            </div>
        </>
    );
};

export default React.memo(Contact);
