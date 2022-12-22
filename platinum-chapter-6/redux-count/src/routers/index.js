import React from "react";
import { Route, Routes } from "react-router-dom";
import PostDetail from "../pages/PostDetail";
import Posts from "../pages/Posts";

const SetupRouters = () => {
	return (
		<Routes>
			<Route path="/" element={<Posts />} />
			<Route path="posts/:id" element={<PostDetail />} />
		</Routes>
	);
};

export default SetupRouters;
