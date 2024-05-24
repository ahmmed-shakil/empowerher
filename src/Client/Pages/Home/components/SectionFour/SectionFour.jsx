import React from "react";
import { Layout } from "../../../../../components/shared/Layout/Layout";
import image from "../../../../../images/personalized-tutoring-f2c7f4f4.png";

const SectionFour = () => {
  const gradientStyle = {
    background: "linear-gradient(135deg, #FF6B6B, #6B47FF)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };
  return (
    <div>
      <Layout>
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 justify-between items-center">
          <div className="space-y-3">
            <h2 className=" text-3xl font-semibold" style={gradientStyle}>
              Interactive Learning
            </h2>
            <p className="pr-0 md:pr-28 pt-5">
              Our online free courses are customized to meet your specific
              requirements. In a variety of topics, including math, science,
              English, social studies, and more, we provide individualized
              lesson plans. Our online tutors are here to assist you whether you
              require homework help, assignment help, or simply further
              instruction in a particular subject. You will receive the
              assistance you require when you require it thanks to our
              one-on-one tutoring sessions.
            </p>
            <p className="pr-0 md:pr-28 py-5">
              Our online tutors have years of expertise in their disciplines and
              are well-versed in the requirements and curricula of academic
              institutions. They will clear up any questions you have, aid in
              your knowledge, and provide you the direction you need to succeed
              in your studies.
            </p>
            <p className="pr-0 md:pr-28">
              We are aware that every student is different, with distinct
              learning preferences, objectives, and difficulties. We tailor our
              tutoring services to your unique needs because of this. Together,
              you and one of our instructors will determine your strengths and
              weaknesses and create a plan that fits your learning style and
              speed. Sessions can be scheduled at your convenience, and you can
              continue working with the same tutor throughout your academic
              career.
            </p>
          </div>
          <div className="w-full">
            <img
              className="w-full scale-95"
              src={image}
              alt="Interactive-Learning"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default SectionFour;
