import { useReducer, useEffect, useState } from "react";

const useBasketLocal = () => {
    useEffect(() => {
        const basketProducts =
            JSON.parse(localStorage.getItem("basketProducts2")) || [];
        console.log(basketProducts);
        dispatch({ operation: "set", state: basketProducts });
    }, []);

    const [localBasketProducts, setLocalBasketProducts] = useState([]);

    let testItems = [
        {
            availability: 5,
            category: "goggles",
            crossedPrice: 19.99,
            img: "googles1",
            mark: "feomathar",
            price: 13.99,
            title: "Feomathar OTG Ski Goggles",
            quantity: 1,
        },
        {
            availability: 3,
            category: "snowboards",
            crossedPrice: 399.99,
            img: "snowboard",
            mark: "xardas",
            price: 299.99,
            title: "Xardas Necro Snowboard",
            quantity: 1,
        },
    ];

    const basketReducerLocalStorage = (state, action) => {
        switch (action.operation) {
            case "add":
                const localBasket = JSON.parse(
                    localStorage.getItem("basketProducts2")
                );
                const actualBasket = localBasket ? localBasket : [];

                // const id = action.product.id;

                const newBasketProduct = {
                    ...action.product,
                    oldId: action.product.id,
                    quantity: action.quantity,
                };

                console.log(`local basket`, localBasket);
                console.log("actual basket", actualBasket);
                actualBasket.push(newBasketProduct);
                console.log(`newBasketProduct`, newBasketProduct);
                console.log("actual basket", actualBasket);
                // const newLocalBasket = [...actualBasket, newBasketProduct];
                // console.log(`newLocalBasket`, newLocalBasket);

                localStorage.setItem(
                    "basketProducts2",
                    JSON.stringify(actualBasket)
                );
                // setLocalBasketProducts(newLocalBasket);
                return state;
            case "update":
                return state;
            case "delete":
                console.log(action);
                localStorage.removeItem({ category: "boots" });
                return state;
            case "set":
                const newState = action.state;
                return newState;
            default:
                return state;
        }
    };

    // useEffect(() => {
    //     localStorage.setItem("basketProducts", localBasketProducts);
    //     console.log(localBasketProducts);
    // }, [localBasketProducts]);

    // useEffect(() => {
    //     console.log(`dispatched`);
    //     dispatch({ operation: "set", state: localBasketProducts });
    // }, [localBasketProducts]);

    const [basketProducts, dispatch] = useReducer(
        basketReducerLocalStorage,
        []
    );
    return [basketProducts, dispatch];
};

export default useBasketLocal;
