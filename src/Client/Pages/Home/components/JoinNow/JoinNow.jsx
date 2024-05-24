import React from "react";
import { Layout } from "../../../../../components/shared/Layout/Layout";
import { gradientStyle } from "../../../../../utils/gradientStyle";

const JoinNow = () => {
  return (
    <div className=" py-20">
      <Layout>
        <div className=" bg-slate-300 text-secondary dark:bg-slate-900 rounded-md dark:text-slate-200 py-6 px-4 space-y-4">
          <h3 className=" text-3xl" style={gradientStyle}>
            Join us now
          </h3>
          <div className=" grid grid-cols-1 md:grid-cols-add gap-5">
            <p>
              Be a learner ,Be a reader, Be a writer, Be an exceptional . Join
              our family, through mock quiz, tutorials and professional chat get
              educated anytime, anywhere and save those little bucks in your
              pockets.
            </p>
            <div>
              <button className=" btn-primary px-4">Join us</button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default JoinNow;
