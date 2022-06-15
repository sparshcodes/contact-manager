import React from "react";
import { Navigate } from "react-router-dom";
import { userAuth } from "../Contexts/UserAuthContext";

function ProtectedRoute({ children }) {
  const { user } = userAuth();

  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
}

export default ProtectedRoute;
