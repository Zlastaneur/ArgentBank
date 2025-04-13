import { useSelector } from "react-redux"
import "../App.scss"
import "./footer.scss"

function Header() {
	const firstname = useSelector((state) => state.user.firstname)

	return (
		<>
			<footer className="footer">
				<p className="footer-text">Copyright 2020 Argent Bank</p>
			</footer>
		</>
	)
}

export default Header
