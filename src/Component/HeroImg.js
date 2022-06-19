import React from "react";
import "./HeroImgStyle.css";
import { Link } from "react-router-dom";
import IntroImg from "../assets/introImg.jpg";

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
