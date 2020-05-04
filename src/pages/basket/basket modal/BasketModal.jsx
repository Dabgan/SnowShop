import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    BasketModalContext,
    BasketProductsContext,
} from "../../../components/app/App";
import "./basketModal.css";
import BasketTile from "../basket products/basket tile/BasketTile";

const BasketModal = () => {
    const basketModal = useContext(BasketModalContext);
    const basketProducts = useContext(BasketProductsContext);
    const isModalVisible = basketModal.isModalVisible ? "flex" : "none";
    const basketLength = basketProducts.basketProducts.length;
    const [docTitle, setDocTitle] = useState(document.title);

    useEffect(() => {
        document.title = docTitle;
    }, [docTitle]);

    useEffect(() => {
        let newTitle = basketLength ? `SnowShop (${basketLength})` : `SnowShop`;
        setDocTitle(newTitle);
    }, [basketLength]);

    return (
        <div className="basket-modal" style={{ display: isModalVisible }}>
            {basketProducts.basketProducts.length ? (
                <>
                    <div className="row">
                        {basketProducts.basketProducts.map((product) => (
                            <BasketTile
                                productInfo={product}
                                key={product.id}
                                quantityOptions={false}
                            />
                        ))}
                    </div>

                    <Link to="/basket" className="my-btn basket-modal-btn">
                        Go to order
                    </Link>
                </>
            ) : (
                <p className="basket-modal-empty-info">
                    You don't have any products in your shopping cart!
                </p>
            )}
        </div>
    );
};

export default BasketModal;
