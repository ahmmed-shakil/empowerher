import React from "react";
import DesktopHeader from "../../../components/shared/DesktopHeader";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import ProjectReview from "./components/ProjectReview/ProjectReview";
import SectionFour from "./components/SectionFour/SectionFour";
import SectionFive from "./components/SectionFive/SectionFive";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import Missions from "./components/Missions/Missions";
import JoinNow from "./components/JoinNow/JoinNow";
import Contact from "./components/Contact/Contact";
import DesktopFooter from "../../../components/DesktopFooter";
import Ourcourses from "./components/OurCourses/Ourcourses";

const ClientHome = () => {
  return (
    <div>
      <DesktopHeader />
      <Hero />
      <Features />
      <Ourcourses />
      <ProjectReview />
      <SectionFour />
      <SectionFive />
      <WhyChoose />
      <Missions />
      <JoinNow />
      <Contact />
      <DesktopFooter />
    </div>
  );
};

export default ClientHome;
