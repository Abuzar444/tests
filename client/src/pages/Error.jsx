import React from "react";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="Not Found" />
          <h3>Oops!</h3>
          <p>Looks like the page you're looking for doesn't exist.</p>
          <Link to="/dashboard">Go Home</Link>
        </div>
      </Wrapper>
    );
  } else {
    return (
      <div>
        <h3>Oops!</h3>
      </div>
    );
  }
};

export default Error;
