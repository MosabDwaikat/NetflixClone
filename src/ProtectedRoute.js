import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./providers/AuthProvider";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { authed } = useAuth();

  if (!authed) {
    return <Navigate to="/" />;
  }

  return Component;
};

export default ProtectedRoute;
