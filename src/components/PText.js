import React from "react";
import styled from "styled-components";

const Text = styled.p`
  color: #ecf39e;
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  text-align: center;
`;

export default function PText({ children }) {
  return <Text>{children}</Text>;
}
