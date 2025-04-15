import { Link } from "react-router"
import "./notFound.scss"

function NotFound() {
	return (
		<div className="error404">
			<h1>404</h1>
			<h2>Oops! The page you are looking for does not exist.</h2>
			<Link to={"/"}>
				<p>Go back to the homepage</p>
			</Link>
		</div>
	)
}

export default NotFound
