import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background-color: black;
  ul {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    text-align: center;
    padding-left: 0;
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
      font-weight: bold; 
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <nav>
        <ul>
          <li><a href="https://github.com/ASHLOUISE">GitHub</a></li>
          <li><a href="https://linkedin.com/in/yourlinkedin">Stack Overflow</a></li>
        </ul>
      </nav>
    </FooterStyles>
  );
}

export default Footer;
