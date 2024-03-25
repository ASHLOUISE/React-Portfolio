import React from "react";
import styled from "styled-components";
import myImage from "../components/imageedit_1_8138802605.png";
import PText from "../components/PText";

import "@fontsource/pacifico";


const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #283618;
`;

const Image = styled.img`
  width: 40%;
  height: 70%;
`;

const TextContainer = styled.div`
  text-align: left;
  padding-left: 20px;
`;

const Heading = styled.h1`
  font-size: 8rem;
  color: #ecf39e;
  font-family: "Pacifico", cursive;
  font-weight: 400;
  margin: 0;
  text-decoration: underline;
`;

const SubHeading = styled.h2`
  font-size: 3rem;
  text-align: center;
  color: black;
  font-family: "Pacifico", cursive;
  font-weight: 400;
`;

export default function Home() {
  return (
    <Container>
      <TextContainer>
        <Heading>Ashley Paluzzi</Heading>
        <SubHeading>Welcome to my portfolio!</SubHeading>
        <PText />
      </TextContainer>
      <Image src={myImage} alt="Logo" />
    </Container>
  );
}
