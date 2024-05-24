import React from "react";
import { Layout } from "../../../../../components/shared/Layout/Layout";
import image from "../../../../../images/hero.jpg";
import { NavLink } from "react-router-dom";
import { gradientStyle } from "../../../../../utils/gradientStyle";

const Hero = () => {
  return (
    <div className=" py-10">
      <Layout>
        <div className="py-3 grid grid-cols-1 md:grid-cols-2 justify-between items-center">
          <div className="space-y-4">
            {/* <h2 className=" text-4xl font-semibold">Welcome to</h2> */}
            <h2 className=" text-2xl md:text-5xl font-semibold">
              Welcome to <span style={gradientStyle}>EmpowerHer</span>
            </h2>
            <h2 className=" text-xl md:text-3xl pt-5 font-normal">
              Your Trusted Online Tutor
            </h2>
            <p className="pr-0 md:pr-28 py-5">
              We provide{" "}
              <span style={gradientStyle}>Intelligently Designed Courses</span>.
              This comprehensive initiative involves the curation and
              development of free courses focused on job readiness and skill
              empowerment, alongside the creation and maintenance of an
              accessible website and app for user engagement. It emphasizes
              networking and collaboration efforts to establish connections with
              potential partners, NGOs, and marginalized women. Human capital is
              prioritized, requiring a skilled team for content creation,
              community management, and partnership development.
            </p>
            <div className=" grid grid-cols-2 gap-5 items-center w-full md:w-9/12">
              <NavLink
                to={"/register"}
                className=" bg-primary text-slate-50 py-3 rounded-lg hover:bg-hover transition-all duration-300 ease-in-out text-center"
              >
                {/* <button > */}
                Register as student
                {/* </button> */}
              </NavLink>
              <NavLink
                to={"/dashboard"}
                className=" bg-primary text-slate-50 py-3 rounded-lg hover:bg-hover transition-all duration-300 ease-in-out text-center"
              >
                {/* <button className=" bg-primary text-slate-50 py-3 rounded-lg hover:bg-hover transition-all duration-300 ease-in-out"> */}
                Register as Admin
                {/* </button> */}
              </NavLink>
            </div>
            <div className=" grid grid-cols-2 gap-5 items-center w-full md:w-9/12">
              <NavLink
                to={"/login"}
                className=" bg-slate-300 dark:text-slate-800 py-3 rounded-lg hover:bg-slate-400 transition-all duration-300 ease-in-out text-center"
              >
                {/* <button > */}
                Login as student
                {/* </button> */}
              </NavLink>
              <NavLink
                to={"/dashboard"}
                className=" bg-slate-300 py-3 dark:text-slate-800 rounded-lg hover:bg-slate-400 transition-all duration-300 ease-in-out text-center"
              >
                {/* <button className=" bg-slate-300 text-primary py-3 rounded-lg hover:bg-slate-400 transition-all duration-300 ease-in-out"> */}
                Login as Admin
                {/* </button> */}
              </NavLink>
            </div>
          </div>
          <div className=" w-full md:w-5/6 mt-10 md:mt-0">
            <img className="w-full rounded-md" src={image} alt="hero" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Hero;
