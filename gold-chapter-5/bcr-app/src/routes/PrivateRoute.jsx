import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Auth from "../utils/Auth";

const PrivateRoute = () => {
	if (!Auth.isAuthorization()) {
		return <Navigate to="/login" />;
	}

	return <Outlet />;
};

export default PrivateRoute;
