import React, { useEffect } from "react";
import ShoppingPath from "../ShoppingPath";
import styled from "styled-components";
import useBasketCost from "../../../hooks/useBasket/useBasketCost";
import useBasketLocal from "../../../hooks/useBasket/useBasketLocal";

const SummaryText = styled.div`
    padding: 2rem;
    border-radius: 5px;
    margin: 1rem auto;
    background-color: #ffffff;
    p {
        margin: 0.5rem auto;
    }
`;
const Title = styled.h1`
    margin: 1rem 0;
    width: 100%;
    font-family: "Ubuntu", sans-serif;
    font-size: 2.5rem;
    font-weight: 600;
`;
const Price = styled.span`
    font-weight: 600;
`;

const OrderStepFour = () => {
    const [, , totalCost] = useBasketCost();
    // const [basketProducts, dispatch] = useBasketLocal();

    // useEffect(() => {
    //     console.log(`lol`);
    //     dispatch({ operation: "clear" });
    //     return dispatch({ operation: "clear" });
    // }, [dispatch]);

    return (
        <>
            <ShoppingPath active={4} />
            <SummaryText>
                <Title>Thank you for your order!</Title>
                <p>
                    In a moment you will receive an e-mail asking you to confirm
                    it.
                </p>
                <p>
                    Total purchase value, including shipping costs:{" "}
                    <Price>{totalCost} $</Price>
                </p>
                <p>To pay for your order we invite you to our office.</p>
                <p>
                    We will also inform you about the change of status by
                    e-mail.
                </p>
                <p>
                    In case of any questions or doubts, please contact us by
                    phone: 420 213 769 or e-mail shop@snowshop.pl
                </p>
            </SummaryText>
        </>
    );
};

export default OrderStepFour;
