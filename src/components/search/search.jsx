import { useEffect, useState } from "react"
import "./search.css"
import { useDispatch, useSelector } from "react-redux"
import { booksSlice } from "../../store/reducers/booksSlice"

const { bookFilter } = booksSlice.actions

function Search() {
	const dispatch = useDispatch()

	const { isEditWindowOpened } = useSelector((state) => state.interface)

	const [name, setName] = useState("")
	const [author, setAuthor] = useState("")
	const [year, setYear] = useState("")
	const [tag, setTag] = useState("")

	useEffect(() => {
		dispatch(bookFilter({ name, author, year, tag }))
	}, [name, author, year, tag])

	return (
		<div className="search" inert={isEditWindowOpened ? "" : undefined}>
			<form
				className="search__form"
				onSubmit={(e) => {
					e.preventDefault()
				}}
			>
				<label className="search__input search__name">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M5 17H9C10.6569 17 12 18.3431 12 20V10C12 7.17157 12 5.75736 11.1213 4.87868C10.2426 4 8.82843 4 6 4H5C4.05719 4 3.58579 4 3.29289 4.29289C3 4.58579 3 5.05719 3 6V15C3 15.9428 3 16.4142 3.29289 16.7071C3.58579 17 4.05719 17 5 17Z"
							stroke="white"
						/>
						<path
							d="M19 17H15C13.3431 17 12 18.3431 12 20V10C12 7.17157 12 5.75736 12.8787 4.87868C13.7574 4 15.1716 4 18 4H19C19.9428 4 20.4142 4 20.7071 4.29289C21 4.58579 21 5.05719 21 6V15C21 15.9428 21 16.4142 20.7071 16.7071C20.4142 17 19.9428 17 19 17Z"
							stroke="white"
						/>
					</svg>
					<input
						type="text"
						placeholder="Название"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<label className="search__input search__author">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M19.7274 20.4471C19.2716 19.1713 18.2672 18.0439 16.8701 17.2399C15.4729 16.4358 13.7611 16 12 16C10.2389 16 8.52706 16.4358 7.12991 17.2399C5.73276 18.0439 4.72839 19.1713 4.27259 20.4471"
							stroke="white"
							strokeLinecap="round"
						/>
						<circle cx="12" cy="8" r="4" stroke="white" strokeLinecap="round" />
					</svg>
					<input
						type="text"
						placeholder="Автор"
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
					/>
				</label>
				<label className="search__input search__year">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect x="3" y="6" width="18" height="15" rx="2" stroke="white" />
						<path
							d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10H3Z"
							fill="white"
						/>
						<path d="M7 3L7 6" stroke="white" strokeLinecap="round" />
						<path d="M17 3L17 6" stroke="white" strokeLinecap="round" />
						<rect x="7" y="12" width="4" height="2" rx="0.5" fill="white" />
						<rect x="7" y="16" width="4" height="2" rx="0.5" fill="white" />
						<rect x="13" y="12" width="4" height="2" rx="0.5" fill="white" />
						<rect x="13" y="16" width="4" height="2" rx="0.5" fill="white" />
					</svg>
					<input
						type="text"
						placeholder="Год"
						value={year}
						onChange={(e) => setYear(e.target.value)}
					/>
				</label>
				<label className="search__input search__tag">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9.46095 7.60198C10.1359 7.9557 11.1965 8.53153 12.1589 9.13874C12.6468 9.4466 13.1012 9.75734 13.4644 10.047C13.8411 10.3474 14.0717 10.5881 14.1651 10.7499C14.2586 10.9117 14.3517 11.2318 14.4235 11.7081C14.4927 12.1675 14.5346 12.7164 14.5573 13.2929C14.602 14.4299 14.5703 15.6363 14.5392 16.3978C13.8642 16.044 12.8036 15.4682 11.8412 14.861C11.3533 14.5531 10.8989 14.2424 10.5357 13.9527C10.1591 13.6524 9.92842 13.4117 9.835 13.2499C9.74159 13.0881 9.64846 12.768 9.57666 12.2916C9.50743 11.8322 9.4655 11.2833 9.44284 10.7069C9.39816 9.56982 9.42979 8.36339 9.46095 7.60198Z"
							stroke="white"
						/>
						<circle cx="12" cy="12" r="9" stroke="white" />
					</svg>
					<input
						type="text"
						placeholder="УИД"
						value={tag}
						onChange={(e) => setTag(e.target.value)}
					/>
				</label>
			</form>
		</div>
	)
}

export default Search
