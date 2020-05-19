import React, { useEffect } from "react";
import firebase from "../firebase";
import googles1 from "../assets/images/products/goggles1.jpg";
import googles2 from "./../assets/images/products/goggles2.jpg";
import googles3 from "./../assets/images/products/goggles3.jpg";
import googles4 from "./../assets/images/products/goggles4.jpg";
import googles5 from "./../assets/images/products/goggles5.jpg";
import googles6 from "./../assets/images/products/goggles6.jpg";
import helmet1 from "./../assets/images/products/helmet1.jpg";
import helmet3 from "./../assets/images/products/helmet3.jpg";
import helmet4 from "./../assets/images/products/helmet4.jpg";
import helmet5 from "./../assets/images/products/helmet5.jpg";
import ski_boots from "./../assets/images/products/ski_boots.jpg";
import snowboard1 from "./../assets/images/products/snowboard1.jpg";
import snowboard2 from "./../assets/images/products/snowboard2.jpg";
import snowboard_boots from "./../assets/images/products/snowboard_boots.jpg";
import boots1 from "./../assets/images/products/boots1.jpg";
import boots2 from "./../assets/images/products/boots2.jpg";
import boots3 from "./../assets/images/products/boots3.jpg";
import boots4 from "./../assets/images/products/boots4.jpg";
import gloves1 from "./../assets/images/products/gloves1.png";
import gloves2 from "./../assets/images/products/gloves2.png";
import gloves_kids from "./../assets/images/products/gloves_kids.jpg";
import snowboard_set from "./../assets/images/products/snowboard_set.jpg";

const Products = () => {
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
        });
    }, []);

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
            availability: 3,
            category: "snowboards",
            crossedPrice: 399.99,
            img: snowboard1,
            mark: "xardas",
            price: 299.99,
            title: "Xardas Necro Snowboard",
        },
        {
            availability: 16,
            category: "helmets",
            crossedPrice: 29.99,
            img: helmet1,
            mark: "innos",
            price: 22.49,
            title: "Innos Nine x9 Snowboard Helmet",
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
            category: "goggles",
            crossedPrice: 25.99,
            img: googles2,
            mark: "pandrodor",
            price: 16.99,
            title: "Pandrodor OTG Ski Goggles",
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
            availability: 5,
            category: "goggles",
            crossedPrice: 19.99,
            img: googles1,
            mark: "feomathar",
            price: 13.99,
            title: "Feomathar OTG Ski Goggles",
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
        {
            availability: 1,
            img: snowboard_set,
            crossedPrice: 699.99,
            category: "boots",
            mark: "eagle slash",
            price: 399.99,
            title: "Eagle Slash Snowboard Set",
        },
        {
            availability: 7,
            img: boots1,
            crossedPrice: 111.99,
            category: "boots",
            mark: "burton",
            price: 89.99,
            title: "Burton Snowboard Boots",
        },
        {
            availability: 2,
            img: boots2,
            crossedPrice: 99.99,
            category: "boots",
            mark: "imperial",
            price: 69.99,
            title: "Imperial Snowboard Boots",
        },
        {
            availability: 15,
            img: gloves1,
            crossedPrice: 29.99,
            category: "gloves",
            mark: "analog",
            price: 25.99,
            title: "Analog psycho waterproof gloves",
        },

        {
            availability: 55,
            img: helmet3,
            crossedPrice: 55.99,
            category: "helmets",
            mark: "anon",
            price: 32.99,
            title: "Anon funny meme helmet",
        },
        {
            availability: 55,
            img: helmet4,
            crossedPrice: 55.99,
            category: "helmets",
            mark: "anon",
            price: 32.99,
            title: "Anon clumsy rainbow helmet",
        },
        {
            availability: 9,
            img: snowboard2,
            crossedPrice: 449.99,
            category: "snowboards",
            mark: "innos",
            price: 399.99,
            title: "Innos The Protector snowboard",
        },
        {
            availability: 666,
            img: googles4,
            crossedPrice: 16.69,
            category: "goggles",
            mark: "xardas",
            price: 16.66,
            title: "Xardas black UV Protection goggles",
        },
        {
            availability: 666,
            img: googles5,
            crossedPrice: 16.69,
            category: "goggles",
            mark: "xardas",
            price: 16.66,
            title: "Xardas orange UV Protection goggles",
        },
        {
            availability: 666,
            img: googles6,
            crossedPrice: 16.69,
            category: "goggles",
            mark: "xardas",
            price: 16.66,
            title: "Xardas turquoise UV Protection goggles",
        },
        {
            availability: 215,
            img: boots3,
            crossedPrice: 159.99,
            category: "boots",
            mark: "pyrokar",
            price: 116.66,
            title: "Pyrokar Firestorm snowboard boots",
        },
        {
            availability: 215,
            img: boots4,
            crossedPrice: 159.99,
            category: "boots",
            mark: "adanos",
            price: 116.66,
            title: "Adanos gale snowboard boots",
        },
        {
            availability: 666,
            img: gloves2,
            crossedPrice: 39.99,
            category: "gloves",
            mark: "xardas",
            price: 29.99,
            title: "Xardas functional gloves",
        },
        {
            availability: 59,
            img: helmet5,
            crossedPrice: 49.99,
            category: "helmets",
            mark: "xardas",
            price: 29.99,
            title: "Xardas dark helmet",
        },
        {
            availability: 25,
            img: gloves_kids,
            crossedPrice: 10.0,
            category: "gloves",
            mark: "unicorn",
            price: 0.99,
            title: "Unicorn's grasp kids gloves ",
        },
        {
            availability: 5,
            category: "snowboards",
            crossedPrice: 429.99,
            img: snowboard1,
            mark: "xardas",
            price: 319.99,
            title: "Xardas Necro Snowboard darker version",
        },
        {
            availability: 4,
            img: snowboard2,
            crossedPrice: 469.99,
            category: "snowboards",
            mark: "innos",
            price: 419.99,
            title: "Innos The Protector lighter version",
        },
    ];

    const addProduct = () => {
        const productsRef = firebase.database().ref("products");
        for (let i = 0; i < testProducts.length; i++) {
            productsRef.push(testProducts[i]);
        }
    };

    return (
        <div>
            <button className="my-btn" onClick={() => addProduct()}>
                Add Product to database
            </button>
        </div>
    );
};

export default Products;
