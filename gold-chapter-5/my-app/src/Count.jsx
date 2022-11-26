import React, { useState } from "react";

// components
// 1. functional component
// 2. class component

// const Count = () => {
// 	const [count, setCount] = useState(0);

// 	return (
// 		<div>
// 			<h1>Count App</h1>
// 			<h2>{count}</h2>
// 			<button
// 				onClick={() => {
// 					setCount(count - 1);
// 				}}
// 			>
// 				- Decrement
// 			</button>
// 			<button
// 				onClick={() => {
// 					setCount(count + 1);
// 				}}
// 			>
// 				+ Increment
// 			</button>
// 		</div>
// 	);
// };

class Count extends React.Component {
	constructor() {
		super();
		this.state = { count: 0 };
	}

	render() {
		return (
			<div>
				<h1>Count App</h1>
				<h2>{this.state.count}</h2>
				<button
					onClick={() => {
						this.setState({ count: this.state.count - 1 });
					}}
				>
					- Decrement
				</button>
				<button
					onClick={() => {
						this.setState({ count: this.state.count + 1 });
					}}
				>
					+ Increment
				</button>
			</div>
		);
	}
}

export default Count;
