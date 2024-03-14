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
    background-color: #B08968;
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
                background-color: #E6CCB2;
            }
        }
        a {
            display: inline-block;
            font-family: 'Poppins', sans-serif;
            padding: 1rem 2rem;
            font-size: 1rem;
            color: #1E1E1E;
            outline: none;
            text-decoration: none;
        }
        .active {
            color: white;
        }
    }
`;

export default function NavMenu() {
    return (
        <NavMenuStyles>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/resume">Resume</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact">Contact</NavLink>
                </li>
            </ul>
        </NavMenuStyles>
    );
}

