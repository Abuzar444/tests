import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import WeightTracker from "./pages/WeightTracker";
import AllExercises from "./pages/AllExercises";
import AddExercise from "./pages/AddExercise";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as addExerciseAction } from "./pages/AddExercise";
import { action as editExerciseAction } from "./pages/EditExercise";
import { action as profileAction } from "./pages/Profile";
import { action as forgotPasswordAction } from "./pages/ForgotPassword";
import { loader as dashboardLoader } from "./pages/Dashboard";
import { loader as allExercisesLoader } from "./pages/AllExercises";
import { loader as editExerciseLoader } from "./pages/EditExercise";
import { loader as adminLoader } from "./pages/Admin";
import { loader as profileLoader } from "./pages/Profile";
import { loader as weightLoader } from "./pages/WeightTracker";
import EditExercise from "./pages/EditExercise";
import ForgotPassword from "./pages/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
        action: forgotPasswordAction,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <Profile />,
            loader: profileLoader,
            action: profileAction,
          },
          {
            path: "admin",
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: "weight-track",
            element: <WeightTracker />,
            loader: weightLoader,
          },
          {
            path: "all-exercises",
            element: <AllExercises />,
            loader: allExercisesLoader,
          },
          {
            path: "add-exercise",
            element: <AddExercise />,
            action: addExerciseAction,
          },
          {
            path: "edit-exercise/:id",
            element: <EditExercise />,
            action: editExerciseAction,
            loader: editExerciseLoader,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
