import "./App.css";
import Count from "./components/Count";
import { CountContext, useCount } from "./contexts/count-contexts";

function App() {
	const { state } = useCount();

	return (
		<div className="App">
			<h1>Count App</h1>
			<h2>{state.count}</h2>
			<Count />

			<CountContext.Consumer>
				{(value) => <p>{value.state.count}</p>}
			</CountContext.Consumer>
		</div>
	);
}

export default App;
