import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavMenuStyles = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    background-color: black;
    ul {
        max-width: 1200px;
        width: 90%;
        margin: 0 auto;
        text-align: center;
        li {
            display: inline-block;
            border-radius: 8px;
            transition: 0.3s ease background-color;
            &:hover {
                background-color: #a98467;
            }
        }
        a {
            display: inline-block;
            font-family: 'Poppins', sans-serif;
            padding: 1rem 2rem;
            font-size: 1rem;
            color: white;
            outline: none;
            text-decoration: none;
        }
        .active {
            color: #ecf39e;
            font-weight: bold; /* Add a style for the active link */
        }
    }
`;

export default function NavMenu() {
    return (
        <NavMenuStyles>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active">HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active">ABOUT ME</NavLink>
                </li>
                <li>
                    <NavLink to="/resume" activeClassName="active">RESUME</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" activeClassName="active">PORTFOLIO</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact" activeClassName="active">CONTACT</NavLink>
                </li>
            </ul>
        </NavMenuStyles>
    );
}
