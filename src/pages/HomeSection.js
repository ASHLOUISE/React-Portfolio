import React from 'react';
import styled from 'styled-components';
import myImage from 'public/Ash.jpg';

const HomeSectionContainer = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 0;
  }
  .home__heading {
    font-size: 3rem;
    span {
      color: #B08968;
    }
  }
  .home__img {
    width: 500px;
    height: 500px;
    border-radius: 50%;
  }
`;

export default function HomeSection() {
  return (
    <HomeSectionContainer>
      <div className="container">
        <h1 className="home__heading">
          <span>Welcome! I am</span>
          <span>Ashley Paluzzi</span>
        </h1>
        <img className="home__img" src={myImage} alt="Ashley Paluzzi" />
      </div>
    </HomeSectionContainer>
  );
}
