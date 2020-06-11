import { useContext } from "react";
import { BasketProductsContext } from "../../components/app/App";

const useBasketCost = () => {
    const basketContext = useContext(BasketProductsContext);
    const deliveryCost = 6.99;
    const productsCost =
        Math.floor(
            basketContext.basketProducts.reduce((accumulator, product) => {
                return accumulator + product.price * product.quantity;
            }, 0) * 100
        ) / 100;
    const discount = (productsCost + deliveryCost) * 0.05;
    const totalCost =
        productsCost === 0
            ? 0
            : Math.floor((productsCost + deliveryCost - discount) * 100) / 100;

    return [productsCost, deliveryCost, totalCost];
};

export default useBasketCost;
