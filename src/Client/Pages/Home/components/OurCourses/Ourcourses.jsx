import React from "react";
import Courseimg from "../../../../../images/hero-bg.webp";
import { useNavigate } from "react-router-dom";
import Line from "../../../../../components/shared/Line";
import Badge from "../../../../../components/shared/Badge/Badge";
import ButtonPrimary from "../../../../../components/Buttons/ButtonPrimary";
import { Layout } from "../../../../../components/shared/Layout/Layout";
import { gradientStyle } from "../../../../../utils/gradientStyle";
import { ClockIcon, ListBulletIcon } from "@heroicons/react/24/solid";
const Ourcourses = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-14 pb-14 md:pb-28">
      <Layout>
        <h5 className=" text-3xl font-semibold text-center mb-8">
          Explore <span style={gradientStyle}> Our Courses</span>
        </h5>
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-5">
          <div
            className="rounded-md shadow-md hover:shadow-2xl cursor-pointer"
            // onClick={() => navigate(`/course-details/1`)}
          >
            <div className=" h-56 w-full rounded-md">
              <img
                src={Courseimg}
                alt="img"
                className=" rounded-tl-md rounded-tr-md h-full w-full  transition-all delay-200 duration-200 ease-in-out"
              />
            </div>
            <div className=" space-y-4 px-4 py-3">
              <div className=" flex justify-between items-center">
                <h2 className="text-xl font-semibold">
                  Fundamentals of Google Cloud Platform
                </h2>
              </div>
              <Line />
              <Badge
                bg={"bg-primary"}
                text={"text-gray-200"}
                content={"Beginner"}
                props={"inline-block"}
              />
              <div className=" flex justify-between items-center">
                <p>
                  {" "}
                  <ClockIcon height={20} width={20} className=" inline" />{" "}
                  Weeks: 5
                </p>
                <p>
                  {" "}
                  <ListBulletIcon
                    height={20}
                    width={20}
                    className=" inline"
                  />{" "}
                  Lessons: 15
                </p>
              </div>
              <p className=" text-justify">
                Unlock the World of Coding with Ease: Learn to code, Manage
                Tasks, and Master Challenges!
              </p>
              <div className=" flex justify-between items-center">
                <h6 className=" text-primary font-semibold">Price: Free</h6>
                <button
                  className=" border-solid border-2 border-primary hover:bg-primary hover:text-gray-200 transition-colors duration-150 delay-100 ease-in-out rounded-md px-3 py-2"
                  onClick={() => navigate(`/course-details/1`)}
                >
                  Start Course
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-20 flex justify-center">
          <ButtonPrimary
            onClick={() => navigate("/our-courses")}
            text={"View All Courses"}
          />
        </div>
      </Layout>
    </div>
  );
};

export default Ourcourses;
