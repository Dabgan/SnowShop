import React from "react";
import styled from "styled-components";

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
    height: 1.6rem;
    width: 1.6rem;
    border-radius: 50%;
    background: #343a40;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    user-select: none;
    @media (min-width: 320px) and (max-width: 1181px) {
        height: 0.9rem;
        width: 0.9rem;
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
    :nth-of-type(${(props) => props.activeNum}) {
        div {
            background: linear-gradient(to right, #30cfd0 0%, #330867 100%);
        }
    }
    p {
        margin-top: 0.2rem;
        font-size: 0.8rem;
    }
`;

const ShoppingPath = ({ active }) => {
    return (
        <ShoppingPathContainer>
            <OrderStep activeNum={active}>
                <OrderStepNum>1</OrderStepNum>
                <p>Login/Register</p>
            </OrderStep>
            <OrderStep activeNum={active}>
                <OrderStepNum>2</OrderStepNum>
                <p>Your Data</p>
            </OrderStep>
            <OrderStep activeNum={active}>
                <OrderStepNum>3</OrderStepNum>
                <p>Summary</p>
            </OrderStep>
            <OrderStep activeNum={active}>
                <OrderStepNum>4</OrderStepNum>
                <p>Confirmation</p>
            </OrderStep>
        </ShoppingPathContainer>
    );
};

export default ShoppingPath;
