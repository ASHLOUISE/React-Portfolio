import React from "react";
import styled from "styled-components";
import myImage from "../components/HomeImage.JPG";
import PText from "../components/PText";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #283618;
`;

const Heading = styled.h1`
  font-size: 4rem;
  color: #ecf39e;
  position: absolute;
  top: 16%;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Poppins', sans-serif;
  z-index: 1;
`;

const Image = styled.img`
  width: 20%;
  height: 50%;
  border: 1px solid white; 
  box-sizing: border-box;
`;

const Info = styled.div`
  position: absolute;
  top: 73%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
`;

export default function Home() {
  return (
    <Container>
      <Image src={myImage} alt="Ashley Paluzzi" />
      <Heading>Ashley Paluzzi</Heading>
      <Info>
        <PText />
      </Info>
    </Container>
  );
}
