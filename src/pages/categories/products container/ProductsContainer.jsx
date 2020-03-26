import React from "react";
import "./productsContainer.css";
import ProductTile from "../../../components/featured products/product tile/ProductTile";
import image3 from "../../../assets/images/products/goggles1.jpg";

function ProductsContainer({ name, photo, items }) {
    const price = "$199,99";
    const productTitle = "Snowboard Pulsar HiperX model 3";

    const renderItems = () => {
        let products = [];
        for (let i = 0; i < items; i++) {
            products.push(
                <ProductTile
                    productImg={photo}
                    productTitle={productTitle}
                    price={price}
                    newClass="category-tile"
                />
            );
        }
        return products;
    };

    return (
        <section className="products-container">
            <h1 className="category-title">{name}</h1>
            <div className="sorting-container">
                <span>Sort by:</span>
                <select className="sortbar" name="sortbar" id="sortbar">
                    <option value="desc">Price: descending</option>
                    <option value="asc">Price: ascending</option>
                    <option value="az">Name: A to Z</option>
                    <option value="za">Name: Z to A</option>
                </select>
            </div>
            <div className="category-products">{renderItems()}</div>
        </section>
    );
}

export default ProductsContainer;
