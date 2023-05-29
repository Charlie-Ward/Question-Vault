import React from "react";
import { Link } from "react-router-dom";
import "./error-page.css";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>Error</h1>
      <p>Sorry, there was an error loading this page.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default ErrorPage;
