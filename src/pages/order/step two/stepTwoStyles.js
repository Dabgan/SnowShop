import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    @media (min-width: 320px) and (max-width: 1181px) {
        flex-flow: column;
        align-items: center;
        justify-content: center;
        margin: 0 0 2.5rem;
    }
`;
const FormTitle = styled.p`
    margin-bottom: 1rem;
    width: 100%;
    font-family: "Ubuntu", sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
`;
const FormControl = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 0.5rem;
    height: 100%;
    width: 80%;
    @media (min-width: 320px) and (max-width: 1181px) {
        align-items: stretch;
        width: 100%;
    }
`;
const FormData = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    flex: 1 0 40%;
    padding: 1.5rem;
    margin: 1rem auto;
    background-color: #ffffff;
    text-align: center;
    position: relative;
    pointer-events: ${(props) => (props.disabled ? "none" : "visible")};
    user-select: ${(props) => (props.disabled ? "none" : "auto")};
    ul {
        list-style: none;
    }
    @media (min-width: 320px) and (max-width: 1181px) {
        margin: 1rem 1rem;
        flex: auto;
        width: 80%;
    }
`;
const FormLabel = styled.label`
    text-transform: capitalize;
    margin-bottom: 0;
`;
const StyledInput = styled.input`
    border-radius: 5px;
    border: 2px solid black;
    margin-bottom: 0.5rem;
    padding: 0.3rem 0.3rem 0.3rem 1rem;
    width: 100%;
`;
const StyledTextArea = styled.textarea`
    height: 200px;
    width: 35rem;
    padding-top: 0.5rem;
    align-self: center;
    resize: none;
    @media (min-width: 320px) and (max-width: 1181px) {
        height: 10rem;
        width: auto;
        align-self: stretch;
    }
`;
const FormError = styled.div`
    display: ${(props) => (props.error && props.touched ? "block" : "none")};
    font-size: 0.8rem;
    color: red;
`;
const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 0 100%;
    button {
        margin-top: 0;
    }
`;

export {
    StyledForm,
    FormData,
    FormTitle,
    StyledInput,
    FormError,
    FormLabel,
    FormControl,
    BtnContainer,
    StyledTextArea,
};
