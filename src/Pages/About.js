import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import HeroImg2 from "../Component/HeroImg2";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT" text="I'm a full Stack Developer" />
      <Footer />
    </div>
  );
};

export default About;
