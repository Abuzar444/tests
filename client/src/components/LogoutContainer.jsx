import React from "react";
import Wrapper from "../assets/wrappers/LogoutContainer";
import { useDashboardContext } from "../pages/Dashboard";
import { useState } from "react";

const LogoutContainer = () => {
  const { logout } = useDashboardContext();

  return (
    <Wrapper>
      <button className="btn logout-btn" onClick={logout}>
        Logout
      </button>
    </Wrapper>
  );
};

export default LogoutContainer;
