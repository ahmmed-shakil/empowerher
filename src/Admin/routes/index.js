import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../components/Home/components/Home";
import Test1 from "../components/Test1";
import Test2 from "../components/Test2";
import PersonalDetails from "../components/PersonalDetails/PersonalDetails";
import { JoinRoom } from "../components/JoinRoom/JoinRoom";
import GroupRoom from "../components/GroupRoom/GroupRoom";
import TakeTest from "../components/TakeTest/TakeTest";
import SessionHistory from "../components/SessionHistory/SessionHistory";
import EnterSession from "../components/EnterSession/EnterSession";
import ChatWithAdmin from "../components/ChatWithAdmin/ChatWithAdmin";
import GroupChat from "../components/GroupChat/GroupChat";
import WhiteBoard from "../components/WhiteBoard/WhiteBoard";
import Dashboard from "../components/Dashboard/Dashboard";
export const adminPages = [
  // {
  //   path: "/task-manager",
  //   exact: true,
  //   component: TaskManager,
  //   key: "task-manager",
  //   value: "Task Manager",
  //   show: true,
  // },
  // {
  //   path: "/our-courses",
  //   exact: true,
  //   component: AllCourses,
  //   key: "our-courses",
  //   value: "Our Courses",
  //   show: true,
  // },
  // {
  //   path: "/course-details/:id",
  //   exact: true,
  //   component: CourseDetails,
  //   key: "course-details",
  //   value: "Course Details",
  //   show: false,
  // },
  {
    path: "/dashboard",
    exact: true,
    component: Dashboard,
    key: "test",
    value: "Dashboard",
    show: false,
  },

  {
    path: "/dashboard/courses",
    exact: true,
    component: Dashboard,
    key: "course",
    value: "Course",
    show: false,
  },
  {
    path: "/dashboard/create-course",
    exact: true,
    component: Dashboard,
    key: "create-course",
    value: "Create Course",
    show: false,
  },
  {
    path: "/dashboard/job-list",
    exact: true,
    component: Dashboard,
    key: "job-list",
    value: "Job List",
    show: false,
  },
  {
    path: "/dashboard/post-job",
    exact: true,
    component: Dashboard,
    key: "post-job",
    value: "Post New Job",
    show: false,
  },
  {
    path: "/dashboard/partners",
    exact: true,
    component: Dashboard,
    key: "partners",
    value: "Partners(NGO's)",
    show: false,
  },
  {
    path: "/dashboard/add-partner",
    exact: true,
    component: Dashboard,
    key: "add-partner",
    value: "Add Partner/NGO",
    show: false,
  },
  {
    path: "/dashboard/students",
    exact: true,
    component: Dashboard,
    key: "students",
    value: "Students",
    show: false,
  },
  {
    path: "/dashboard/personal-details",
    exact: true,
    component: PersonalDetails,
    key: "personal-details",
    value: "Personal Details",
    show: false,
  },
  {
    path: "/dashboard/reset-password",
    exact: true,
    component: PersonalDetails,
    key: "reset-password",
    value: "Reset Password",
    show: false,
  },
  // {
  //   path: "/session-history",
  //   exact: true,
  //   component: SessionHistory,
  //   key: "session-history",
  //   value: "Session History",
  //   show: false,
  // },
  // {
  //   path: "/enter-session",
  //   exact: true,
  //   component: EnterSession,
  //   key: "enter-session",
  //   value: "Enter Session",
  //   show: false,
  // },
  // {
  //   path: "/chat-with-admin",
  //   exact: true,
  //   component: ChatWithAdmin,
  //   key: "chat-with-admin",
  //   value: "Chat With Admin",
  //   show: false,
  // },
  // {
  //   path: "/group-chat",
  //   exact: true,
  //   component: GroupChat,
  //   key: "group-chat",
  //   value: "Group Chat",
  //   show: false,
  // },
  // {
  //   path: "/whiteboard",
  //   exact: true,
  //   component: WhiteBoard,
  //   key: "whiteboard",
  //   value: "Whiteboard",
  //   show: false,
  // },
];

const AdminRoutes = () => {
  return (
    // <BrowserRouter basename="/admin">
    <Routes>
      {adminPages.map(({ component, path }) => {
        const Component = component;
        return <Route key={path} element={<Component />} path={path} />;
      })}
    </Routes>
    // </BrowserRouter>
  );
};

export default AdminRoutes;
