import "./App.css";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import SetupRouter from "./routes";
import { PersistGate } from "redux-persist/lib/integration/react";

function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<SetupRouter />
			</PersistGate>
		</Provider>
	);
}

export default App;
