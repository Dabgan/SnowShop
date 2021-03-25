import React from 'react';
import styled from 'styled-components';
import CategoriesMenuItem from '../categories menu/CategoriesMenuItem';

const Ul = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    list-style: none;
    background-color: #343a40;
    li {
        padding: 1rem 0.7rem;
    }
    @media (max-width: 768px) {
        flex-flow: column nowrap;
        justify-content: flex-start;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        background-color: #343a40;
        position: fixed;
        transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding: 5rem 0;
        transition: transform 0.3s ease-in-out;
        li {
            color: #fff;
        }
    }
`;

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <CategoriesMenuItem name={'snowboards'} />
            <CategoriesMenuItem name={'boots'} />
            <CategoriesMenuItem name={'goggles'} />
            <CategoriesMenuItem name={'gloves'} />
            <CategoriesMenuItem name={'helmets'} />
        </Ul>
    );
};

export default React.memo(RightNav);
