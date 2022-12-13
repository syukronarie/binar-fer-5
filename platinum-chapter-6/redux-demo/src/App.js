import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import SetupRouter from "./routes";

function App() {
	return (
		<Provider store={store}>
			<SetupRouter />
		</Provider>
	);
}

export default App;
