import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <footer class="footer py-4 bg-dark text-white-50">
            <div className="footer-container">
                <div className="footer-nav">
                    <div className="footer-nav-item">About</div>
                    <div className="footer-nav-item">Contact</div>
                    <div className="footer-nav-item">Shipping</div>
                    <div className="footer-nav-item">Blog</div>
                    <div className="footer-nav-item">Payment methods</div>
                    <div className="footer-nav-item">Privacy & Cookies</div>
                    <div className="footer-nav-item">Terms & Conditions</div>
                </div>
                <div className="footer-socials">
                    <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
                    <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
                    <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
                </div>
            </div>
            <div class="footer-copyright">
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
