import {
  FcDatabase,
  FcBusinessman,
  FcSurvey,
  FcEditImage,
  FcCheckmark,
  FcSupport
} from 'react-icons/fc'

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    layout: "/admin",
    icon: FcDatabase,
  },
  {
    path: "/user-profile",
    name: "User Profile",
    layout: "/admin",
    icon: FcBusinessman,
  },
  {
    path: "/table-list",
    name: "Table List",
    layout: "/admin",
    icon: FcSurvey,
  },
  {
    path: "/typography",
    name: "Typography",
    layout: "/admin",
    icon: FcEditImage,
  },
  {
    path: "/icons",
    name: "Icons",
    layout: "/admin",
    icon: FcCheckmark,
  },
  {
    path: "/maps",
    name: "Maps",
    layout: "/admin",
    icon: FcSupport,
  },
  {
    path: "/notifications",
    name: "Notifications",
    layout: "/admin",
    icon: FcSupport,
  }
]

export default dashboardRoutes;
