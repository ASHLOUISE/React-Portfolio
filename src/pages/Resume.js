import React from 'react';
import styled from 'styled-components';

import resumeFile from '../components/Resume.png';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px; 
  height: calc(100vh - 80px); 
  background-color: #283618;
  
`;

const InfoContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(30, 30, 30, 0.8);
  color: white;
  padding: 20px 60px;
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  max-width: 150%; 
  max-height: 80vh;
  border-radius: 10px;
`;


const Heading = styled.h1`
  font-size: 4rem;
  color: #ecf39e;
  font-family: 'Poppins', sans-serif;
  margin-top: 0;
  margin-bottom: 40px;
  text-decoration: underline;
`;

const ProficiencyList = styled.ul`
  list-style-type: none;
  padding-left: 0;
 
`;

const ProficiencyCategory = styled.li`
  margin-bottom: 20px;
`;


const ProficiencyItem = styled.li`
  margin-left: 20px;
`;

const DownloadLink = styled.a`
  color: #ff006e;
  text-decoration: none;
  font-size: 1.6rem;
  display: block;
  margin-top: 20px;
  text-align: center;
  text-decoration: underline;
`;

const MIMEType = 'image/png';

export default function Resume() {
  return (
    <Container>
      <InfoContainer>
        <Heading>Developer Proficiencies</Heading>
        <ProficiencyList>
          <ProficiencyCategory>Programming Languages:
            <ul>
              <ProficiencyItem>JavaScript</ProficiencyItem>
              <ProficiencyItem>Java</ProficiencyItem>
              
            </ul>
          </ProficiencyCategory>
          <ProficiencyCategory>Frontend Development:
            <ul>
              <ProficiencyItem>HTML5</ProficiencyItem>
              <ProficiencyItem>JavaScript</ProficiencyItem>
              <ProficiencyItem>React</ProficiencyItem>
            </ul>
          </ProficiencyCategory>
          <ProficiencyCategory>Backend Development:
            <ul>
              <ProficiencyItem>Node.js</ProficiencyItem>
              <ProficiencyItem>Express.js</ProficiencyItem>
            </ul>
          </ProficiencyCategory>
        </ProficiencyList>
        <DownloadLink href={resumeFile} download="Resume.png" type={MIMEType}>
          DOWNLOAD RESUME HERE
        </DownloadLink>
      </InfoContainer>
    </Container>
  );
}
