import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../authentication/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, authLoading } = useContext(AuthContext);
  const location = useLocation();

  if (authLoading) {
    return <span className="">Loading...</span>;
  }

  if (!user?.uid) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
