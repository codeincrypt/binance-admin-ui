// Admin Page
import Dashbord from "./Admin/Dashbord";
import Profile from "./Admin/Profile";

// Home Page
import Login from "./Home/Login";

export const AdminRouter = [
  {
    path: "/admin",
    component: Dashbord,
    exact: true,
  },
  {
    path: "/dashboard",
    component: Dashbord,
    exact: true,
  },
  {
    path: "/profile",
    component: Profile,
    exact: true,
  },
];

export const MainRouter = [
  {
    path: "/",
    component: Login,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    exact: true,
  },
];
