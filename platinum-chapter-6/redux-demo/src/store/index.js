import { configureStore } from "@reduxjs/toolkit";

import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

import persistStore from "redux-persist/lib/persistStore";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";
import rootReducer from "./features";

const persistConfig = {
	key: "root",
	whitelist: ["cart", "products"],
	blacklist: [],
	storage,
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: pReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		});
	},
});

const persistor = persistStore(store);

export { persistor };
export default store;
