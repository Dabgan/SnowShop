import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
    max-width: 100%;
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

export default React.memo(Navbar);
