import { useSelector } from "react-redux"
import "../App.scss"
import "./header.scss"
import logo from "/img/argentBankLogo.png"

function Header() {
	const firstname = useSelector((state) => state.user.firstname)

	return (
		<>
			<nav className="main-nav">
				<a className="main-nav-logo" href="/home">
					<img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
					<h1 className="sr-only">Argent Bank</h1>
				</a>
				<div>
					<a className="main-nav-item" href="/">
						<i className="fa fa-user-circle"></i>
						Sign In
					</a>
				</div>
			</nav>
		</>
	)
}
/*			<header>
				<img src="" alt="" />
				<h1>Bonjour,{firstname}</h1>
			</header>
			
			<a className="main-nav-item" href="./user.html">
						<i className="fa fa-user-circle"></i>
						Tony
					</a>
*/
export default Header
