import React from "react";
import { FaTimes } from "react-icons/fa";
import Logo from "../assets/images/favicon.ico";
import { NavLink } from "react-router-dom";
import { links } from "../utils/util";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboardContext } from "../pages/Dashboard";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar, user } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <img src={Logo} alt="logo" className="logo" />
          </header>
          <div className="nav-links">
            {links.map((link) => {
              const { name, path, icon } = link;
              if (user && user.role === "user" && name === "Admin") {
                return null;
              }

              return (
                <NavLink
                  key={name}
                  to={path}
                  className="nav-link"
                  onClick={toggleSidebar}
                  end
                >
                  <span className="icon">{icon}</span>
                  {name}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
