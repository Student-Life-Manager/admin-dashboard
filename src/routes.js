// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import AllOutpassTable from "layouts/all-outpasses-table";
import AllStudentRequestsTable from "layouts/all-student-requests";

import FileUpload from "layouts/file-upload";

import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import OutpassTracker from "layouts/outpass-tracker";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Users",
    key: "Users",
    icon: <Icon fontSize="small">people</Icon>,
    route: "/users",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Outpasses",
    key: "Outpasses",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/outpasses",
    component: <AllOutpassTable />,
  },
  {
    type: "collapse",
    name: "Outpass tracker",
    key: "Outpass tracker",
    icon: <Icon fontSize="small">pending_actions</Icon>,
    route: "/outpass-tracker",
    component: <OutpassTracker />,
  },
  {
    type: "collapse",
    name: "Edit guardians",
    key: "Edit guardians",
    icon: <Icon fontSize="small">upload_file</Icon>,
    route: "/edit-guardians",
    component: <FileUpload />,
  },

  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
  //   route: "/rtl",
  //   component: <RTL />,
  // },

  {
    type: "collapse",
    name: "Requests",
    key: "Request",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/student-edit-requests",
    component: <AllStudentRequestsTable />,
  },
  {
    type: "collapse",
    name: "Events",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  // {
  //   type: "collapse",
  //   name: "Sign In",
  //   key: "sign-in",
  //   icon: <Icon fontSize="small">login</Icon>,
  //   route: "/authentication/sign-in",
  //   component: <SignIn />,
  // },
  // {
  //   type: "collapse",
  //   name: "Create Accounts",
  //   key: "sign-up",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/authentication/sign-up",
  //   component: <SignUp />,
  // },
  {
    type: "collapse",
    name: "Create Accounts",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/create-account",
    component: <SignUp />,
  },
];

export default routes;
