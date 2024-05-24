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

const DesktopFooter = () => {
  const gradientStyle = {
    background: "linear-gradient(135deg, #FF6B6B, #6B47FF)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };
  return (
    <div className="">
      {/* <hr className=" h-1 bg-primary w-full" /> */}
      <div className=" bg-slate-100 text-secondary dark:bg-slate-800 dark:text-slate-100">
        <Layout>
          <div className=" space-y-5 pt-24">
            <div className=" grid grid-cols-1 lg:grid-cols-footer justify-between items-start">
              <div className=" flex flex-col space-y-5">
                <h2 className="text-2xl font-semibold" style={gradientStyle}>
                  MyEmpowerHers
                </h2>
                <p className=" pr-0 md:pr-8">
                  Education is smart enough to change the human mind positively.
                  It is all about academic excellence and cultural diversity.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className=" text-xl text-left">Contact us</h3>
                <div className=" flex items-center gap-2 ">
                  <MapPinIcon className=" h-5 w-5" />
                  <h4 className=" text-lg">India</h4>
                </div>
                <div className=" flex items-center gap-2">
                  <EnvelopeIcon className=" h-5 w-5" />
                  <h4 className=" text-lg">
                    Official:{" "}
                    <NavLink className=" hover:underline">
                      demo@gmail.com
                    </NavLink>
                  </h4>
                </div>
                <div className=" flex items-center gap-2">
                  <PhoneIcon className=" h-5 w-5" />
                  <h4 className=" text-lg">
                    Helpline:
                    <NavLink className=" hover:underline mx-1">
                      +912345678900
                    </NavLink>
                  </h4>
                </div>
              </div>
              <div className=" flex flex-col space-y-3">
                <h2 className="text-xl text-left">
                  <span>Legals</span>
                </h2>
                <NavLink className=" hover:underline">Refund policy</NavLink>
                <NavLink className=" hover:underline text-left">
                  Terms and Conditions
                </NavLink>
                <NavLink className=" hover:underline text-left">
                  Privacy Policy
                </NavLink>
                <NavLink className=" hover:underline text-left">
                  About us
                </NavLink>
              </div>

              <div className=" flex flex-col justify-start space-y-2">
                <h2 className="text-xl text-left">
                  <span>Social Media Link</span>
                </h2>
                <div>
                  {/* <div className="hover:underline transition-all duration-200 ease-in-out cursor-pointer rounded-full flex items-center gap-2">
                    <img src={quora} alt="quora" /> <p>Quora</p>
                  </div> */}
                  <div className=" hover:underline transition-all duration-200 ease-in-out  cursor-pointer rounded-full flex items-center gap-2">
                    <img src={pinterest} alt="pinterest" />
                    <p>Pinterest</p>
                  </div>
                  <div className="hover:underline transition-all duration-200 ease-in-out  cursor-pointer rounded-full flex items-center gap-2">
                    <img src={instagram} alt="instagram" />
                    <p>Instagram</p>
                  </div>
                  <div className="hover:underline  transition-all duration-200 ease-in-out  cursor-pointer rounded-full flex items-center gap-2">
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
        <div className=" hidden md:grid grid-cols-3 items-center justify-between gradient-background text-slate-200 px-8 mt-5">
          <p>Lisence: Demo lisence</p>
          <p className=" text-center">copyright &copy; 2023. MyEmpowerHers</p>
          <p className=" text-right">v 1.0.0</p>
        </div>
      </div>
    </div>
  );
};

export default DesktopFooter;
