import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./providers/AuthProvider";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { authed, isLoading } = useAuth();

  // if (isLoading) return <div>loading ...</div>;
  if (!isLoading && !authed) {
    return <Navigate to="/" />;
  }

  return Component;
};

export default ProtectedRoute;
