import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Auth from "../utils/Auth";

const ProtectedRoute = () => {
	if (Auth.isAuthorization()) {
		return <Navigate to="/" />;
	}

	return <Outlet />;
};

export default ProtectedRoute;
