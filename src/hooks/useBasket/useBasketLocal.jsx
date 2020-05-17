import { useReducer, useEffect } from "react";

let localBasketProducts = [];
const basketReducerLocalStorage = (state, action) => {
    const KEY = "basket_products";

    // update localStorage
    const sync = () => {
        let basket = JSON.stringify(localBasketProducts);
        localStorage.setItem(KEY, basket);
    };

    // find an item in the cart by its id
    const find = () => {
        const match = localBasketProducts.filter((item) => {
            if (item.id === action.product.id) return true;
        });
        if (match && match[0]) return match[0];
    };

    // add an item to cart. If it is in the cart already increase it quantity
    const add = () => {
        if (find()) {
            increase(action.quantity);
        } else {
            const newBasketProduct = {
                ...action.product,
                oldId: action.product.id,
                quantity: action.quantity,
            };
            localBasketProducts.push(newBasketProduct);
        }
        sync();
    };

    // remove item from cart
    const remove = (id) => {
        localBasketProducts = localBasketProducts.filter((item) => {
            if (item.id !== id) {
                return true;
            } else return false;
        });
        sync();
    };

    // increase quantity
    const increase = (quantity = 1) => {
        localBasketProducts = localBasketProducts.map((item) => {
            if (item.id === find().id) {
                item.quantity = item.quantity + quantity;
            }
            return item;
        });
    };

    // decrease quantity
    const decrease = () => {
        localBasketProducts = localBasketProducts.map((item) => {
            if (item.id === find().id) {
                item.quantity = item.quantity - 1;
            }
            return item;
        });
        localBasketProducts.find((item) => {
            if (item.id === find().id && item.quantity === 0) {
                remove(find().id);
                return true;
            }
        });
        sync();
    };

    switch (action.operation) {
        case "init":
            const basketProducts = localStorage.getItem("basket_products");
            localBasketProducts = JSON.parse(basketProducts) || [];
            sync();
            return localBasketProducts;
        case "add":
            add();
            return localBasketProducts;
        case "delete":
            remove(action.productId);
            return localBasketProducts;
        case "update":
            if (action.update === "increment") {
                increase();
            } else if (action.update === "decrement") {
                decrease();
            }
            sync();
            return localBasketProducts;
        default:
            sync();
            return localBasketProducts;
    }
};

const useBasketLocal = () => {
    useEffect(() => {
        dispatch({ operation: "init" });
    }, []);

    const [basketProducts, dispatch] = useReducer(
        basketReducerLocalStorage,
        []
    );

    return [basketProducts, dispatch];
};

export default useBasketLocal;
