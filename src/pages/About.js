import React from "react";
import styled from "styled-components";
import myImage from "../components/IMG_1738.JPG";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #283618;
`;

const ImageContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  position: absolute;
  left: 20px; 
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(30, 30, 30, 0.8);
  color: white;
  padding: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem; 
  width: 1500px; 
  max-width: 80%; 
  max-height: 80vh; 
  border-radius: 10px;
`;

const Heading = styled.h1`
  font-size: 4rem;
  color: #ecf39e;
  font-family: "Poppins", sans-serif;
`;

const AboutText = styled.p`
  color: #ecf39e;
  font-size: 1.6rem; 
  font-family: "Poppins", sans-serif;
  text-align: left;
  line-height: 1.6;

  &.about-text {
    font-size: 1.2rem;
  }
`;

export default function About() {
  return (
    <Container>
      <ImageContainer>
        <Image src={myImage} alt="Ashley Paluzzi" />
      </ImageContainer>
      <InfoContainer>
        <Heading>About Me</Heading>
        <AboutText className="about-text">
          Hey! 👋 I'm Ashley, a passionate and dedicated web developer with a
          knack for crafting delightful digital experiences. With a solid
          foundation in HTML, CSS, and JavaScript, I've ventured into the
          exciting realms of web development and beyond.
          <br />
          <br />
          <strong>What I Bring to the Table</strong>
          <div>
            <ul>
              <li>
                HTML, CSS, JavaScript: These are the building blocks of the web,
                and I've mastered them to create stunning and responsive user
                interfaces.
                <br />
              </li>
              <li>
                API Integration: I'm proficient in integrating both third-party
                APIs and building server-side APIs to enhance the functionality of
                web applications.
                <br />
              </li>
              <li>
                Node.js and Express.js: I leverage the power of Node.js and
                Express.js to build scalable and efficient server-side
                applications.
                <br />
              </li>
              <li>
                Database Management: From traditional SQL databases to modern
                NoSQL solutions, I've got the skills to design and manage
                databases effectively.
                <br />
              </li>
              <li>
                MVC and ORM: I'm well-versed in using MVC architecture and ORM
                frameworks to keep my code organized and maintainable.
                <br />
              </li>
              <li>
                React and MERN Stack: React has become my go-to library for
                building dynamic and interactive frontends, and I'm adept at
                crafting full-stack applications using the MERN (MongoDB,
                Express.js, React, Node.js) stack.
                <br />
              </li>
              <li>
                Progressive Web Apps (PWAs): I believe in creating web
                applications that provide a seamless experience across all
                devices, and PWAs allow me to achieve that by leveraging modern
                web capabilities.
                <br />
              </li>
            </ul>
          </div>
          <br />
        </AboutText>
      </InfoContainer>
    </Container>
  );
}
