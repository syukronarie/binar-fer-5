import React from "react";
import { Pie } from "react-chartjs-2";

const PieChartDemo = () => {
	const data = {
		labels: ["Red", "Blue", "Yellow"],
		datasets: [
			{
				label: "Pie Chart",
				data: [300, 50, 100],
				backgroundColor: [
					"rgb(255, 99, 132)",
					"rgb(54, 162, 235)",
					"rgb(255, 205, 86)",
				],
				hoverOffset: 4,
			},
		],
	};
	return (
		<>
			<h1>PieChartDemo</h1>
			<div className="pie-chart">
				<Pie data={data} />
			</div>
		</>
	);
};

export default PieChartDemo;
