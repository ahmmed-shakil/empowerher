import React from "react";
import { Layout } from "../../../../../components/shared/Layout/Layout";
import image from "../../../../../images/online-tutors-c3a88a81.png";

const SectionFive = () => {
  const gradientStyle = {
    background: "linear-gradient(135deg, #FF6B6B, #6B47FF)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };
  return (
    <div>
      <Layout>
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 justify-between items-center">
          <div className="w-full">
            <img className="w-full scale-95" src={image} alt="SectionFive" />
          </div>
          <div className="space-y-3">
            <h2 className=" text-3xl font-semibold" style={gradientStyle}>
              Expert Guidance
            </h2>
            <p className="pr-0 md:pr-28 py-5">
              We at EmpowerHer think that all students should have access to
              high-quality education. We charge reasonable fees for our online
              tutoring services because of this, we have affordable prices and
              flexible payment plans to meet any budget. For added savings, we
              occasionally offer discounts and other special deals.
            </p>
            <p className="pr-0 md:pr-28">
              We are proud of our team of knowledgeable online tutors that are
              enthusiastic about instructing and guiding students to success.
              They are chosen via a thorough screening process, and they have
              teaching experience as well as subject-specific knowledge. Using
              the most recent techniques and technology, our instructors are
              qualified and trained to conduct successful online tutoring
              sessions. They will give you honest feedback and dependable
              information as well as help.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default SectionFive;
