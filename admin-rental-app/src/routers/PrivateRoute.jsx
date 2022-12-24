import React from "react";
import Auth from "../utils/Auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Layout from "../components/Layout";

const PrivateRoute = () => {
	const location = useLocation();
	const { pathname } = location;
	let path = "/sign-in";
	if (pathname !== "/") {
		path += `?return_to=${pathname.slice(1, pathname.length)}`;
	}

	if (Auth.isAuthorization())
		return (
			<Layout>
				<Outlet />
			</Layout>
		);

	return <Navigate to={path} />;
};

export default PrivateRoute;
