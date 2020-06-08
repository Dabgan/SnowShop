import React from "react";
import styled from "styled-components";

const ShoppingPathContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 0.5rem;
`;

const OrderStepNum = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    height: 3rem;
    width: 3rem;
    // border: 2px solid black;
    border-radius: 50%;
    background: ${(props) =>
        props.active
            ? "linear-gradient(to right, #30cfd0 0%, #330867 100%)"
            : "#343a40"};
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    user-select: none;
    @media (min-width: 320px) and (max-width: 1181px) {
        height: 2rem;
        width: 2rem;
        font-size: 1.2rem;
    }
`;

const OrderStep = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 600;
    p {
        margin-top: 0.5rem;
    }
`;

const OrderSteps = () => {
    return (
        <ShoppingPathContainer>
            <OrderStep>
                <OrderStepNum active>1</OrderStepNum>
                <p>Login/Register</p>
            </OrderStep>
            <OrderStep>
                <OrderStepNum>2</OrderStepNum>
                <p>Your Data</p>
            </OrderStep>
            <OrderStep>
                <OrderStepNum>3</OrderStepNum>
                <p>Summary</p>
            </OrderStep>
            <OrderStep>
                <OrderStepNum>4</OrderStepNum>
                <p>Confirmation</p>
            </OrderStep>
        </ShoppingPathContainer>
    );
};

export default OrderSteps;
