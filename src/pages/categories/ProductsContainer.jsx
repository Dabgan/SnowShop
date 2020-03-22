import React from "react";

function ProductsContainer() {
    return (
        <div className="products-container">
            <div className="sorting-container">
                <select name="" id="">
                    <option value="mark1">mark1</option>
                    <option value="mark2">mark2</option>
                    <option value="mark3">mark3</option>
                </select>
            </div>
            <div className="products">
                <div>
                    <h1>Product1</h1>
                </div>
                <div>
                    <h1>Product2</h1>
                </div>
                <div>
                    <h1>Product3</h1>
                </div>
            </div>
        </div>
    );
}

export default ProductsContainer;
