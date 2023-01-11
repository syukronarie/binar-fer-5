import ChartDemo from "./ChartDemo";
import PieChartDemo from "./PieChartDemo";
import "./App.css";
import BarChartDemo from "./BarChartDemo";

export default function App(props) {
	return (
		<>
			<h1>Test Chart</h1>
			{/* <ChartDemo /> */}
			{/* <PieChartDemo /> */}
			<BarChartDemo />
		</>
	);
}
