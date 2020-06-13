import styled from "styled-components";
const OrderSummary = styled.div`
    /* border: 2px solid #069cc8; */
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
    /* border: 2px solid #f11b1b; */
    display: flex;
    flex-flow: ${(props) => (props.flexRow ? "row wrap" : "column")};
    align-items: flex-start;
    flex: 1 0 50%;
    padding: 1.5rem;
    margin: 1rem auto;
    background-color: #ffffff;
    text-align: center;
    position: relative;
    .basket-product {
        width: 100%;
        min-height: 90px;
        margin: 0.6rem 0;
    }
    .cost-total {
        margin-top: auto;
    }
    ul {
        list-style: none;
    }
    @media (min-width: 320px) and (max-width: 1181px) {
        margin: 1rem 1rem;
        flex: auto;
        width: 80%;
    }
`;
const OrderSummaryInfo = styled.div`
    /* border: 2px solid #069cc8; */
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    flex: 1;
    min-width: ${(props) => (props.fullWidth ? "100%" : "auto")};
    .summary-row {
        width: 100%;
    }
    p {
        display: flex;
        width: 100%;
        /* border: 2px solid #2ce90a; */
    }
    span {
        font-weight: 600;
        margin: 0 auto;
    }
`;
const OrderDataItem = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    /* border: 2px solid #f11b1b; */
    p {
        min-width: 60%;
        /* border: 2px solid #069cc8; */
    }
`;

const OrderTitle = styled.p`
    align-self: ${(props) => (props.center ? "center" : "auto")};
    font-family: "Ubuntu", sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
`;
const ButtonPannel = styled.div`
    /* border: 2px solid #f11b1b; */
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    padding: 1.5rem;
    a {
        margin: 0;
        border: 2px solid #000;
    }
    @media (min-width: 320px) and (max-width: 1181px) {
        margin: 1rem 1rem;
        width: 80%;
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
