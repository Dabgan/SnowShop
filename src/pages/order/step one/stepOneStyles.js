import styled from "styled-components";

const OrderOptionsContainer = styled.div`
    // border: 2px solid red;
    display: flex;
    margin-top: 2.5rem;
    @media (min-width: 320px) and (max-width: 1181px) {
        flex-flow: column;
        align-items: center;
        justify-content: center;
        margin: 0 0 2.5rem;
    }
`;
const OrderOption = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    flex: 0 0 30%;
    padding: 1.5rem;
    margin: 1rem auto;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 2px 2px 3px 3px #cecece;
    text-align: center;
    position: relative;
    pointer-events: ${(props) => (props.disabled ? "none" : "visible")};
    user-select: ${(props) => (props.disabled ? "none" : "auto")};
    transition: box-shadow 0.3s ease-in-out;
    &:hover {
        color: inherit;
        text-decoration: none;
        box-shadow: 4px 4px 6px 6px #cecece;
    }
    ul {
        list-style: none;
    }
    input {
        border-radius: 5px;
        margin-bottom: 0.5rem;
    }
    @media (min-width: 320px) and (max-width: 1181px) {
        margin: 1rem 1rem;
        flex: auto;
        width: 80%;
        height: 17rem;
        overflow: hidden;
    }
`;
const OrderDisabled = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.7); /* Black w/opacity/see-through */
    pointer-events: none;
`;
const OrderDisabledTitle = styled(OrderDisabled)`
    width: 80%;
    height: auto;
    padding: 10px;
    border: 3px solid #cecece;
    font-size: 1.4rem;
    font-weight: 600;
    color: #ffffff;
    text-shadow: 3px 3px 4px #343a40;
    text-align: center;
`;
const OrderTitle = styled.h2`
    font-family: "Ubuntu", sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    width: 100%;
    text-align: center;
    margin-bottom: 0.8rem;
`;
const OrderBtn = styled.a`
    margin: 0 1rem;
    justify-content: center;
`;
const OrderForm = styled.form`
    display: flex;
    flex-flow: column;
    margin-bottom: 3rem;
`;

export {
    OrderOptionsContainer,
    OrderOption,
    OrderDisabled,
    OrderDisabledTitle,
    OrderTitle,
    OrderBtn,
    OrderForm,
};
