import "./AboutContent.css";
import Contect2 from "../assets/aboutcontent.jpg";
import Contect1 from "../assets/pro1.jpg";
import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>Im a react font end developer i create responsive secure website.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={Contect1} className="img" alt="react" />
          </div>
          <div className="img-stack bottom">
            <img src={Contect2} className="img" alt="react" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
