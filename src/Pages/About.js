import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import HeroImg2 from "../Component/HeroImg2";
import AboutContent from "../Component/AboutContent";
const info = "I'm a Full Stack Web Developer.";
const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT" text={info} />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
