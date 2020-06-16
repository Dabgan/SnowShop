import React from "react";
import "./../informations.scss";
import Newsletter from "../../../components/newsletter/Newsletter";
import ScrollToTopOnMount from "../../../components/ScrollToTopOnMount";

const About = () => {
    return (
        <>
            <ScrollToTopOnMount />
            <div className="information-page-container">
                <h1 className="info-component-header">About us</h1>
                <p>
                    The main idea of creating this webshop site was to practice
                    the basics of React and learn React Hooks. In order to do
                    that I wanted to create a place where I would like to buy
                    myself. Where shopping is easy and enjoyable.
                </p>
                <h2 className="info-component-header">Some more</h2>
                <p>
                    I've learned a lot by creating this site. First of all,
                    perseverance in creating the project and how much time the
                    details can take. I learned what React Hook's are and how to
                    use them. I also learned how to use Firebase and how to use
                    the database more smoothly.
                </p>
                <h2 className="info-component-header">And more</h2>
                <p>
                    Propably not worth reading, I will put here some lorem ipsum
                    to lengthen this paragraph. Snowboarding is a recreational
                    activity and Winter Olympic and Paralympic sport that
                    involves descending a snow-covered slope while standing on a
                    snowboard attached to a rider's feet.
                </p>
            </div>
            <Newsletter />
        </>
    );
};

export default About;
