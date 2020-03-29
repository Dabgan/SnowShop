import React from "react";
import "./productContainer.css";
import ProductProperties from "./product properties/ProductProperties";
import ProductDescription from "./product description/ProductDescription";
import photo from "../../../assets/images/products/goggles2.jpg";

const ProductContainer = () => {
    return (
        <div className="product-container row">
            <div
                className="product-photo-container col-md-6"
                type="button"
                data-toggle="modal"
                data-target="#exampleModal"
            >
                <img src={photo} alt="a product" />
            </div>
            <ProductProperties />
            <ProductDescription />
            {/* Modal */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-body">
                            <img src={photo} alt="a product" />
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Modal */}
        </div>
    );
};

export default ProductContainer;
