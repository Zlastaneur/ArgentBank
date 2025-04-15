import { useDispatch } from "react-redux"
import "../App.scss"
import "./sign-in.scss"
import { initInfo } from "../features/userSlice"
import { useState } from "react"
import { FaCircleUser } from "react-icons/fa6"

function SignIn() {
	const dispatch = useDispatch()
	const [formData, setFormData] = useState({ email: "", password: "" })
	const [errorMessage, setErrorMessage] = useState("")

	const submitHandler = async (e) => {
		e.preventDefault()
		setErrorMessage("")

		const loginResponse = await fetch("http://localhost:3001/api/v1/user/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})

		let loginData

		if (loginResponse.status === 200) {
			loginData = await loginResponse.json()
		} else if (loginResponse.status === 400) {
			setErrorMessage("Identifiants incorrect")
			return
		} else {
			setErrorMessage("Une erreur est survenue")
			return
		}

		const profileResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${loginData.body.token}`,
			},
		})
		const userData = await profileResponse.json()
		dispatch(initInfo({ lastName: userData.body.lastName, firstName: userData.body.firstName, token: loginData.body.token }))
	}

	const fieldHandler = (e) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	return (
		<>
			<main className="main bg-dark">
				<section className="sign-in-content">
					<FaCircleUser className="fa fa-user-circle" />
					<h1>Sign In</h1>
					<form onSubmit={submitHandler}>
						<div className="input-wrapper">
							<label htmlFor="email">Email</label>
							<input name="email" type="text" id="email" value={formData.email} onChange={fieldHandler} />
						</div>
						<div className="input-wrapper">
							<label htmlFor="password">Password</label>
							<input name="password" type="password" id="password" value={formData.password} onChange={fieldHandler} />
						</div>
						<div className="input-remember">
							<input type="checkbox" id="remember-me" />
							<label htmlFor="remember-me">Remember me</label>
						</div>
						{errorMessage && <p className="errorMessage">{errorMessage}</p>}
						<button className="sign-in-button">Sign In</button>
					</form>
				</section>
			</main>
		</>
	)
}

export default SignIn
