import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import googles1 from "../assets/images/products/goggles1.jpg";
import googles2 from "./../assets/images/products/goggles2.jpg";
import googles3 from "./../assets/images/products/goggles3.jpg";
import helmet from "./../assets/images/products/helmet.jpg";
import ski_boots from "./../assets/images/products/ski_boots.jpg";
import snowboard from "./../assets/images/products/snowboard.jpg";
import snowboard_boots from "./../assets/images/products/snowboard_boots.jpg";
import snowboard_set from "./../assets/images/products/snowboard_set.jpg";
import ProductTile from "./product tile/ProductTile";

const Products = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        const productsRef = firebase.database().ref("productsTest");
        productsRef.on("value", (snapshot) => {
            let databaseProducts = snapshot.val();
            let newProducts = [];
            for (let dbProduct in databaseProducts) {
                newProducts.push({
                    id: dbProduct,
                    img: databaseProducts[dbProduct].img,
                    title: databaseProducts[dbProduct].title,
                    price: databaseProducts[dbProduct].price,
                    crossedPrice: databaseProducts[dbProduct].crossedPrice,
                    category: databaseProducts[dbProduct].category,
                    availability: databaseProducts[dbProduct].availability,
                    mark: databaseProducts[dbProduct].mark,
                });
            }
            setProducts(newProducts);
        });
    }, []);

    const addProduct = () => {
        const productsRef = firebase.database().ref("productsTest");

        testProducts.map((product) => productsRef.push(product));

        // const product = {
        //     img: image,
        //     title: "Beliar Emperor Snowboard Set",
        //     price: 229.99,
        //     crossedPrice: 399.99,
        //     category: "boots",
        //     availability: 2,
        //     mark: "beliar",
        // };
        // productsRef.push(product);
    };

    // const addCategory = () => {
    //     const productsRef = firebase.database().ref("categories");
    //     // const product = {
    //     //     img: image4,
    //     //     title: "Helmet Pulsar 2020",
    //     //     price: 79.99,
    //     //     crossedPrice: 129.99,
    //     // };
    //     productsRef.push(categories[6]);
    // };

    const testProducts = [
        {
            availability: 5,
            category: "goggles",
            crossedPrice: 19.99,
            img: googles1,
            mark: "feomathar",
            price: 13.99,
            title: "Feomathar OTG Ski Goggles",
        },
        {
            availability: 3,
            category: "snowboards",
            crossedPrice: 399.99,
            img: snowboard,
            mark: "xardas",
            price: 299.99,
            title: "Xardas Necro Snowboard",
        },
        {
            availability: 9,
            category: "boots",
            crossedPrice: 179.99,
            img: snowboard_boots,
            mark: "beliar",
            price: 111.99,
            title: "Beliar Emperor Snowboard Boots",
        },
        {
            availability: 16,
            category: "helmets",
            crossedPrice: 29.99,
            img: helmet,
            mark: "innos",
            price: 22.49,
            title: "Innos Nine x9 Snowboard Helmet",
        },
        {
            availability: 3,
            category: "goggles",
            crossedPrice: 25.99,
            img: googles2,
            mark: "pandrodor",
            price: 16.99,
            title: "Pandrodor OTG Ski Goggles",
        },
        {
            availability: 7,
            category: "goggles",
            crossedPrice: 23.99,
            img: googles3,
            mark: "beliar",
            price: 15,
            title: "Beliar Ski Goggles",
        },
        {
            availability: 3,
            category: "boots",
            crossedPrice: 79.99,
            img: ski_boots,
            mark: "innos",
            price: 66,
            title: "Innos Protector Ski Boots",
        },
        {
            availability: 2,
            category: "boots",
            crossedPrice: 399.99,
            img: snowboard_set,
            mark: "beliar",
            price: 229.99,
            title: "Beliar Emperor Snowboard Set",
        },
    ];

    console.table(testProducts);

    return (
        <div>
            <button className="my-btn" onClick={() => addProduct()}>
                Add Product to database
            </button>
            {/* {testProducts.map((product) => (
                <ProductTile
                    productImg={product.img}
                    productTitle={product.title}
                    price={product.price}
                    crossedPrice={product.crossedPrice}
                    key={product.id}
                    productPath={`/${product.category}/${product.id}`}
                />
            ))} */}
        </div>
    );
};

export default Products;
