import React from "react";
import { Layout } from "../../../components/shared/Layout/Layout";
import image from "../../../images/about.svg";
import DesktopHeader from "../../../components/shared/DesktopHeader";
import DesktopFooter from "../../../components/DesktopFooter";

const About = () => {
  const gradientStyle = {
    background: "linear-gradient(135deg, #FF6B6B, #6B47FF)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };
  return (
    <>
      <DesktopHeader />
      <div className="pb-10 pt-20">
        <Layout>
          <div className=" space-y-8 w-full md:w-2/3">
            <h3 className=" text-6xl font-semibold">About us</h3>
            <p className=" text-2xl" style={gradientStyle}>
              Welcome to EmpowerHer, an online tutoring company dedicated to
              helping students achieve academic success.
            </p>
            <p className=" text-primary text-lg font-light">
              We offer a platform where students can upload their assignments
              and our highly qualified tutors will complete the assignments on
              their behalf. Our tutors are experts in their respective fields
              and are committed to delivering high-quality work within the given
              timeframe.
            </p>
            <p className=" text-primary text-lg font-light">
              At EmpowerHer, we understand the challenges that students face
              when it comes to completing assignments and achieving academic
              success. We aim to provide a solution that not only helps students
              complete their assignments but also helps them understand the
              subject matter. Our tutors take the time to explain concepts and
              provide guidance to ensure that students have a clear
              understanding of the work completed.
            </p>
          </div>
          <div className=" py-20 mt-16">
            <div className=" grid grid-cols-1 md:grid-cols-2 items-center">
              <div className=" w-3/4">
                <img src={image} alt="about-us" className=" w-full" />
              </div>
              <div className=" space-y-5">
                <p className=" text-primary text-lg font-light">
                  We strive to provide our students with an exceptional
                  experience, and we continuously work to improve our services.
                  Our team is dedicated to ensuring that our students receive
                  the highest level of support and assistance.
                </p>
                <p className=" text-primary text-lg font-light">
                  We strive to provide our students with an exceptional
                  experience, and we continuously work to improve our services.
                  Our team is dedicated to ensuring that our students receive
                  the highest level of support and assistance.
                </p>
              </div>
            </div>
          </div>
        </Layout>
      </div>
      <DesktopFooter />
    </>
  );
};

export default About;
