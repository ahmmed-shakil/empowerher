import React from "react";
import { Layout } from "../../../../../components/shared/Layout/Layout";
import image from "../../../../../images/team-collab-45301fc1.png";
import { gradientStyle } from "../../../../../utils/gradientStyle";

const Missions = () => {
  return (
    <div className="pb-20 pt-10">
      <Layout>
        <div className="flex justify-center items-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold" style={gradientStyle}>
              Our Mission and Values
            </h2>
          </div>
        </div>
        <div className=" mt-20">
          <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <p>
              <span className=" text-2xl font-semibold">W</span>e recognize that
              you have a wide range of choices for online tutoring services. We
              work hard to provide a quality teaching experience that goes above
              and beyond what you anticipate because of this. You can
              effortlessly connect with your online tutor using our
              user-friendly online tutoring platform and access course materials
              at any time, anywhere. To answer any technological issues or
              worries you might have, we provide support around-the-clock.
            </p>
            <div className=" hidden md:block"></div>
            <div
              className=" w-full md:w-3/4 my-10 md:my-0"
              style={{ marginTop: "-100px" }}
            >
              <img src={image} alt="mission" className=" w-full" />
            </div>
            <p style={{ marginTop: "-100px" }}>
              <span
                className=" text-2xl font-semibold"
                style={{ marginTop: "-100px" }}
              >
                W
              </span>
              e are certain that our tutoring services will assist you in
              achieving your academic objectives and raising your grade point
              average. We provide a satisfaction guarantee as a result.we'll
              work with you to make things right if you're not satisfied with
              your tutoring experience. we value your opinions and are dedicated
              to enhancing our offerings constantly.
            </p>

            <p className=" pt-28 md:pt-0" style={{ marginTop: "-100px" }}>
              <span className=" text-2xl font-semibold">S</span>o, EmpowerHer is
              the only place to turn if you're looking for trustworthy online
              tutoring services. Our knowledgeable tutors are available to
              support your academic success and help you meet your academic
              objectives. Contact us!
            </p>

            <div className=" hidden md:block"></div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Missions;
