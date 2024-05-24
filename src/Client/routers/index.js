import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientHome from "../Pages/Home";
import DesktopFooter from "../../components/DesktopFooter";
import About from "../Pages/About/About";
import DesktopHeader from "../../components/shared/DesktopHeader";
import Tutoring from "../Pages/Services/Tutoring/Tutoring";
import HomeWork from "../Pages/Services/HomeWork/HomeWork";
import Assignment from "../Pages/Services/Assignment/Assignment";
import { Project } from "../Pages/Services/Project/Project";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import Admin from "../../Admin";
import Test1 from "../../Admin/components/Test1";
import Test2 from "../../Admin/components/Test2";
import Dashboard from "../../Admin/components/Dashboard/Dashboard";
import PersonalDetails from "../../Admin/components/PersonalDetails/PersonalDetails";
import { JoinRoom } from "../../Admin/components/JoinRoom/JoinRoom";
import GroupRoom from "../../Admin/components/GroupRoom/GroupRoom";
import TakeTest from "../../Admin/components/TakeTest/TakeTest";
import SessionHistory from "../../Admin/components/SessionHistory/SessionHistory";
import EnterSession from "../../Admin/components/EnterSession/EnterSession";
import ChatWithAdmin from "../../Admin/components/ChatWithAdmin/ChatWithAdmin";
import GroupChat from "../../Admin/components/GroupChat/GroupChat";
import WhiteBoard from "../../Admin/components/WhiteBoard/WhiteBoard";
import { LockClosedIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export const clientPages = [
  {
    path: "/",
    exact: true,
    component: ClientHome,
    key: "home",
    value: "Home",
    show: true,
  },
  {
    path: "/about",
    exact: true,
    component: About,
    key: "about",
    value: "About",
    show: true,
  },
  {
    path: "/courses",
    exact: true,
    component: About,
    key: "courses",
    value: "Courses",
    show: true,
  },
  {
    path: "/partners",
    exact: true,
    component: About,
    key: "partners",
    value: "Partners",
    show: true,
  },
  {
    path: "/services",
    key: "services",
    value: "Services",
    show: true,
    routes: [
      {
        path: "/tutoring-services",
        exact: true,
        component: Tutoring,
        key: "tutoring-services",
        value: "Online Courses",
        show: true,
        icon: (
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
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        ),
      },
      // {
      //   path: "homework-help",
      //   exact: true,
      //   component: HomeWork, // Replace with the actual component for Service 2
      //   key: "homework-help",
      //   value: "Online Homework Help",
      //   show: true,
      //   icon: (
      //     <svg
      //       xmlns="http://www.w3.org/2000/svg"
      //       fill="none"
      //       viewBox="0 0 24 24"
      //       strokeWidth={1.5}
      //       stroke="currentColor"
      //       className="w-6 h-6"
      //     >
      //       <path
      //         strokeLinecap="round"
      //         strokeLinejoin="round"
      //         d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
      //       />
      //     </svg>
      //   ),
      // },
      {
        path: "assignment-help",
        exact: true,
        component: Assignment, // Replace with the actual component for Service 2
        key: "assignment-help",
        value: "Assignment Help",
        show: true,
        icon: (
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
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
            />
          </svg>
        ),
      },
      {
        path: "project-management",
        exact: true,
        component: Project, // Replace with the actual component for Service 2
        key: "project-management",
        value: "Project Management",
        show: true,
        icon: (
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
              d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
            />
          </svg>
        ),
      },
      // Add more services as needed
    ],
  },

  {
    path: "/carrer",
    exact: true,
    component: ClientHome,
    key: "carrer",
    value: "Carrer",
    show: true,
  },
  // {
  //   path: "/blog",
  //   exact: true,
  //   component: ClientHome,
  //   key: "blog",
  //   value: "Blog",
  //   show: true,
  // },
  {
    path: "/user-profile",
    key: "user-profile",
    value: <UserCircleIcon height={28} width={28} />,
    show: true,
    routes: [
      {
        path: "/profile",
        exact: true,
        component: ClientHome,
        key: "profile",
        value: "Profile",
        show: true,
        icon: (
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
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        ),
      },
      {
        path: "reset-password",
        exact: true,
        component: ClientHome, // Replace with the actual component for Service 2
        key: "reset-password",
        value: "Reset Password",
        show: true,
        icon: <LockClosedIcon height={24} width={24} />,
      },
      {
        path: "enrolled-courses",
        exact: true,
        component: ClientHome, // Replace with the actual component for Service 2
        key: "enrolled-courses",
        value: "My Courses",
        show: true,
        icon: (
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
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
            />
          </svg>
        ),
      },
      {
        path: "job-applications",
        exact: true,
        component: ClientHome, // Replace with the actual component for Service 2
        key: "job-applications",
        value: "Applied Jobs",
        show: true,
        icon: (
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
              d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
            />
          </svg>
        ),
      },
      // Add more services as needed
    ],
  },
  {
    path: "/login",
    exact: true,
    component: Login,
    key: "login",
    value: "Login",
    show: false,
  },
  {
    path: "/register",
    exact: true,
    component: Register,
    key: "register",
    value: "Register",
    show: false,
  },
  {
    path: "/dashboard",
    exact: true,
    component: Admin,
    key: "tutor",
    value: "Tutor",
    show: false,
  },

  {
    path: "/test",
    exact: true,
    component: Test1,
    key: "test",
    value: "Test",
    show: false,
  },
  {
    path: "/dashboard",
    exact: true,
    component: Dashboard,
    key: "test",
    value: "Dashboard",
    show: false,
  },
  {
    path: "/personal-details",
    exact: true,
    component: PersonalDetails,
    key: "personal-details",
    value: "Personal Details",
    show: false,
  },
  {
    path: "/join-room",
    exact: true,
    component: JoinRoom,
    key: "join-room",
    value: "Join Room",
    show: false,
  },
  {
    path: "/group-room",
    exact: true,
    component: GroupRoom,
    key: "group-room",
    value: "Group Room",
    show: false,
  },
  {
    path: "/test",
    exact: true,
    component: TakeTest,
    key: "test",
    value: "Take Test",
    show: false,
  },
  {
    path: "/session-history",
    exact: true,
    component: SessionHistory,
    key: "session-history",
    value: "Session History",
    show: false,
  },
  {
    path: "/enter-session",
    exact: true,
    component: EnterSession,
    key: "enter-session",
    value: "Enter Session",
    show: false,
  },
  {
    path: "/chat-with-admin",
    exact: true,
    component: ChatWithAdmin,
    key: "chat-with-admin",
    value: "Chat With Admin",
    show: false,
  },
  {
    path: "/group-chat",
    exact: true,
    component: GroupChat,
    key: "group-chat",
    value: "Group Chat",
    show: false,
  },
  {
    path: "/whiteboard",
    exact: true,
    component: WhiteBoard,
    key: "whiteboard",
    value: "Whiteboard",
    show: false,
  },
];

const MyRoutes = () => {
  return (
    <BrowserRouter basename="/">
      {/* <DesktopHeader /> */}
      <Routes>
        {clientPages.map(({ component, path, routes }) => {
          if (routes?.length) {
            return (
              <>
                {routes.map(({ component, path }) => {
                  const Component = component;
                  console.log("Nested path", path);
                  return (
                    <Route key={path} element={<Component />} path={path} />
                  );
                })}
              </>
            );
          } else {
            const Component = component;
            return <Route key={path} element={<Component />} path={path} />;
          }
        })}
        {/* <Route element={<Page404 />} /> */}
      </Routes>

      {/* <DesktopFooter /> */}
    </BrowserRouter>
  );
};

export default MyRoutes;
