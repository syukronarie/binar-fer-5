import React, { useState } from "react";

// components
// 1. functional component
// 2. class component

function Count() {
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(0);
	return (
		<div>
			<h1>Count App</h1>
			<h2>Counting 1: {count}</h2>
			<button
				onClick={() => {
					setCount(count - 1);
				}}
			>
				- decrement
			</button>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				+ increment
			</button>

			<h2>Counting 2: {count2}</h2>
			<button
				onClick={() => {
					setCount2(count2 - 1);
				}}
			>
				- decrement
			</button>
			<button
				onClick={() => {
					setCount2(count2 + 1);
				}}
			>
				+ increment
			</button>
		</div>
	);
}

// class Count extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = { count: 0, count2: 0 };
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h1>Count App</h1>
// 				<h2>Counting: {this.state.count}</h2>
// 				<button
// 					onClick={() => {
// 						this.setState({ count: this.state.count - 1 });
// 					}}
// 				>
// 					- Decrement
// 				</button>
// 				<button
// 					onClick={() => {
// 						this.setState({ count: this.state.count + 1 });
// 					}}
// 				>
// 					+ Increment
// 				</button>

// 				<h2>Counting 2: {this.state.count2}</h2>
// 				<button
// 					onClick={() => {
// 						this.setState({ count2: this.state.count2 - 1 });
// 					}}
// 				>
// 					- Decrement
// 				</button>
// 				<button
// 					onClick={() => {
// 						this.setState({ count2: this.state.count2 + 1 });
// 					}}
// 				>
// 					+ Increment
// 				</button>
// 			</div>
// 		);
// 	}
// }

export default Count;
