import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCarPage from "../pages/AddCarPage";
import DashboardPage from "../pages/DashboardPage";
import EditCarPage from "../pages/EditCarPage";
import NotFoundPage from "../pages/NotFoundPage";
import SignInPage from "../pages/SignInPage";
import SignInCustomerPage from "../pages/SignInCustomerPage";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";
import CarRentedChart from "../pages/CarRentedChart";
import ListOrdersPage from "../pages/ListOrdersPage";
import LoginPage from "../pages/LoginPage";
import LoginUsingGoogle from "../pages/LoginUsingGoogle";
import PaymentPage from "../pages/PaymentPage";
import ListCarsPage from "../pages/ListCarsPage";

function SetupRouter() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route index element={<DashboardPage />} />
        <Route path="/add-car" element={<AddCarPage />} />
        <Route path="/edit-car" element={<EditCarPage />} />
        <Route path="/list-orders" element={<ListOrdersPage />} />
        <Route path="/list-cars" element={<ListCarsPage />} />
        <Route path="/car-rented-chart" element={<CarRentedChart />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Route>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-in-customer" element={<SignInCustomerPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login-using-google" element={<LoginUsingGoogle />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default SetupRouter;
