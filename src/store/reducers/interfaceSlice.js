import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	isAddWindowOpened: false,
	isEditWindowOpened: false,
	editBook: {
		id: "",
		name: "",
		author: "",
		year: "",
		tag: ""
	}
}

export const interfaceSlice = createSlice({
	name: "books",
	initialState,
	reducers: {
		toggleAddWindow: (state) => {
			state.isAddWindowOpened = !state.isAddWindowOpened
		},
		openEditWindow: (state, action) => {
			state.isEditWindowOpened = true
			state.editBook = action.payload
		},
		closeEditWindow: (state) => {
			state.isEditWindowOpened = false
			state.editBook = {
				id: "",
				name: "",
				author: "",
				year: "",
				tag: ""
			}
		},
		editName: (state, action) => {
			state.editBook.name = action.payload
		},
		editAuthor: (state, action) => {
			state.editBook.author = action.payload
		},
		editYear: (state, action) => {
			state.editBook.year = action.payload
		},
		editTag: (state, action) => {
			state.editBook.tag = action.payload
		}
	}
})

export default interfaceSlice.reducer
