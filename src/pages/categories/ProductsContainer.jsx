import React from "react";
import "./productsContainer.css";

function ProductsContainer() {
    return (
        <section className="products-container">
            <h1 className="category-title">Snowboards</h1>
            <div className="sorting-container">
                <span>Sort by:</span>
                <select className="sortbar" name="sortbar" id="sortbar">
                    <option value="desc">Price: descending</option>
                    <option value="asc">Price: ascending</option>
                    <option value="az">Name: A to Z</option>
                    <option value="za">Name: Z to A</option>
                </select>
            </div>
            <div className="products">
                {/* <div>
                    <h1>Product1</h1>
                </div>
                <div>
                    <h1>Product2</h1>
                </div>
                <div>
                    <h1>Product3</h1>
                </div> */}
            </div>
        </section>
    );
}

export default ProductsContainer;
