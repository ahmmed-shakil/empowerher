import React from "react";
import { Layout } from "../../../../../components/shared/Layout/Layout";
import quora from "../../../../../images/Social/quora.png";
import pinterest from "../../../../../images/Social/pinterest.png";
import instagram from "../../../../../images/Social/instagram.png";
import facebook from "../../../../../images/Social/facebook.png";
import linkedin from "../../../../../images/Social/linkedin.png";
import { gradientStyle } from "../../../../../utils/gradientStyle";

const Contact = () => {
  return (
    <div>
      <div className=" bg-slate-200 text-secondary dark:bg-slate-800 dark:text-slate-200 py-14">
        <Layout>
          <div className=" bg-slate-100 dark:bg-slate-800 p-5 rounded-md">
            <div className=" grid grid-cols-1 md:grid-cols-header rounded-md">
              <div className=" bg-primary p-4 rounded-md space-y-4 text-slate-100 relative">
                <h3 className="  text-2xl font-medium">Contact Information</h3>
                <p>
                  Fill up the form and our Team will get back to you within 24
                  hours.
                </p>
                <div className=" space-y-2">
                  <div className=" flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <p>demo@mail.com</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                      />
                    </svg>

                    <p>+911234567890</p>
                  </div>

                  <div className=" flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>

                    <p>India</p>
                  </div>
                  <p className=" py-5">
                    We provide{" "}
                    <span className=" font-semibold">
                      Intelligently Designed Courses
                    </span>
                    . This comprehensive initiative involves the curation and
                    development of free courses focused on job readiness and
                    skill empowerment, alongside the creation and maintenance of
                    an accessible website and app for user engagement.
                  </p>
                  {/* <div className=" flex items-center gap-4 absolute bottom-4 left-4">
                    <div className=" bg-slate-50 p-1 hover:bg-slate-300 transition-all duration-200 ease-in-out  cursor-pointer rounded-full">
                      <img src={quora} alt="quora" />
                    </div>
                    <div className=" bg-slate-50 p-1 hover:bg-slate-300 transition-all duration-200 ease-in-out  cursor-pointer rounded-full">
                      <img src={pinterest} alt="pinterest" />
                    </div>
                    <div className=" bg-slate-50 p-1 hover:bg-slate-300 transition-all duration-200 ease-in-out  cursor-pointer rounded-full">
                      <img src={instagram} alt="instagram" />
                    </div>
                    <div className=" bg-slate-50 p-1 hover:bg-slate-300 transition-all duration-200 ease-in-out  cursor-pointer rounded-full">
                      <img src={facebook} alt="facebook" />
                    </div>
                    <div className=" bg-slate-50 p-1 hover:bg-slate-300 transition-all duration-200 ease-in-out  cursor-pointer rounded-full">
                      <img src={linkedin} alt="linkedin" />
                    </div>
                  </div> */}
                </div>
              </div>
              <div className=" pl-0 md:pl-8 py-4 space-y-4">
                <p>Get in contact. We would be delighted to assist you.</p>
                <div>
                  <p>Name:</p>
                  <input
                    type="text"
                    placeholder="Your name"
                    className=" h-12 px-3 text-md w-full border-solid border-2  rounded-md"
                    required
                  />
                </div>
                <div>
                  <p>Email:</p>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className=" h-12 px-3 text-md w-full border-solid border-2  rounded-md"
                  />
                </div>
                <div>
                  <p>Message:</p>
                  <textarea
                    class="resize-y w-full py-3 px-3 full border-solid border-2 rounded-md"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div className=" flex items-center justify-end gap-5">
                  <button className=" btn-primary px-6">Submit</button>
                  <button className=" btn-secondary px-6">Reset</button>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Contact;
