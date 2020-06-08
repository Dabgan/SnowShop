import React from "react";
import styled from "styled-components";

const OrderStepContainer = styled.div`
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
    background-color: #343a40;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    user-select: none;
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

const OrderStepActive = styled(OrderStep)`
    background-color: #36d67a;
`;

const OrderSteps = () => {
    return (
        <OrderStepContainer>
            <OrderStep>
                <OrderStepNum>1</OrderStepNum>
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
        </OrderStepContainer>
    );
};

export default OrderSteps;
