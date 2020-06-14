import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
    /* border: 2px solid #069cc8; */
    width: 100%;
    height: 55px;
    padding: 0;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        height: auto;
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <Burger />
        </Nav>
    );
};

export default Navbar;
