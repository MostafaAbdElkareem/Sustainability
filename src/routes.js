import Dashboard from "views/Dashboard/Dashboard.jsx";
import Sustainability from "views/Sustainability/Wizard.jsx";
import Assesments from "views/Sustainability/Assessments.jsx";
import DashboardIcon from "@material-ui/icons/Dashboard";
var dashRoutes = [
  {
    path: "/MyAssesments",
    name: "My Assesments",
    icon: DashboardIcon,
    component: Assesments,
    layout: "/admin"
  },
  {
    path: "/Sustainability",
    name: "Sustainability Assessments",
    icon: DashboardIcon,
    component: Sustainability,
    layout: "/admin"
  },
  {
    path: "/Benchmarks",
    name: "Benchmarks",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "Farms",
    icon: "content_paste",
    state: "formsCollapse",
    views: [
      {
        path: "/Farm01",
        name: "Farm 01",
        mini: "FR1",
        collapse: true,
        component: Dashboard,
        layout: "/admin",
        views: [
          {
            path: "/field01",
            name: "Field 01",
            mini: "FD2",
            component: Dashboard,
            layout: "/admin"
          },
          {
            path: "/field02",
            name: "Field 02",
            mini: "FD2",
            component: Dashboard,
            layout: "/admin"
          }
        ]
      },
      {
        path: "/Farm02",
        name: "Farm 02",
        mini: "FR2",
        collapse: true,
        component: Dashboard,
        layout: "/admin",
        views: [
          {
            path: "/field11",
            name: "Field 11",
            mini: "FD2",
            component: Dashboard,
            layout: "/admin"
          },
          {
            path: "/field12",
            name: "Field 12",
            mini: "FD2",
            component: Dashboard,
            layout: "/admin"
          }
        ]
      }
    ]
  }
];
export default dashRoutes;
