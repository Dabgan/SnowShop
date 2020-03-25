import React from "react";
import "./productsContainer.css";
import ProductTile from "../../components/featured products/product tile/ProductTile";
import image3 from "../../assets/images/products/product3.jpg";

function ProductsContainer() {
    const price = "$199,99";
    const productTitle = "Snowboard Pulsar HiperX model 3";

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
            <div className="category-products">
                <ProductTile
                    productImg={image3}
                    productTitle={productTitle}
                    price={price}
                    newClass="category-tile"
                />
                <ProductTile
                    productImg={image3}
                    productTitle={productTitle}
                    price={price}
                    newClass="category-tile"
                />
                <ProductTile
                    productImg={image3}
                    productTitle={productTitle}
                    price={price}
                    newClass="category-tile"
                />
                <ProductTile
                    productImg={image3}
                    productTitle={productTitle}
                    price={price}
                    newClass="category-tile"
                />
                <ProductTile
                    productImg={image3}
                    productTitle={productTitle}
                    price={price}
                    newClass="category-tile"
                />
                <ProductTile
                    productImg={image3}
                    productTitle={productTitle}
                    price={price}
                    newClass="category-tile"
                />
            </div>
        </section>
    );
}

export default ProductsContainer;
