import React from "react";
import { Layout } from "../../../../components/shared/Layout/Layout";
import image1 from "../../../../images/Assignment/1.svg";

const Assignment = () => {
  const gradientStyle = {
    background: "linear-gradient(135deg, #FF6B6B, #6B47FF)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };
  return (
    <div className=" pt-8">
      <Layout>
        <div className=" pt-10 space-y-6">
          <h3 className=" text-5xl font-semibold text-center mb-10">
            Get Top-Quality Assignment Help from EmpowerHers
          </h3>
          <p>
            As a student, it can be overwhelming to manage all your academic
            assignments while trying to balance your personal life, work, and
            other activities. At EmpowerHers, we understand how challenging this
            can be, which is why we offer top-quality assignment help services
            to students worldwide.
          </p>
        </div>
        <div className=" py-10">
          <div className=" grid grid-cols-1 md:grid-cols-admin3 items-center">
            <div>
              <img src={image1} alt="Tutoring" />
            </div>
            <div>
              <h4 className=" text-4xl font-medium" style={gradientStyle}>
                Why Choose EmpowerHers for Your Assignment Help?
              </h4>
              <p>
                There are several reasons why you should choose EmpowerHers for
                your assignment help needs. First, we have a team of experienced
                and qualified writers who are dedicated to ensuring you get the
                best grades in your assignments. Our writers hold advanced
                degrees in various fields, and they have years of experience
                helping students with their assignments.
              </p>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2">
            <div className=" py-14">
              <p>
                Second, we offer a wide range of assignment help services,
                including essay writing, research paper writing, term paper
                writing, dissertation writing, case study analysis, and more.
                Whatever your assignment needs are, we have got you covered.
              </p>
            </div>
            <div className=" hidden md:block"></div>
            <div className=" hidden md:block"></div>
            <div>
              <p>
                Third, we guarantee top-quality and original work. Our writers
                write all assignments from scratch and ensure that they are
                unique and plagiarism-free. We also use advanced plagiarism
                detection software to ensure that all our assignments are 100%
                original.
              </p>
            </div>
            <div className=" py-14">
              <p>
                Fourth, we offer affordable prices for all our assignment help
                services. We understand that most students operate on a tight
                budget, and we don't want to strain your finances. That's why we
                offer competitive prices for all our services without
                compromising on quality.
              </p>
            </div>
            <div className=" hidden md:block"></div>
          </div>
        </div>
        <div className=" py-14">
          <div>
            <h4 className=" text-4xl font-medium" style={gradientStyle}>
              How to Get Started with EmpowerHers Assignment Help?
            </h4>
            <p>
              Getting started with EmpowerHers assignment help is easy and
              straightforward. Here are the simple steps you need to follow:
            </p>
          </div>
          <div className=" py-10">
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className=" flex gap-0 items-baseline mb-4">
                  <h3
                    className=" text-5xl opacity-50 font-semibold"
                    style={gradientStyle}
                  >
                    1
                  </h3>
                  <h4 className=" text-3xl">Place Your Order</h4>
                </div>
                <p>
                  Visit our website and fill out the order form. Provide us with
                  all the necessary details about your assignment, including the
                  topic, academic level, deadline, and any other specific
                  instructions. Our writers will use this information to craft a
                  top-quality and custom assignment that meets all your
                  requirements.
                </p>
              </div>
              <div>
                <div className=" flex gap-0 items-baseline mb-4">
                  <h3
                    className=" text-5xl opacity-50 font-semibold"
                    style={gradientStyle}
                  >
                    2
                  </h3>
                  <h4 className=" text-3xl">Make Payment</h4>
                </div>
                <p>
                  Once you have placed your order, you will receive a price
                  quote for the assignment. Make payment using any of our secure
                  payment methods, and we will assign the task to one of our
                  expert writers immediately.
                </p>
              </div>
              <div>
                <div className=" flex gap-0 items-baseline mb-4">
                  <h3
                    className=" text-5xl opacity-50 font-semibold"
                    style={gradientStyle}
                  >
                    3
                  </h3>
                  <h4 className=" text-3xl">Wait for Delivery</h4>
                </div>
                <p>
                  After making payment, sit back and relax as our writers work
                  on your assignment. We guarantee to deliver your assignment
                  before the deadline to give you enough time to review it and
                  request any revisions if necessary.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" py-14">
          <h4 className=" text-4xl font-medium" style={gradientStyle}>
            How Our Assignments Are Better?
          </h4>
          <p>
            At EmpowerHers, we pride ourselves on offering top-quality
            assignments that are better than those of our competitors. Here's
            how our assignments are better:
          </p>
          <div className=" mt-4">
            <div className=" grid grid-cols-1 md:grid-cols-2">
              <div>
                {" "}
                <p className=" py-8">
                  <span className=" text-xl text-primary font-semibold mr-2">
                    Originality:
                  </span>
                  We write all assignments from scratch and ensure that they are
                  unique and plagiarism-free. We also use advanced plagiarism
                  detection software to guarantee the originality of our work.
                </p>
                <p className=" py-8">
                  <span className=" text-xl text-primary font-semibold mr-2">
                    Quality:
                  </span>
                  We have a team of experienced and qualified writers who are
                  dedicated to ensuring that you get top-quality assignments. We
                  conduct thorough research and follow all your instructions to
                  ensure that we deliver assignments that meet your
                  expectations.
                </p>
                <p className=" py-8">
                  <span className=" text-xl text-primary font-semibold mr-2">
                    Timeliness:
                  </span>
                  We understand the importance of meeting deadlines, and we
                  guarantee to deliver your assignment before the deadline. This
                  gives you enough time to review the assignment and request any
                  revisions if necessary.
                </p>
                <p className=" py-8">
                  <span className=" text-xl text-primary font-semibold mr-2">
                    Affordability:
                  </span>
                  We offer competitive prices for all our assignment help
                  services without compromising on quality. We understand that
                  most students operate on a tight budget, and we don't want to
                  strain your finances.
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className=" py-14">
          <h4 className=" text-4xl font-medium" style={gradientStyle}>
            Conclusion
          </h4>
          <p>
            If you're struggling with your assignments, don't stress.
            EmpowerHers are here to help you. We offer top-quality and
            affordable assignment help services to students worldwide. Our team
            of experienced and qualified writers is dedicated to ensuring that
            you get the best grades in your assignments. Place your order today
            and experience the difference.
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default Assignment;
