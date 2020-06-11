import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ShoppingPathContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 320px) and (max-width: 1181px) {
        justify-content: space-around;
    }
`;

const OrderStepNum = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 0 3rem;
    height: 0.9rem;
    width: 0.9rem;
    border-radius: 50%;
    background: #343a40;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    user-select: none;
    @media (min-width: 320px) and (max-width: 1181px) {
        height: 0.7rem;
        width: 0.7rem;
        font-size: 0.9rem;
        margin: 0 0;
    }
`;

const OrderStep = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 600;
    a {
        color: #fff;
        &:hover {
            color: #fff;
            text-decoration: none;
        }
    }
    :nth-of-type(${(props) => props.activeNum}) {
        a {
            background: linear-gradient(to right, #30cfd0 0%, #330867 100%);
        }
    }
`;
const StepLabel = styled.p`
    margin-top: 0.2rem;
    font-size: 0.8rem;
`;

const ShoppingPath = ({ active }) => {
    return (
        <ShoppingPathContainer>
            <OrderStep activeNum={active}>
                <OrderStepNum as={Link} to={"/order/step1"}>
                    1
                </OrderStepNum>

                <StepLabel>Login/Register</StepLabel>
            </OrderStep>
            <OrderStep activeNum={active}>
                <OrderStepNum as={Link} to={"/order/step2"}>
                    2
                </OrderStepNum>
                <StepLabel>Your Data</StepLabel>
            </OrderStep>
            <OrderStep activeNum={active}>
                <OrderStepNum>3</OrderStepNum>
                <StepLabel>Summary</StepLabel>
            </OrderStep>
            <OrderStep activeNum={active}>
                <OrderStepNum>4</OrderStepNum>
                <StepLabel>Confirmation</StepLabel>
            </OrderStep>
        </ShoppingPathContainer>
    );
};

export default ShoppingPath;
