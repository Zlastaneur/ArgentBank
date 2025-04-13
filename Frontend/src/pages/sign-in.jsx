import { useDispatch } from "react-redux"
import "../App.scss"
import "./sign-in.scss"
import { initInfo } from "../features/userSlice"
import { useState } from "react"

function SignIn() {
	const dispatch = useDispatch()
	const [formData, setFormData] = useState({ username: "", password: "" })

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(initInfo({ name: "", firstname: formData.username, token: "" }))
	}
	const fieldHandler = (e) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	return (
		<>
			<main className="main bg-dark">
				<section className="sign-in-content">
					<i className="fa fa-user-circle sign-in-icon"></i>
					<h1>Sign In</h1>
					<form onSubmit={submitHandler}>
						<div className="input-wrapper">
							<label htmlFor="username">Username</label>
							<input name="username" type="text" id="username" value={formData.username} onChange={fieldHandler} />
						</div>
						<div className="input-wrapper">
							<label htmlFor="password">Password</label>
							<input name="password" type="password" id="password" value={formData.password} onChange={fieldHandler} />
						</div>
						<div className="input-remember">
							<input type="checkbox" id="remember-me" />
							<label htmlFor="remember-me">Remember me</label>
						</div>
						<button className="sign-in-button">Sign In</button>
					</form>
				</section>
			</main>
		</>
	)
}

export default SignIn
