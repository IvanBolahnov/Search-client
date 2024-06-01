import "./header.css"

import { interfaceSlice } from "../../store/reducers/interfaceSlice"
import { useDispatch, useSelector } from "react-redux"

const { toggleAddWindow } = interfaceSlice.actions

function Header() {
	const dispatch = useDispatch()

	const { isAddWindowOpened, isEditWindowOpened } = useSelector(
		(state) => state.interface
	)
	const { isLoading, error } = useSelector((state) => state.books)
	return (
		<header inert={isEditWindowOpened ? "" : undefined}>
			<div className="header__container">
				<div className="header__logo">
					<button>Библиотека</button>
					<div
						className={`header__spiner${
							isLoading ? " header__spiner--loading" : ""
						}`}
					></div>
					<div className="header__error">{error}</div>
				</div>
				<button
					className={`header__add-button${
						isAddWindowOpened ? " header__add-button--open" : ""
					}`}
					onClick={() => {
						dispatch(toggleAddWindow())
					}}
				>
					<svg
						width="40"
						height="40"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 8L12 16"
							stroke="white"
							strokeWidth="1.3"
							strokeLinecap="round"
						/>
						<path
							d="M16 12L8 12"
							stroke="white"
							strokeWidth="1.3"
							strokeLinecap="round"
						/>
					</svg>
				</button>
			</div>
		</header>
	)
}

export default Header
