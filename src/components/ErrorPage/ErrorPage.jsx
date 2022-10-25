import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2>Error happened!</h2>
      <Link to="/">Go back to home page</Link>
    </div>
  );
};

export default ErrorPage;
