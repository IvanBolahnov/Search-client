import "./list.css"

import Card from "../card/card"

import { useSelector } from "react-redux"

function List() {
	const { currentBooks } = useSelector((state) => state.books)
	const { isEditWindowOpened } = useSelector((state) => state.interface)
	return (
		<div className="list" inert={isEditWindowOpened ? "" : undefined}>
			{currentBooks.map((book) => (
				<Card book={book} key={book.id}></Card>
			))}
		</div>
	)
}

export default List
