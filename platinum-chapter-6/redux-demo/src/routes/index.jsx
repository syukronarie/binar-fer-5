import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";

const SetupRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default SetupRouter;
