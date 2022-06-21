import React from "react";
import "./HeroImg.css";
import { Link } from "react-router-dom";

const IntroImg =
  "https://ik.imagekit.io/wq9821dmd/introImg_5ILemJ4A8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655796348034";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into_img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M AVRODIP</p>
        <h1>WEB DEVELOPER</h1>

        <Link to="/project" className="btn">
          Projects
        </Link>
        <Link to="/contact" className="btn btn_light">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default HeroImg;
