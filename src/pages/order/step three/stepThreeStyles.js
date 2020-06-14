import styled from "styled-components";

const OrderSummary = styled.div`
    display: flex;
    flex-flow: row wrap;
    @media (min-width: 320px) and (max-width: 1181px) {
        flex-flow: column;
        align-items: center;
        justify-content: center;
        margin: 0 0 2.5rem;
    }
`;
const OrderSummaryPanel = styled.div`
    display: flex;
    flex-flow: ${(props) => (props.flexRow ? "row wrap" : "column wrap")};
    align-items: flex-start;
    flex: 1 0 40%;
    padding: 1.5rem;
    margin: 1rem auto;
    background-color: #ffffff;
    text-align: center;
    position: relative;
    .basket-product {
        width: 100%;
        min-height: 90px;
        max-height: 90px;
        margin: 0.6rem 0;
    }
    .cost-total {
        margin-top: auto;
    }
    ul {
        list-style: none;
    }
    @media (min-width: 320px) and (max-width: 1181px) {
        flex-flow: column;
        margin: 1rem 1rem;
        flex: auto;
        width: 80%;
    }
`;
const OrderSummaryInfo = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    flex: 1;
    height: 100%;
    min-width: ${(props) => (props.fullWidth ? "100%" : "auto")};
    .summary-row {
        width: 100%;
    }
    p {
        display: flex;
        width: 100%;
    }
    span {
        font-weight: 600;
        margin: 0 auto;
    }
    @media (min-width: 320px) and (max-width: 1181px) {
        padding: 0.4rem;
        width: 100%;
        align-items: center;
    }
`;
const OrderDataItem = styled.div`
    display: flex;
    justify-content: flex-start;
    span {
        margin: 0 0 0 auto;
    }
    p {
        margin-bottom: 0.3rem;
    }
    @media (min-width: 320px) and (max-width: 1181px) {
        justify-content: center;
    }
`;

const OrderTitle = styled.p`
    align-self: ${(props) => (props.center ? "center" : "auto")};
    font-family: "Ubuntu", sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    @media (min-width: 320px) and (max-width: 1181px) {
        display: flex;
        justify-content: center;
    }
`;
const ButtonPannel = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    padding: 1.5rem;
    a,
    button {
        margin: 0;
        border: 2px solid #000;
    }
    @media (min-width: 320px) and (max-width: 1181px) {
        margin: 1rem 0;
        width: 100%;
        justify-content: space-between;
    }
`;

export {
    OrderSummaryPanel,
    OrderSummary,
    OrderDataItem,
    OrderSummaryInfo,
    OrderTitle,
    ButtonPannel,
};
