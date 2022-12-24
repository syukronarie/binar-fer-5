import React from "react";
import { useCount } from "../contexts/count-contexts";

export default function Count() {
	const { dispatch } = useCount();
	return (
		<div>
			<button onClick={() => dispatch({ type: "increment" })}>increment</button>
			<button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
			<button
				onClick={() => dispatch({ type: "incrementByPayload", payload: 20 })}
			>
				increment by payload
			</button>
		</div>
	);
}
