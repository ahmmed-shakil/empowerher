import React from "react";
import bgImg from "../../../../../images/project-review.png";
import { Layout } from "../../../../../components/shared/Layout/Layout";

const ProjectReview = () => {
  return (
    <div className=" py-8">
      <div className="py-8 gradient-background">
        <Layout>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center justify-between">
            <div>
              <img src={bgImg} alt="review" />
            </div>
            <div className=" text-slate-200">
              <div className=" space-y-7">
                <h3 className=" text-3xl font-semibold">Value Propositions</h3>
                <p>
                  Empowerment through skill development offering free courses
                  tailored to job readiness, empowering marginalized women with
                  essential skills
                </p>
                <p>
                  Job opportunity connections providing a platform connecting
                  these women with employment opportunities, fostering inclusion
                  and support
                </p>
                <div className=" flex items-center gap-6">
                  <button className=" bg-primary px-3 text-slate-200 py-3 rounded-lg hover:bg-hover transition-all duration-300 ease-in-out">
                    Get quote
                  </button>
                  <button className=" bg-slate-100 px-3 text-primary py-3 rounded-lg hover:bg-slate-300 transition-all duration-300 ease-in-out">
                    Signup now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default ProjectReview;
