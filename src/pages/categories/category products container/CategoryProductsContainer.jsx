import React, { useContext } from "react";
import "./categoryProductsContainer.scss";
import ProductTile from "../../../components/product tile/ProductTile";
import { FilteredProductsContext } from "../CategoryComponent";

const CategoryProductsContainer = ({ name }) => {
    const filterContext = useContext(FilteredProductsContext);
    const productsOfThisCategory = filterContext.filteredProducts;

    const handleSort = (e) => {
        filterContext.filterProducts({
            myFilter: "sort",
            val: e.target.value,
        });
    };

    return (
        <section className="products-container">
            <h1 className="category-title">{name}</h1>
            <div className="sorting-container">
                <span className="category-products-counter">
                    Found {productsOfThisCategory.length} products in this
                    category
                </span>
                <span>Sort by:</span>
                <select
                    onChange={(e) => handleSort(e)}
                    className="sortbar"
                    name="sortbar"
                    id="sortbar"
                >
                    <option value="desc">Price: descending</option>
                    <option value="asc">Price: ascending</option>
                    <option value="az">Name: A to Z</option>
                    <option value="za">Name: Z to A</option>
                </select>
            </div>
            <div className="category-products">
                {productsOfThisCategory.map((product) => (
                    <ProductTile
                        productInfo={product}
                        newClass="category-tile"
                        key={product.id}
                    />
                ))}
            </div>
        </section>
    );
};

export default CategoryProductsContainer;
