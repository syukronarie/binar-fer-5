import ChartDemo from "./ChartDemo";
import PieChartDemo from "./PieChartDemo";
import "./App.css";
import BarChartDemo from "./BarChartDemo";
import Cookies from "js-cookie";

const expires = new Date();
expires.setSeconds(expires.getSeconds() + 10);

Cookies.set("hello", "world", { expires });

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
