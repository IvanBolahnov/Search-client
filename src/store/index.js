import { combineReducers, configureStore } from "@reduxjs/toolkit"
import booksReducer from "./reducers/booksSlice"
import interfaceReducer from "./reducers/interfaceSlice"

const rootReducer = combineReducers({
	books: booksReducer,
	interface: interfaceReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	})
}
