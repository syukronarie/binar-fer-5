import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchPostById } from "../store/features/blogSlice";

const PostDetail = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.posts);

	useEffect(() => {
		dispatch(fetchPostById(id));
	}, [dispatch, id]);

	if (posts.error)
		return (
			<div>
				<h1>Error</h1>
				{JSON.stringify(posts.error)}
			</div>
		);

	if (posts.loading === "pending") return <h1>Loading...</h1>;

	const { title, body } = posts.dataById;

	return (
		<div>
			<h1>PostDetail</h1>
			<div>
				<h2>Title: {title}</h2>
				<p>{body}</p>
			</div>

			<Link to={"/"}>Back to Home</Link>
		</div>
	);
};

export default PostDetail;
