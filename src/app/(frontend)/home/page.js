import React from "react";
import HeroSection from "./components/HeroSection";
import WhyBooking from "./components/WhyBooking";
import LaunchCard from "./components/LaunchCard";

const page = () => {
  return (
    <>
      <HeroSection />
      <WhyBooking />
      <LaunchCard/>
    </>
  );
};

export default page;