import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { adminPages } from "../../routes";
import logo from "../../../images/teacher.png";

const SidebarNav = () => {
  const { pathname } = useLocation();
  // bg-gradient-to-b from-blue-500 to-blue-700
  return (
    <div>
      <div className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-2xl overflow-y-auto">
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center border border-b-2 border-l-0 border-t-0 border-r-0 mb-4 border-slate-400 pb-4">
            <img src={logo} alt="logo" className="w-10 h-10 mr-2" />
            <div>
              <h6 className="text-lg font-semibold overflow-hidden">
                John Doe
              </h6>
            </div>
          </div>

          <div className="space-y-4 flex-grow">
            {adminPages?.map((page) => (
              <NavLink
                key={page.path}
                to={page.path}
                className={`block text-gray-200 hover:bg-gray-200 hover:text-slate-800 pl-4 pr-2 py-2 rounded ${
                  pathname === page.path && "bg-gray-200 text-slate-800"
                }`}
              >
                {page.value}
              </NavLink>
            ))}
          </div>
          <div>
            <button className=" bg-secondary text-slate-100 rounded-md px-4 py-3 w-full mt-4 md:mt-0">
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarNav;
