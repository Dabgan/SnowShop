import React from "react";
import "./productContainer.css";
import ProductProperties from "./product properties/ProductProperties";

const ProductContainer = ({ photo }) => {
    return (
        <div className="product-container row">
            <div className="product-photo-container col-md-6">
                <img src={photo} alt="a product" />
            </div>
            <ProductProperties />
            <div className="product-description col-md-12">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a
                            className="nav-link active"
                            id="description-tab"
                            data-toggle="tab"
                            href="#description"
                            role="tab"
                            aria-controls="description"
                            aria-selected="true"
                        >
                            Description
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            id="product-details-tab"
                            data-toggle="tab"
                            href="#product-details"
                            role="tab"
                            aria-controls="product-details"
                            aria-selected="false"
                        >
                            Product Details
                        </a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div
                        className="tab-pane fade show active"
                        id="description"
                        role="tabpanel"
                        aria-labelledby="description-tab"
                    >
                        <p>
                            Random Goggles 3X featured with anti-fog, anti-wind
                            and 100% UV protection to protect your eyes when
                            skiing, snowboarding, snowmobiling and other snow
                            sports. Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores eos qui ratione voluptatem sequi
                            nesciunt. Neque porro quisquam est, qui dolorem
                            ipsum quia dolor sit amet, consectetur, adipisci
                            velit, sed quia non numquam eius modi tempora
                            incidunt ut labore et dolore magnam aliquam quaerat
                            voluptatem.
                        </p>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="product-details"
                        role="tabpanel"
                        aria-labelledby="product-details-tab"
                    >
                        <p>xDDDDDDDDDDDDDD</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductContainer;
