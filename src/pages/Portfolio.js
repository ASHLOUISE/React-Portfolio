import React from 'react';
import styled from 'styled-components';


import project1Image from '../components/ch5.jpg';
import project2Image from '../components/ch6.jpg';
import project3Image from '../components/ch11.png';
import project4Image from '../components/ch12.jpg';
import project5Image from '../components/p1.jpg';
import project6Image from '../components/p2.jpg';


const PortfolioContainer = styled.section`
  background-color: #283618;
  padding: 50px 0;
  min-height: 100vh;
  text-align: center; 
`;

const PortfolioHeading = styled.h2`
  color: #ecf39e;
  font-size: 4rem; 
  font-family: "Poppins", sans-serif;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ProjectCard = styled.div`
  background-color: rgba(30, 30, 30, 0.8);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  max-width: 300px;
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const ProjectTitle = styled.h3`
  margin-top: 10px;
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
`;

const ProjectLinks = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
`;

const Link = styled.a`
  color: #ecf39e;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd166;
  }
`;


const projects = [
  {
    title: 'Project 1',
    image: project1Image,
    deployedLink: 'https://ashlouise.github.io/Challenge-05/',
    githubLink: 'https://github.com/ASHLOUISE/Challenge-05'
  },
  {
    title: 'Project 2',
    image: project2Image,
    deployedLink: 'https://your-deployed-app.com',
    githubLink: 'https://github.com/ASHLOUISE/Challenge-06'
  },
  {
    title: 'Project 3',
    image: project3Image,
    deployedLink: 'https://ashlouise.github.io/Challenge-11/',
    githubLink: 'https://github.com/ASHLOUISE/Challenge-11'
  },
  {
    title: 'Project 4',
    image: project4Image,
    deployedLink: 'https://your-deployed-app.com',
    githubLink: 'https://github.com/ASHLOUISE/Challenge-12'
  },
  {
    title: 'Project 5',
    image: project5Image,
    deployedLink: 'https://jessicadubina.github.io/ChuckYe-Meme-Generator/',
    githubLink: 'https://github.com/JessicaDubina/ChuckYe-Meme-Generator'
  },
  {
    title: 'Project 6',
    image: project6Image,
    deployedLink: 'https://your-deployed-app.com',
    githubLink: 'https://github.com/philsloan/Club-Sandwich-Sandwich-Club'
  },
];

const Portfolio = () => {

  const topProjects = projects.slice(0, 3);
  const bottomProjects = projects.slice(3);

  return (
    <PortfolioContainer id="portfolio">
      <PortfolioHeading>Portfolio</PortfolioHeading>
      <ProjectsContainer>
        <Row>
          {topProjects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectLinks>
                <Link href={project.deployedLink} target="_blank" rel="noopener noreferrer">Deployed App</Link>
                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</Link>
              </ProjectLinks>
            </ProjectCard>
          ))}
        </Row>
        <Row>
          {bottomProjects.map((project, index) => (
            <ProjectCard key={index + 3}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectLinks>
                <Link href={project.deployedLink} target="_blank" rel="noopener noreferrer">Deployed App</Link>
                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</Link>
              </ProjectLinks>
            </ProjectCard>
          ))}
        </Row>
      </ProjectsContainer>
    </PortfolioContainer>
  );
}

export default Portfolio;
