import React from "react";
import "./productDescription.css";

const ProductDescription = () => {
    return (
        <div className="product-description col-md-12">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="description-item nav-item">
                    <a
                        className="description-link nav-link active"
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
                <li className="description-item nav-item">
                    <a
                        className="description-link nav-link"
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
                    className="description-tab tab-pane fade show active"
                    id="description"
                    role="tabpanel"
                    aria-labelledby="description-tab"
                >
                    <p>
                        Random Goggles 3X featured with anti-fog, anti-wind and
                        100% UV protection to protect your eyes when skiing,
                        snowboarding, snowmobiling and other snow sports. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem.
                    </p>
                    <p>
                        The inner lens is made by Italian high-end CP material,
                        the outer lens comes with solid impact-resistance for
                        its unique intensive technology. The top vent holes
                        enhance the air-flow and reduce fogging when skiing or
                        snowboarding on the slope. High performance for optical
                        clarity from Lagopus X brings more fun all the way down
                        the mountain.
                    </p>
                </div>
                <div
                    className="description-tab description-details tab-pane fade"
                    id="product-details"
                    role="tabpanel"
                    aria-labelledby="product-details-tab"
                >
                    <div className="row details-row">
                        <div className="col-md-3 details-column">Mark:</div>
                        <div className="col-md-3 details-column">
                            GHyper X 3
                        </div>
                    </div>

                    <div className="row details-row">
                        <div className="col-md-3 details-column">
                            Lens Style:
                        </div>
                        <div className="col-md-3 details-column">Spherical</div>
                    </div>

                    <div className="row details-row">
                        <div className="col-md-3 details-column">
                            Lens Color:
                        </div>
                        <div className="col-md-3 details-column">
                            Mirror Coated/Clear
                        </div>
                    </div>

                    <div className="row details-row">
                        <div className="col-md-3 details-column">Fit:</div>
                        <div className="col-md-3 details-column">
                            Youth/Adult
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;
