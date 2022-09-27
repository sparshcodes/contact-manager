import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="error-wrapper">
      <h2>404</h2>
      <span>page not found</span>
      <p>
        go to <Link to="/">home page</Link>
      </p>
    </div>
  );
};

export default ErrorPage;
