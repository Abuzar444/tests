import { CgProfile } from "react-icons/cg";
import { MdAdminPanelSettings } from "react-icons/md";
import { BsGraphDown } from "react-icons/bs";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaDumbbell } from "react-icons/fa";
import axios from "axios";

export const links = [
  {
    name: "Profile",
    path: ".",
    icon: <CgProfile />,
  },
  {
    name: "Admin",
    path: "admin",
    icon: <MdAdminPanelSettings />,
  },
  {
    name: "Weight Tracker",
    path: "weight-track",
    icon: <BsGraphDown />,
  },
  {
    name: "All Exercises",
    path: "all-exercises",
    icon: <GiWeightLiftingUp />,
  },
  {
    name: "Add Exercise",
    path: "add-exercise",
    icon: <FaDumbbell />,
  },
];

export const customFetch = axios.create({
  baseURL: "/api/v1",
});
