import axios from "axios"
import { booksSlice } from "./booksSlice"
import { ApiUrl } from "../../utils/consts"

const {
	booksFetching,
	booksFetchingSuccess,
	booksFetchingError,
	booksDeleteSuccess,
	booksDelete,
	bookCreating,
	bookCreatingSuccess,
	bookUpdating,
	bookUpdatingSuccess,
} = booksSlice.actions

export const fetchAllBooks = () => {
	return async (dispatch) => {
		try {
			dispatch(booksFetching())
			const response = await axios.get(`http://${ApiUrl}:5000/api/books/`)
			dispatch(booksFetchingSuccess(response.data))
		} catch (error) {
			dispatch(booksFetchingError(error.message))
		}
	}
}

export const deleteBook = (id) => {
	return async (dispatch) => {
		try {
			dispatch(booksDelete())
			await axios.delete(`http://${ApiUrl}:5000/api/books/${id}`)
			dispatch(booksDeleteSuccess(id))
		} catch (error) {
			dispatch(booksFetchingError(error.message))
		}
	}
}

export const createBook = ({ tag, name, year, author }) => {
	return async (dispatch) => {
		try {
			dispatch(bookCreating())
			const response = await axios.post(`http://${ApiUrl}:5000/api/books/`, {
				tag,
				name,
				year,
				author,
			})
			dispatch(bookCreatingSuccess(response.data))
		} catch (error) {
			dispatch(booksFetchingError(error.message))
		}
	}
}

export const updateBook = ({ id, tag, name, year, author }) => {
	return async (dispatch) => {
		try {
			dispatch(bookUpdating())
			const response = await axios.patch(
				`http://${ApiUrl}:5000/api/books/${id}`,
				{
					tag,
					name,
					year,
					author,
				}
			)
			dispatch(bookUpdatingSuccess(response.data[1][0]))
		} catch (error) {
			dispatch(booksFetchingError(error.message))
		}
	}
}
