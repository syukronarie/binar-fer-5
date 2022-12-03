import React, { useEffect, useState } from "react";

function CountView(props) {
	const { handleResetCount, count } = props;

	useEffect(() => {
		return () => {
			console.log("this is trigerred due to useEffect clean up function");
			handleResetCount();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<h1>COUNT: {count}</h1>
		</div>
	);
}

const FunctLifeCycle = () => {
	const [count, setCount] = useState(0);
	const [showCountView, setShowCountView] = useState(true);

	// infinite listen
	useEffect(() => {});

	// triggered when there is update dependency
	useEffect(() => {
		console.log({ count });
	}, [count]);

	// triggered once in first render
	useEffect(() => {
		console.log("Initial State");
	}, []);

	const handleResetCount = () => {
		setCount(0);
	};

	return (
		<div>
			<h1>FunctLifeCycle</h1>
			<div>
				<button onClick={() => setShowCountView(!showCountView)}>
					{showCountView ? "UNSHOW" : "SHOW"} COUNT VIEW
				</button>
			</div>
			{showCountView && (
				<div>
					<CountView count={count} handleResetCount={handleResetCount} />
					<button onClick={() => setCount(count + 1)}>+ Increment</button>
				</div>
			)}
		</div>
	);
};

export default FunctLifeCycle;
