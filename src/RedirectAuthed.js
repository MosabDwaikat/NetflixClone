import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./providers/AuthProvider";

const RedirectAuthed = ({ element: Component, ...rest }) => {
  const { authed } = useAuth();

  if (authed) {
    return <Navigate to="/home" />;
  }

  return Component;
};

export default RedirectAuthed;
