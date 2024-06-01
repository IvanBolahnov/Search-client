import "./App.css"

import List from "./components/list/list"
import Add from "./components/add/add"
import Header from "./components/header/header"
import Search from "./components/search/search"
import Edit from "./components/edit/edit"
import { useEffect } from "react"

import { useDispatch } from "react-redux"

import { fetchAllBooks } from "./store/reducers/actionCreator"

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchAllBooks())
	}, [])
	return (
		<>
			<Header></Header>
			<Add></Add>
			<main>
				<Search></Search>
				<List></List>
			</main>
			<Edit></Edit>
		</>
	)
}

export default App
