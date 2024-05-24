import React, { useState } from "react";
import Switcher from "../../DarkModeSwitch/Switcher";
import { NavLink, useLocation } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { clientPages } from "../../Client/routers";
import { gradientStyle } from "../../utils/gradientStyle";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { bg_image_style2 } from "../../utils/backgroundImageStyle";

const DesktopHeader = () => {
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  const { pathname } = useLocation();

  console.log("Pathname", pathname);

  return (
    <div
      className="hidden md:block sticky top-0 shadow z-50"
      style={bg_image_style2}
    >
      <Layout>
        <div className="grid grid-cols-header py-7">
          <div className="flex items-center justify-start">
            <NavLink to={"/"}>
              <h2 className="text-2xl font-semibold" style={gradientStyle}>
                EmpowerHer
              </h2>
            </NavLink>
          </div>
          <div className="flex items-center justify-end space-x-4">
            {clientPages
              ?.filter((page) => page.show)
              .map((page) => {
                if (page?.routes?.length) {
                  return (
                    <div
                      key={page.key}
                      onMouseEnter={() => setHoveredDropdown(page.key)}
                      onMouseLeave={() => setHoveredDropdown(null)}
                      className="relative group"
                    >
                      <div
                        className={`nav-item flex items-center gap-1 ${
                          (pathname === page.path ||
                            hoveredDropdown === page.key) &&
                          "text-primary"
                        }`}
                      >
                        <p>{page.value} </p>
                        <div>
                          {hoveredDropdown === page.key ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 15.75l7.5-7.5 7.5 7.5"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                      {hoveredDropdown === page.key && (
                        <div
                          className="absolute right-0 mt-0 space-y-4 bg-white dark:bg-gray-800 border dark:border-gray-600 rounded-md p-2 shadow-md"
                          style={{ minWidth: "280px" }}
                        >
                          {page.routes.map((subRoute) => (
                            <NavLink
                              key={subRoute.key}
                              onClick={() => setHoveredDropdown(null)}
                              to={subRoute.path}
                              className={`nav-item gap-4 items-center flex hover:bg-slate-200`}
                            >
                              {subRoute?.icon} {subRoute.value}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                } else {
                  return (
                    <NavLink
                      key={page.key}
                      to={page.path}
                      className={`nav-item ${
                        pathname === page.path && "text-primary"
                      }`}
                    >
                      {page.value}
                    </NavLink>
                  );
                }
              })}
            <Switcher />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default DesktopHeader;
