import React from 'react'
import myImage from '../components/assets/'

export default function HomeSection() {
  return (
    <div>
      <div className="container">
        <h1 className="home__heading">
        <span>Welcome! I am</span>
        <span>Ashley Paluzzi</span>
        </h1>
        <div className="home__img"></div>
        <img src={myImage} alt="Ashley Paluzzi" />
      </div>
    </div>
  )
}
