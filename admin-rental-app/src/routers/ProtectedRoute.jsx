import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Auth from "../utils/Auth";

function ProtectedRoute() {
  if (!Auth.isAuthorization()) return <Outlet />;
  return <Navigate to="/" />;
}

export default ProtectedRoute;
