import { useSelector } from "react-redux"
import "../App.scss"
import "./header.scss"
import logo from "/img/argentBankLogo.png"
import { FaCircleUser } from "react-icons/fa6"
import { GoSignOut } from "react-icons/go"
import { Link } from "react-router"

function Header() {
	const firstName = useSelector((state) => state.user.firstName)

	return (
		<>
			<nav className="main-nav">
				<Link to="/" className="main-nav-logo">
					<img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />

					<h1 className="sr-only">Argent Bank</h1>
				</Link>

				{firstName ? (
					<div>
						<Link to="/user" className="main-nav-item">
							<FaCircleUser className="fa fa-user-circle" />
							{firstName}
						</Link>
						<Link to="/login" className="main-nav-item">
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
