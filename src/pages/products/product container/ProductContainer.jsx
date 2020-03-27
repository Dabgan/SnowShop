import React from "react";
import "./productContainer.css";

const ProductContainer = ({ photo }) => {
    const deliveryDate = "30.03.2020";
    return (
        <div className="product-container row">
            <div className="product-photo-container col-md-6">
                <img src={photo} alt="a product" />
            </div>
            <div className="product-info-container col-md-6">
                <h1 className="product-name">Random Goggles 3X</h1>
                <h2 className="">$199.99</h2>
                <div className="product-availability">In Store</div>
                <div className="delivery-info">
                    <p>Free delivery</p>
                    <p>At you place on {deliveryDate}</p>
                </div>
                <div className="product-actions">
                    <div className="product-quantity">
                        <button>-</button>
                        <input type="text" value="1" />
                        <button>+</button>
                    </div>
                    <button className="my-btn add-to-cart-btn">
                        Add to cart
                    </button>
                </div>
            </div>
            <div className="product-description col-md-12">
                <p>
                    Nowoczesne, komfortowe, regulowane płetwy przeznaczone do
                    snorkelingu i łatwych, rekreacyjnych nurkowań. Ich
                    kompaktowa budowa, a w szczególności niewielka długość piór
                    powoduje, że są to doskonałe płetwy dla osób, które często
                    podróżują i zależy im na niewielkich gabarytach i masie
                    bagażu. Zmniejszone pióra sprawiają również, że płetwy
                    WOMBAT sprawdzą się również w treningu na basenie. Płetwy
                    WOMBAT cechują się dużą stabilnością podczas pływania,
                    dzięki otworom w piórach, które odprowadzają część wody, a
                    także dzięki elastycznym elementom, które w trakcie ruchu
                    płetwy w wodzie, kierują ją wzdłuż piór. Z kolei gumowane
                    wzmocnienia po bokach piór zwiększają ich elastyczność i
                    chronią płetwy przed uszkodzeniami.
                </p>
            </div>
        </div>
    );
};

export default ProductContainer;
