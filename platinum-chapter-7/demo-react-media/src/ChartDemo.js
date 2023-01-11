import React from "react";
import { Line } from "react-chartjs-2";

const ChartDemo = () => {
	const labels = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul"];
	const data = {
		labels,
		datasets: [
			{
				label: "Main Income",
				backgroundColor: "pink",
				borderColor: "blue",
				data: [0, 10, 5, 2, 20, 30],
			},
			{
				label: "Side Income 1",
				backgroundColor: "red",
				borderColor: "green",
				data: [10, 15, 20, 2, 10, 70],
			},
			{
				label: "Side Income 2",
				backgroundColor: "red",
				borderColor: "green",
				data: [0, 10, 20, 2, 10, 70],
			},
		],
	};
	return (
		<>
			<h1>Line chart example</h1>
			<Line data={data} />;
		</>
	);
};

export default ChartDemo;
