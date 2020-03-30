import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Footer() {
    const footerLinks = [
        { name: "about", path: "about" },
        { name: "contact", path: "contact" },
        { name: "shipping", path: "shipping" },
        { name: "blog", path: "blog" },
        { name: "payment methods", path: "payment" },
        { name: "privacy & cookies", path: "privacy" },
        { name: "terms & conditions", path: "terms" }
    ];

    return (
        <footer className="footer py-4 bg-dark text-white-50">
            <div className="footer-container">
                <div className="footer-nav">
                    {footerLinks.map(link => (
                        <div className="footer-nav-item">
                            <Link to={`/${link.path}`} className="footer-link">
                                {link.name}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="footer-socials">
                    <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
                    <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
                    <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
                </div>
            </div>
            <div className="footer-copyright">
                <small>Copyright &copy; Gabriel Daniluk</small>
            </div>
            <a href="/#">
                <button className=" to-top-btn">
                    <FontAwesomeIcon icon="chevron-circle-up" size="3x" />
                </button>
            </a>
        </footer>
    );
}

export default Footer;
