import React from "react";
import { BrowserRouter } from "react-router-dom";
import SidebarNav from "./components/SidebarNav/SidebarNav";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex flex-row overflow-hidden">
      <SidebarNav />
      <div className="flex flex-col flex-1 overflow-hidden pl-0 md:pl-64">
        <div className=" pl-2">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
