import React from "react";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/about/AboutContent";

const About = () => {
  return (
    <>
      <HeroImg2
        heading="ABOUT."
        paragraph="Im a friendly Front-End Developer."
      />
      <AboutContent />
    </>
  );
};

export default About;
