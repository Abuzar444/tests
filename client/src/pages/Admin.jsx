import React from "react";
import Wrapper from "../assets/wrappers/StatsContainer";
import { customFetch } from "../utils/util";
import { toast } from "react-toastify";
import { useLoaderData, redirect } from "react-router-dom";
import { FaUsers, FaCalendarCheck } from "react-icons/fa";
import StatItem from "../components/StatItem";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/user/admin");
    return data;
  } catch (error) {
    toast.error("You are not authorized to view this page");
    return redirect("/dashboard");
  }
};

const Admin = () => {
  const { totalUsers, totalExercises } = useLoaderData();
  console.log("totalUsers", totalUsers);
  console.log("totalExercises", totalExercises);
  return (
    <Wrapper>
      <StatItem
        count={totalUsers}
        title="Total Users"
        icon={<FaUsers />}
      ></StatItem>
      <StatItem
        count={totalExercises}
        title="Total Exercises"
        icon={<FaCalendarCheck />}
      ></StatItem>
    </Wrapper>
  );
};

export default Admin;
