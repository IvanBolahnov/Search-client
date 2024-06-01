import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
	books: [],
	currentBooks: [],
	isLoading: false,
	error: "",
}

export const booksSlice = createSlice({
	name: "books",
	initialState,
	reducers: {
		booksFetching: (state) => {
			state.isLoading = true
		},
		booksFetchingSuccess: (state, action) => {
			state.isLoading = false
			state.error = ""
			state.books = action.payload
			state.currentBooks = action.payload
		},
		booksFetchingError: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
		booksDelete: (state) => {
			state.isLoading = true
		},
		booksDeleteSuccess: (state, action) => {
			state.isLoading = false
			state.error = ""
			const books = current(state).books.filter(
				(book) => book.id != action.payload
			)
			state.books = books
			state.currentBooks = books
		},
		bookCreating: (state) => {
			state.isLoading = true
		},
		bookCreatingSuccess: (state, action) => {
			state.isLoading = false
			state.error = ""
			state.books.push(action.payload)
			state.currentBooks.push(action.payload)
		},
		bookUpdating: (state) => {
			state.isLoading = true
		},
		bookUpdatingSuccess: (state, action) => {
			state.isLoading = false
			state.error = ""
			state.currentBooks[
				state.currentBooks.findIndex((el) => el.id === action.payload.id)
			] = action.payload
			state.books[state.books.findIndex((el) => el.id === action.payload.id)] =
				action.payload
		},
		bookFilter: (state, action) => {
			state.currentBooks = state.books.filter((book) => {
				const isName = book.name
					.toLowerCase()
					.includes(action.payload.name.toLowerCase())
				const isAuthor = book.author
					.toLowerCase()
					.includes(action.payload.author.toLowerCase())
				const isYear = book.year
					.toLowerCase()
					.includes(action.payload.year.toLowerCase())
				const isTag = book.tag
					.toLowerCase()
					.includes(action.payload.tag.toLowerCase())

				if (isName && isAuthor && isYear && isTag) {
					return true
				}
			})
		},
		setCurrentBooks: (state, action) => {
			state.currentBooks = action.payload
		},
	},
})

export default booksSlice.reducer
