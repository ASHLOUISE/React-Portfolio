import React from "react";
import myImage from "../components/Ash.jpg";



export default function Home() {
  return (

      <div className="container">
        <h1 className="home__heading">
          <span>Welcome! I am</span>
          <span>Ashley Paluzzi</span>
        </h1>
        <img className="home__img" src={myImage} alt="Ashley Paluzzi" />
      </div>
  
  );
}
