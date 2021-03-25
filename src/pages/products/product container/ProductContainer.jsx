import React from 'react';
import ProductProperties from './product properties/ProductProperties';
import ProductDescription from './product description/ProductDescription';
import Img from 'react-cool-img';

import './productContainer.scss';

const ProductContainer = ({ productInfo }) => {
    console.log(productInfo);

    return (
        <div className="product-container row">
            <div className="product-photo-container" type="button" data-toggle="modal" data-target="#exampleModal">
                <Img src={productInfo.img} alt="a product" />
            </div>
            <ProductProperties productInfo={productInfo} />
            <ProductDescription productInfo={productInfo} />
            {/* Modal */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <Img src={productInfo.img} alt="a product" />
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Modal */}
        </div>
    );
};

export default React.memo(ProductContainer);
