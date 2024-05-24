import React from "react";
import { Layout } from "../../../../components/shared/Layout/Layout";
import image1 from "../../../../images/personalized-tutoring-f2c7f4f4.png";
import image2 from "../../../../images/Tutoring/1.svg";
import image3 from "../../../../images/Tutoring/2.svg";
import DesktopHeader from "../../../../components/shared/DesktopHeader";
import DesktopFooter from "../../../../components/DesktopFooter";

const Tutoring = () => {
  const gradientStyle = {
    background: "linear-gradient(135deg, #FF6B6B, #6B47FF)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };
  return (
    <>
      <DesktopHeader />
      <div className=" pt-20 pb-0">
        <Layout>
          <h3 className=" text-5xl font-semibold text-center mb-10">
            Free Online Courses
          </h3>
          <div className=" pt-10 space-y-6">
            <h4 className=" text-4xl font-medium" style={gradientStyle}>
              Expert Online Tutoring Services
            </h4>
            <p>
              Looking for expert online tutoring services to help you excel
              academically? Look no further than our one-on-one tutoring
              services! Our expert tutors provide personalized tutoring to
              students of all ages and academic levels, helping them achieve
              their academic goals and boost their grades.
            </p>
          </div>
          <div className=" py-10">
            <div className=" grid grid-cols-1 md:grid-cols-admin3 items-center">
              <div>
                <img src={image1} alt="Tutoring" />
              </div>
              <div>
                <h4 className=" text-2xl font-medium">
                  Personalized One-on-One Tutoring
                </h4>
                <p>
                  At our tutoring service, we believe in the power of one-on-one
                  tutoring. Unlike group tutoring sessions, one-on-one tutoring
                  allows our expert tutors to focus exclusively on your needs,
                  helping you learn more effectively and efficiently. Our tutors
                  work with you to identify your strengths and weaknesses,
                  develop a personalized learning plan, and provide ongoing
                  support and guidance to help you achieve academic success.
                </p>
              </div>
            </div>
          </div>
          <div className=" py-10">
            <h4 className=" text-2xl font-medium">
              Expert Tutors in Any Subject
            </h4>
            <p>
              At our tutoring service, we offer one-on-one tutoring in any
              subject you need help with. From math tutoring and organic
              chemistry tutoring to java tutors and English tutor online, we
              have expert tutors who can help you master any subject. Whether
              you need help with homework, test prep, or just want to improve
              your overall understanding of a subject, our tutors are here to
              help.
            </p>
          </div>
          <div className=" py-10">
            <h4 className=" text-4xl font-medium" style={gradientStyle}>
              Online Tutoring for School and College Students
            </h4>
            <div className=" pt-5">
              <div className=" grid grid-cols-1 md:grid-cols-2 justify-between  items-center mt-6 ml-0 md:ml-20">
                <div className="  grid grid-cols-list items-start gap-3 pr-0 md:pr-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mt-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  <p className=" text-lg">
                    One-on-one online tutoring sessions
                  </p>
                </div>
                <div className="  grid grid-cols-list items-start gap-3 pr-0 md:pr-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mt-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  <p className=" text-lg">
                    Personalized attention and tailored instruction
                  </p>
                </div>
                <div className="  grid grid-cols-list items-start gap-3 pr-0 md:pr-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mt-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  <p className=" text-lg">
                    Tutoring in a wide range of subjects, including math,
                    science, English, and more
                  </p>
                </div>
                <div className="  grid grid-cols-list items-start gap-3 pr-0 md:pr-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mt-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  <p className=" text-lg">
                    Tutoring available for students of all ages and academic
                    levels
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" py-10">
            <h4 className=" text-4xl font-medium" style={gradientStyle}>
              Test Preparation Services
            </h4>
            <div className=" pt-5">
              <div className=" grid grid-cols-1 md:grid-cols-2 justify-between  items-center mt-6 ml-0 md:ml-20">
                <div className="  grid grid-cols-list items-start gap-3 pr-0 md:pr-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mt-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  <p className=" text-lg">
                    Test preparation services for a variety of standardized
                    tests, including the SAT, ACT, GRE, GMAT, and more
                  </p>
                </div>
                <div className="  grid grid-cols-list items-start gap-3 pr-0 md:pr-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mt-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  <p className=" text-lg">
                    Experienced tutors who will work with you to identify areas
                    of weakness and develop a study plan
                  </p>
                </div>
                <div className="  grid grid-cols-list items-start gap-3 pr-0 md:pr-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mt-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  <p className=" text-lg">
                    Targeted instruction to help you improve your scores
                  </p>
                </div>
                <div className="  grid grid-cols-list items-start gap-3 pr-0 md:pr-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mt-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  <p className=" text-lg">
                    Approach your exam with confidence and achieve your best
                    possible results
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" py-14 grid grid-cols-1 md:grid-cols-2 justify-between items-center">
            <div className=" ">
              <img src={image2} alt="Tutoring-2" className=" w-3/4" />
            </div>
            <div>
              <h3 className=" text-3xl font-medium" style={gradientStyle}>
                Flexible Scheduling
              </h3>
              <p>
                We understand that students have busy schedules, which is why we
                offer flexible scheduling options to fit your needs. Our tutors
                are available to meet with you online at a time that works best
                for you. We also offer weekend and evening sessions to
                accommodate students who have other commitments during the day.
              </p>
            </div>
          </div>
          <div className=" py-14 grid grid-cols-1 md:grid-cols-2 justify-between items-center">
            <div>
              <h3 className=" text-3xl font-medium" style={gradientStyle}>
                Affordable Pricing
              </h3>
              <p>
                We believe that everyone should have access to high-quality
                tutoring services without breaking the bank. That's why we offer
                affordable pricing options to fit your budget. We also offer
                discounts for bulk purchases of tutoring sessions, so you can
                save even more on your tutoring services.
              </p>
            </div>
            <div className=" flex justify-end">
              <img src={image3} alt="Tutoring-2" className=" w-3/4" />
            </div>
          </div>
          <div className=" py-10">
            <h4 className=" text-4xl font-medium" style={gradientStyle}>
              Benefits of One-on-One Tutoring
            </h4>
            <div className=" pt-5">
              <div className=" grid grid-cols-1 md:grid-cols-2 justify-between  items-center mt-6 ml-0 md:ml-20">
                <div className="  grid grid-cols-list items-start gap-3 pr-0 md:pr-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mt-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  <p className=" text-lg">
                    <span className=" font-medium">
                      Personalized attention:
                    </span>{" "}
                    One-on-one tutoring allows our tutors to focus exclusively
                    on your needs, providing personalized attention and support.
                  </p>
                </div>
                <div className="  grid grid-cols-list items-start gap-3 pr-0 md:pr-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mt-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  <p className=" text-lg">
                    <span className=" font-medium">Flexible scheduling:</span>{" "}
                    Our tutors work around your schedule, making it easy to fit
                    tutoring sessions into your busy life.
                  </p>
                </div>
                <div className="  grid grid-cols-list items-start gap-3 pr-0 md:pr-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mt-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  <p className=" text-lg">
                    <span className=" font-medium">
                      Improved academic performance:
                    </span>{" "}
                    With personalized tutoring and support, our students see
                    significant improvements in their grades and academic
                    performance.
                  </p>
                </div>
                <div className=" grid grid-cols-list items-start gap-3 pr-0 md:pr-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mt-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  <p className=" text-lg">
                    <span className=" font-medium">
                      Confidence and motivation:
                    </span>{" "}
                    Our tutors not only help students improve their academic
                    performance, but also boost their confidence and motivation
                    to succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" py-10 space-y-5">
            <h4 className=" text-4xl font-medium" style={gradientStyle}>
              Get Started with Our Online Tutoring Services
            </h4>
            <p>
              Ready to boost your academic performance with our expert online
              tutoring services? Getting started is easy!
            </p>
            <div className=" space-y-5 pl-0 md:pl-10 pb-8">
              <p>1. Visit our website and sign up for an account.</p>
              <p>
                2. Choose the subject you need help with and select a tutor who
                fits your needs.
              </p>
              <p>
                Schedule your tutoring session at a time that works for you.
              </p>
              <p>
                Get personalized one-on-one tutoring and support from an expert
                tutor. Get started Now
              </p>
            </div>
            <button className=" btn-primary px-5">Get started Now</button>
          </div>
        </Layout>
      </div>
      <DesktopFooter />
    </>
  );
};

export default Tutoring;
