import "./AboutContent.css";
// import Contect2 from "../assets/aboutcontent.jpg";
// import Contect1 from "../assets/pro1.jpg";
import React from "react";
import { Link } from "react-router-dom";
const Contect1 =
  "https://ik.imagekit.io/wq9821dmd/About2_pt2aP2_3M.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655921652973";
const Contect2 =
  "https://ik.imagekit.io/wq9821dmd/About4_FTi0Y5btP.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655921880339";
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>
          I'm a Full Stack Web Developer.
          <p>
            I have expertise in JavaScript , Core Java, React Js , Node Js ,
            HTML , CSS ,BootStrap , Meterial UI , git & github.
          </p>
        </p>
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
