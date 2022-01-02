import { adminRoot } from "./config";
import { UserRole } from "../utils/auth.roles";

const data = [
  {
    id: "dashboards",
    icon: "iconsminds-dashboard",
    label: "menu.dashboards",
    to: `${adminRoot}/dashboards/default`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },
  {
    id: "applications",
    icon: "iconsminds-gears",
    label: "menu.tools",
    to: `${adminRoot}/applications`,
    subs: [
      {
        icon: "simple-icon-check",
        label: "menu.todo",
        to: `${adminRoot}/applications/todo`,
      },
      {
        icon: "simple-icon-calculator",
        label: "menu.survey",
        to: `${adminRoot}/applications/survey`,
      },
      {
        icon: "simple-icon-bubbles",
        label: "menu.chat",
        to: `${adminRoot}/applications/chat`,
      },
    ],
  },
  {
    id: "blank-page",
    icon: "iconsminds-id-card",
    label: "menu.my-profile",
    to: `${adminRoot}/pages/profile/portfolio`,
  },
];
export default data;
