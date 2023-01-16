import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import Auth from "../utils/Auth";

function PrivateRoute() {
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
}

export default PrivateRoute;
