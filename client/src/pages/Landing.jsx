
import Wrapper from "../assets/wrappers/LandingPage";
import logo from "../assets/images/favicon.ico";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="FitTrack" className="logo" />
        <h3>
          Fit<span>Track</span>
        </h3>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Fit<span>Track</span>
          </h1>
          <p>
            FitTrack is a fitness tracking app that allows you to track your
            fitness goals and progress. With FitTrack, you can track your
            workouts, and your weight.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
        <img src={main} alt="Indoor Bike" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
