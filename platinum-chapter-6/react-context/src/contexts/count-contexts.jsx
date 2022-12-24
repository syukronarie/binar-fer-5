import React from "react";

export const CountContext = React.createContext();

function countReducers(state, action) {
	switch (action.type) {
		case "increment":
			return { count: (state.count += 1) };
		case "decrement":
			return { count: (state.count -= 1) };
		case "incrementByPayload":
			return { count: (state.count += action.payload) };
		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
}

function CountProvider({ children }) {
	const [state, dispatch] = React.useReducer(countReducers, { count: 0 });

	const value = { state, dispatch };

	return (
		<CountContext.Provider value={value}>{children}</CountContext.Provider>
	);
}

function useCount() {
	const context = React.useContext(CountContext);
	if (context === undefined) {
		throw Error("useCount must be used within a CountProvider");
	}

	return context;
}

export { CountProvider, useCount };
