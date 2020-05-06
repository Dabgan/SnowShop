import React from "react";
import "./productDescription.css";

const ProductDescription = () => {
    const productDetails = [
        { name: "Mark", value: "GHyper X 3", id: 1 },
        { name: "Lens Style", value: "Spherical", id: 2 },
        { name: "Lens Color", value: "Mirror Coated/Clear", id: 3 },
        { name: "Fit", value: "Youth/Adult", id: 4 },
    ];

    return (
        <div className="product-description col-md-12">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className=" nav-item">
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
                <li className=" nav-item">
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
                    <h2 className="h3 my-3">Most important features</h2>
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
                    <h2 className="h3 my-3">
                        Other cool stuff about this product
                    </h2>
                    <p>
                        The extra long elastic strap for any helmet
                        compatibility.It makes these the perfect goggles
                        suitable for both men, women & youth. Et harum quidem
                        rerum facilis est et expedita distinctio. Nam libero
                        tempore, cum soluta nobis est eligendi optio cumque
                        nihil impedit quo minus id quod maxime placeat facere
                        possimus, omnis voluptas assumenda est, omnis dolor
                        repellendus. Temporibus autem quibusdam et aut officiis
                        debitis aut rerum necessitatibus saepe eveniet ut et
                        voluptates repudiandae sint et molestiae non recusandae.
                        Itaque earum rerum hic tenetur a sapiente delectus, ut
                        aut reiciendis voluptatibus maiores alias consequatur
                        aut perferendis doloribus asperiores repellat
                    </p>
                    <h2 className="h3 my-3">
                        Why you should buy{" "}
                        <span className="text-gradient">this</span> product?
                    </h2>
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
                    {productDetails.map((details) => (
                        <div className="row details-row" key={details.id}>
                            <div className="col-md-3 details-column">
                                {details.name}:
                            </div>
                            <div className="col-md-3 details-column">
                                {details.value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;
