import "../App.scss"
import "./header.scss"
import logo from "/img/argentBankLogo.png"
import { useSelector, useDispatch } from "react-redux"
import { FaCircleUser } from "react-icons/fa6"
import { GoSignOut } from "react-icons/go"
import { Link, useNavigate } from "react-router"
import { setLoginStatus } from "../features/userSlice"

function Header() {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { firstName, isLoggedIn } = useSelector((state) => state.user)

	const handleLogout = () => {
		dispatch(
			setLoginStatus({
				isLoggedIn: false,
			})
		)
		navigate(`/`)
	}

	return (
		<>
			<nav className="main-nav">
				<Link to="/" className="main-nav-logo">
					<img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
					<h1 className="sr-only">Argent Bank</h1>
				</Link>

				{isLoggedIn ? (
					<div>
						<Link to="/profile" className="main-nav-item">
							<FaCircleUser className="fa fa-user-circle" />
							{firstName}
						</Link>
						<Link to="/login" className="main-nav-item" onClick={handleLogout}>
							<GoSignOut className="fa fa-sign-out" />
							Sign Out
						</Link>
					</div>
				) : (
					<div>
						<Link to="/login" className="main-nav-item">
							<FaCircleUser className="fa fa-user-circle" />
							Sign In
						</Link>
					</div>
				)}
			</nav>
		</>
	)
}

export default Header
