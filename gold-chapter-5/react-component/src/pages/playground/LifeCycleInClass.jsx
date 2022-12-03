import React, { Component } from "react";

class CountView extends Component {
	componentWillUnmount() {
		console.log("this is trigerred due to component will unmount");
	}

	render() {
		return (
			<div>
				<h1>COUNT: {this.props.count}</h1>
			</div>
		);
	}
}

export default class LifeCycleInClass extends Component {
	constructor() {
		super();
		console.log("This is from constructor()");
		this.state = { count: 0, showCountView: true };
	}

	componentDidMount() {
		console.log("this is from componentDidMount()");
	}

	componentDidUpdate() {
		console.log("This is from componentDidUpdate");
		console.log(this.state.count);
	}

	render() {
		console.log("This is from render()");
		return (
			<div>
				{console.log("this is from React updates DOM and refs")}
				Life Cycle In Class
				<div>
					<button
						onClick={() =>
							this.setState({ showCountView: !this.state.showCountView })
						}
					>
						{this.state.showCountView ? "UNSHOW" : "SHOW"} COUNT VIEW
					</button>
				</div>
				{this.state.showCountView && (
					<div>
						<CountView count={this.state.count} />
						<button
							onClick={() => this.setState({ count: this.state.count + 1 })}
						>
							+ Increment
						</button>
					</div>
				)}
			</div>
		);
	}
}
