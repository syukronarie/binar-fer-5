import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCarPage from "../pages/AddCarPage";
import DashboardPage from "../pages/DashboardPage";
import EditCarPage from "../pages/EditCarPage";
import ListCarsPage from "../pages/ListCarsPage";
import NotFoundPage from "../pages/NotFoundPage";
import SignInPage from "../pages/SignInPage";

const SetupRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<DashboardPage />} />
			<Route path="/add-car" element={<AddCarPage />} />
			<Route path="/edit-car" element={<EditCarPage />} />
			<Route path="/list-cars" element={<ListCarsPage />} />
			<Route path="/sign-in" element={<SignInPage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};

export default SetupRouter;
