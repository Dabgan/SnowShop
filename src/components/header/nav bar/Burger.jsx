import React, { useRef, useContext } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside/useOnClickOutside";
import { BurgerMenuContext } from "../../app/App";
import styled from "styled-components";
import RightNav from "./RightNav";

const BurgerContainer = styled.div`
    width: 100%;
`;

const StyledBurger = styled.div`
    height: 2rem;
    position: fixed;
    top: 21px;
    right: 20px;
    z-index: 2;
    cursor: pointer;
    display: none;
    &:focus {
        outline: none;
    }

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    span {
        width: 2rem;
        height: 0.33rem;
        background-color: ${({ open }) => (open ? "#ccc" : "#4b4b4b")};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
            transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
        }
        &:nth-child(2) {
            transform: ${({ open }) =>
                open ? "translateX(100%)" : "translateX(0)"};
            opacity: ${({ open }) => (open ? 0 : 1)};
        }
        &:nth-child(3) {
            transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
        }
    }
`;

const Burger = () => {
    const burgerMenuContext = useContext(BurgerMenuContext);
    const open = burgerMenuContext.openBurger;
    const setOpen = burgerMenuContext.setOpenBurger;
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    return (
        <BurgerContainer ref={node}>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <span />
                <span />
                <span />
            </StyledBurger>
            <RightNav open={open} />
        </BurgerContainer>
    );
};
export default Burger;
