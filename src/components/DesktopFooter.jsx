import React from "react";
import { Layout } from "./shared/Layout/Layout";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import paymentImg from "../images/payments.f8a603e8.png";
import quora from "../images/Social/quora.png";
import pinterest from "../images/Social/pinterest.png";
import instagram from "../images/Social/facebook.png";
import linkedin from "../images/Social/linkedin.png";
import facebook from "../images/Social/facebook.png";
import { bg_image_style2 } from "../utils/backgroundImageStyle";

const DesktopFooter = () => {
  const gradientStyle = {
    background: "linear-gradient(135deg, #FF6B6B, #6B47FF)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };
  return (
    <div className="">
      {/* <hr className=" h-1 bg-primary w-full" /> */}
      <div className=" bg-primary text-slate-100 text-secondary dark:bg-slate-800 dark:text-slate-100">
        <Layout>
          <div className=" space-y-5 pt-5 md:pt-10">
            <div className=" grid grid-cols-1 lg:grid-cols-footer justify-between items-center md:items-start">
              <div className=" flex flex-col space-y-5">
                <h2
                  className="text-2xl font-semibold text-center md:text-left"
                  style={gradientStyle}
                >
                  EmpowerHer
                </h2>
                <p className=" pr-0 md:pr-8 text-center md:text-left">
                  Education is smart enough to change the human mind positively.
                  It is all about academic excellence and cultural diversity.
                </p>
              </div>
              <div className="space-y-3 mt-8 md:mt-0">
                <h3 className=" text-xl text-center md:text-left">
                  Contact us
                </h3>
                <div className=" flex items-center justify-center md:justify-start gap-2 ">
                  <MapPinIcon className=" h-5 w-5" />
                  <h4 className=" text-lg">India</h4>
                </div>
                <div className=" flex items-center justify-center md:justify-start gap-2">
                  <EnvelopeIcon className=" h-5 w-5" />
                  <h4 className=" text-lg">
                    Official:{" "}
                    <NavLink className=" hover:underline">
                      demo@gmail.com
                    </NavLink>
                  </h4>
                </div>
                <div className=" flex items-center justify-center md:justify-start gap-2">
                  <PhoneIcon className=" h-5 w-5" />
                  <h4 className=" text-lg">
                    Helpline:
                    <NavLink className=" hover:underline mx-1">
                      +912345678900
                    </NavLink>
                  </h4>
                </div>
              </div>
              <div className=" flex flex-col space-y-3 mt-8 md:mt-0">
                <h2 className="text-xl text-center md:text-left">
                  <span>Legals</span>
                </h2>
                <NavLink className=" hover:underline text-center md:text-left">
                  Refund policy
                </NavLink>
                <NavLink className=" hover:underline text-center md:text-left">
                  Terms and Conditions
                </NavLink>
                <NavLink className=" hover:underline text-center md:text-left">
                  Privacy Policy
                </NavLink>
                <NavLink className=" hover:underline text-center md:text-left">
                  About us
                </NavLink>
              </div>

              <div className=" flex flex-col justify-start space-y-2 mt-8 md:mt-0">
                <h2 className="text-xl text-center md:text-left">
                  <span>Social Media Link</span>
                </h2>
                <div>
                  {/* <div className="hover:underline transition-all duration-200 ease-in-out cursor-pointer rounded-full flex items-center gap-2">
                    <img src={quora} alt="quora" /> <p>Quora</p>
                  </div> */}
                  <div className=" hover:underline transition-all duration-200 ease-in-out  cursor-pointer rounded-full flex items-center gap-2 justify-center md:justify-start">
                    <img src={pinterest} alt="pinterest" />
                    <p>Pinterest</p>
                  </div>
                  <div className="hover:underline transition-all duration-200 ease-in-out  cursor-pointer rounded-full flex items-center gap-2 justify-center md:justify-start">
                    <img src={instagram} alt="instagram" />
                    <p>Instagram</p>
                  </div>
                  <div className="hover:underline  transition-all duration-200 ease-in-out  cursor-pointer rounded-full flex items-center gap-2 justify-center md:justify-start">
                    <img src={facebook} alt="facebook" />
                    <p>Facebook</p>
                  </div>
                  {/* <div className="hover:underline  transition-all duration-200 ease-in-out  cursor-pointer rounded-full flex items-center gap-2">
                    <img src={linkedin} alt="linkedin" />
                    <p>Linkedin</p>
                  </div> */}
                </div>
              </div>
            </div>

            {/* <hr className="hidden md:block h-1 bg-primary w-full" /> */}
          </div>
        </Layout>
        <div
          s
          className=" hidden md:grid grid-cols-3 items-center justify-between bg-slate-800 text-slate-200 px-8 mt-5"
        >
          <p>Lisence: Demo lisence</p>
          <p className=" text-center">copyright &copy; 2024. EmpowerHer</p>
          <p className=" text-right">v 1.0.0</p>
        </div>
        <div className=" grid md:hidden grid-cols-1 items-center justify-between bg-slate-800 text-slate-200 px-8 mt-5">
          <p className=" text-center text-sm">
            copyright &copy; 2024. EmpowerHer
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesktopFooter;
