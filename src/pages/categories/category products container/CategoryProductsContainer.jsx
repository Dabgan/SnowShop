import React, { useContext } from "react";
import "./categoryProductsContainer.css";
import ProductTile from "../../../components/featured products/product tile/ProductTile";
import { FilteredProductsContext } from "../CategoryComponent";

function CategoryProductsContainer({ name }) {
    const filterContext = useContext(FilteredProductsContext);
    const productsOfThisCategory = filterContext.filteredProducts;

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
                    onChange={(e) =>
                        filterContext.filterProducts({
                            filtr: "sort",
                            val: e.target.value,
                        })
                    }
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
                        productImg={product.img}
                        productTitle={product.title}
                        price={product.price}
                        crossedPrice={product.crossedPrice}
                        key={product.id}
                        newClass="category-tile"
                        productPath={`/${product.category}/${product.id}`}
                    />
                ))}
            </div>
        </section>
    );
}

export default CategoryProductsContainer;
