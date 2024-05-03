import { lazy } from "react";
import Navbar from "../Navbar";
const App = lazy(() => import("../pages/App"));
const Profile = lazy(() => import("../pages/Profile"));

export default
[
    {
      path: "/",
      element: <Navbar><App/></Navbar>
    },
    {
      path: "/profile",
      element: <Navbar><Profile/></Navbar>
    },
    {
      path: "/networks",
      element: <Navbar><></></Navbar>
    }
];