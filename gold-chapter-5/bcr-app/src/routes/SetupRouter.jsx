import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarDetail from "../pages/CarDetail";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";
import SearchCarPage from "../pages/SearchCarPage";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";

const SetupRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PrivateRoute />}>
					<Route index element={<HomePage />} />
					<Route path="/car/:carId" element={<CarDetail />} />
					<Route path="/search-car" element={<SearchCarPage />} />
				</Route>
				<Route path="/" element={<ProtectedRoute />}>
					<Route path="/login" element={<LoginPage />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default SetupRouter;
