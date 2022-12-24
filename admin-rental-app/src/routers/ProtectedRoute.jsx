import React from "react";
import Auth from "../utils/Auth";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
	if (!Auth.isAuthorization()) return <Outlet />;
	return <Navigate to="/" />;
};

export default ProtectedRoute;
