
import {
  Outlet,
  redirect,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import SmallSidebar from "../components/SmallSidebar";
import BigSidebar from "../components/BigSidebar";
import Navbar from "../components/Navbar";
import { useState, createContext, useContext } from "react";
import { customFetch } from "../utils/util";
import Loader from "../components/Loader";

const dashboardContext = createContext();

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/user");
    return data;
  } catch (error) {
    return redirect("/");
  }
};


const Dashboard = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const [showSidebar, setShowSidebar] = useState(false);
  const { user } = useLoaderData();

  const toggleSidebar = () => {
    setShowSidebar((current) => !current);
  };

  const logout = async () => {
    try {
      await customFetch.get("/auth/logout");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <dashboardContext.Provider
      value={{
        user,
        showSidebar,
        toggleSidebar,
        logout,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              {isLoading ? <Loader /> : <Outlet />}
            </div>
          </div>
        </main>
      </Wrapper>
    </dashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(dashboardContext);
export default Dashboard;
