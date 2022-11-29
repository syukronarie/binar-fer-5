import React, { useState } from "react";

const CountApp = () => {
	const [state, setState] = useState(0);
	return (
		<div>
			<h1>CountApp</h1>
			<div>
				<h2>Counting: {state}</h2>
				<button
					disabled={state === 10}
					onClick={() => {
						setState(state + 1);
					}}
				>
					+ increment
				</button>
				<button
					disabled={state === 0}
					onClick={() => {
						setState(state - 1);
					}}
				>
					- decrement
				</button>
			</div>
		</div>
	);
};

export default CountApp;
