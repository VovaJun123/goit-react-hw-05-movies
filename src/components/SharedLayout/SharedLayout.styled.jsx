import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyleHeader = styled.header`
    padding: 30px 30px;
    text-align: center;
    background-color: #4e2323;
`;

export const StyledNavLink = styled(NavLink)`
    display: inline-block;
    font-size: 24px;
    font-weight: 500px;
    text-decoration: none;
    transition: color 200ms ease-in-out;
    color: #E0FFFF;

    &:not(:last-child) {
        margin-right: 40px;
    }

    &:active,
    &:hover,
    &:focus {
        color: #000;
        border: 2px solid #000;
        padding: 5px;
       
    }
`;