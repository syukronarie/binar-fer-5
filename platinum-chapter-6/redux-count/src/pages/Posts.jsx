import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../store/features/blogSlice";

const Posts = () => {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.posts);

	React.useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	if (posts.error)
		return (
			<div>
				<h1>Error</h1>
				{JSON.stringify(posts.error)}
			</div>
		);

	if (posts.loading === "pending") return <h1>Loading...</h1>;

	return (
		<div>
			<h1>Posts</h1>
			{posts.data.map((val) => (
				<div key={val.id}>
					<Link to={`/posts/${val.id}`}>
						<h2>Title: {val.title}</h2>
					</Link>
					<p>{val.body}</p>
				</div>
			))}
		</div>
	);
};

export default Posts;
