import React from "react";
import Newsletter from "../../../components/newsletter/Newsletter";

const InformationComponent = ({ headerName }) => {
    return (
        <>
            <div className="information-page-container">
                <h1 className="info-component-header">{headerName}</h1>
                <p>
                    To be honest, I didn't find value in creating other routes
                    than just About and Contact. So rest of these info pages are
                    copy pasted from About Page. The main idea of creating this
                    webshop site was to practice the basics of React and learn
                    React Hooks. In order to do that I wanted to create a place
                    where I would like to buy myself. Where shopping is easy and
                    enjoyable.
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
                    Snowboarding is a recreational activity and Winter Olympic
                    and Paralympic sport that involves descending a snow-covered
                    slope while standing on a snowboard attached to a rider's
                    feet. Propably not worth reading, I will put here some lorem
                    ipsum to lengthen this paragraph.
                </p>
            </div>
            <Newsletter />
        </>
    );
};

export default InformationComponent;
