import { useReducer, useEffect } from "react";
import firebase from "../../firebase.js";

const basketReducer = (state, action) => {
    const basketRef = firebase.database().ref("basket");
    let productQuantity = 0;
    let newItemReference = null;
    switch (action.operation) {
        case "add":
            basketRef
                .orderByChild("title")
                .equalTo(action.product.title)
                .on("child_added", (data) => {
                    console.log(data.val());
                    return (
                        (productQuantity = data.val().quantity),
                        (newItemReference = data.ref)
                    );
                });
            if (newItemReference) {
                newItemReference.update({
                    quantity: action.quantity + productQuantity,
                });
            } else {
                const basketProduct = {
                    ...action.product,
                    oldId: action.product.id,
                    quantity: action.quantity,
                };
                console.log(basketProduct);
                basketRef.push(basketProduct);
            }
            return state;
        case "update":
            console.log(action.product);
            basketRef
                .orderByChild("title")
                .equalTo(action.product.title)
                .on("child_added", (data) => {
                    console.log(data.val());
                    return (
                        (productQuantity = data.val().quantity),
                        (newItemReference = data.ref)
                    );
                });
            if (newItemReference) {
                console.log(`to jest podane quanitt:`, action.quantity);
                newItemReference.update({
                    quantity:
                        action.update === "increment"
                            ? action.quantity + 1
                            : action.quantity - 1,
                });
            }
            return state;
        case "delete":
            const productRef = firebase
                .database()
                .ref(`basket/${action.productId}`);
            productRef.remove();
            return state;
        case "set":
            return action.state;
        default:
            return state;
    }
};

const useBasketFirebase = () => {
    useEffect(() => {
        const basketProductsRef = firebase.database().ref("basket");
        basketProductsRef.on("value", (snapshot) => {
            let databaseProducts = snapshot.val();
            let newProducts = [];
            for (let dbProduct in databaseProducts) {
                newProducts.push({
                    ...databaseProducts[dbProduct],
                    id: dbProduct,
                });
            }
            dispatch({ operation: "set", state: newProducts });
        });
    }, []);

    const [basketProducts, dispatch] = useReducer(basketReducer, []);
    return [basketProducts, dispatch];
};

export default useBasketFirebase;
