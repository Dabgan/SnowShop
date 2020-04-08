import React, { useContext } from "react";
import "./categoryProductsContainer.css";
import ProductTile from "../../../components/featured products/product tile/ProductTile";
import { ProductsContext } from "../../../components/app/App";

function CategoryProductsContainer({ name }) {
    const products = useContext(ProductsContext);

    return (
        <section className="products-container">
            <h1 className="category-title">{name}</h1>
            <div className="sorting-container">
                <span className="category-products-counter">
                    Found{" "}
                    {
                        products.filter((product) => {
                            return product.category === name;
                        }).length
                    }{" "}
                    products in this category
                </span>
                <span>Sort by:</span>
                <select className="sortbar" name="sortbar" id="sortbar">
                    <option value="desc">Price: descending</option>
                    <option value="asc">Price: ascending</option>
                    <option value="az">Name: A to Z</option>
                    <option value="za">Name: Z to A</option>
                </select>
            </div>
            <div className="category-products">
                {products
                    .filter((product) => {
                        return product.category === name;
                    })
                    .map((product) => (
                        <ProductTile
                            productImg={product.img}
                            productTitle={product.title}
                            price={product.price}
                            crossedPrice={product.crossedPrice}
                            key={product.id}
                            newClass="category-tile"
                        />
                    ))}
            </div>
        </section>
    );
}

export default CategoryProductsContainer;
