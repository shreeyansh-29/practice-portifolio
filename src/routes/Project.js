import React from "react";
import HeroImg2 from "../components/HeroImg2";
import PricingCard from "../components/pricingCard/PricingCard";
import Work from "../components/work/Work";

const Project = () => {
  return (
    <>
      <HeroImg2 heading="PROJECTS." paragraph="Some of my recent projects." />
      <Work />
      <PricingCard />
    </>
  );
};

export default Project;
