import React from "react";
import { Layout } from "../../../../../components/shared/Layout/Layout";
import img1 from "../../../../../images/Features/1.png";
import img2 from "../../../../../images/Features/2.png";
import img3 from "../../../../../images/Features/3.png";
import img4 from "../../../../../images/Features/4.png";
import img5 from "../../../../../images/Features/5.png";
import img6 from "../../../../../images/Features/6.png";
import img7 from "../../../../../images/Features/7.png";
import img8 from "../../../../../images/Features/8.png";
import { gradientStyle } from "../../../../../utils/gradientStyle";

const Features = () => {
  const features = [
    {
      imgSrc: img1,
      title: "Online Whiteboard",
      description:
        "Make idea explanation simple in the classroom by using a free interactive whiteboard.",
    },
    {
      imgSrc: img2,
      title: "Video/Audio meetings",
      description:
        "Audio-video meetings can help you forge wonderful connections.",
    },
    {
      imgSrc: img3,
      title: "Chat with experts",
      description:
        "Instantly resolve your doubt by chatting with professionals.",
    },
    {
      imgSrc: img4,
      title: "Project review",
      description:
        "Review your project with industry experts. Use industry experts as a resource to help you review your project.",
    },
    {
      imgSrc: img5,
      title: "Online courses",
      description:
        "Online courses which will provide a better way of learning anything and from anywhere.",
    },
    {
      imgSrc: img6,
      title: "Expert teachers",
      description:
        "Get 24*7 online help from the respective teachers on your doubt.",
    },
    {
      imgSrc: img7,
      title: "Community",
      description:
        "Get the opportunity to enroll into India's best education community and get all your doubts and queries cleared.",
    },
    {
      imgSrc: img8,
      title: "24/7 Support",
      description:
        "Get 24*7 online help from the respective teachers on your doubt.",
    },
  ];

  const FeatureCard = ({ imgSrc, title, description }) => (
    <div className="bg-slate-100 text-secondary dark:bg-slate-800 dark:text-slate-300 shadow hover:bg-primary transition-all duration-150 ease-in-out hover:text-slate-200 p-4 rounded-md h-auto">
      <div className="bg-primary inline-block p-2 rounded-lg">
        <img src={imgSrc} alt="feature" />
      </div>
      <div className="mt-4">
        <h4 className="text-xl font-medium">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );

  return (
    <div className=" pt-14 md:pt-28 pb-14 md:pb-28">
      <Layout>
        <div className=" flex justify-center items-center">
          <div className=" text-center">
            <h2 className=" text-3xl font-semibold pb-8">
              Why <span style={gradientStyle}>EmpowerHer</span> education?
            </h2>
            <p className=" w-full px-0 md:px-96">
              If You are planning for a year, sow rice. If you are planning for
              a decade, plant trees. If you are planning for a lifetime, educate
              people.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              imgSrc={feature.imgSrc}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default Features;
