
import Wrapper from "../assets/wrappers/BigSidebar";
import { useDashboardContext } from "../pages/Dashboard";
import { links } from "../utils/util";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/favicon.ico";
// test
const BigSidebar = () => {
  const { showSidebar, user } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <img src={Logo} alt="logo" className="logo" />
          </header>
          <div className="nav-links">
            {links.map((link) => {
              if (link.name === "Admin" && user.role !== "admin") return null;
              const { name, path, icon } = link;

              return (
                <NavLink key={name} to={path} className="nav-link" end>
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

export default BigSidebar;
