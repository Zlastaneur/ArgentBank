import { useDispatch, useSelector } from "react-redux"
import "../App.scss"
import "./login.scss"
import { setUserInfo, setLoginStatus, toggleRememberEmail } from "../features/userSlice"
import { useState, useEffect } from "react"
import { FaCircleUser } from "react-icons/fa6"
import { useNavigate } from "react-router"

function Login() {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const rememberEmail = useSelector((state) => state.user.rememberEmail)
	const savedEmail = useSelector((state) => state.user.savedEmail)

	const [formData, setFormData] = useState({
		email: rememberEmail ? savedEmail : "",
		password: "",
	})
	const [errorMessage, setErrorMessage] = useState("")
	const [rememberCheckbox, setRememberCheckbox] = useState(rememberEmail)

	useEffect(() => {
		if (rememberEmail) {
			setFormData((prevFormData) => ({
				...prevFormData,
				email: savedEmail,
			}))
		}
	}, [rememberEmail, savedEmail])

	const submitHandler = async (e) => {
		e.preventDefault()
		setErrorMessage("")
		let loginData

		if (!formData.email || !formData.password) {
			setErrorMessage("Email and password are required")
			return
		}

		try {
			// Try to connect
			const loginResponse = await fetch("http://localhost:3001/api/v1/user/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			})

			if (!loginResponse.ok) {
				loginResponse.status === 400 ? setErrorMessage("Incorrect credentials") : setErrorMessage("An error occurred")
				return
			}

			loginData = await loginResponse.json()
		} catch (error) {
			console.error("Error during login:", error.message)
		}

		if (loginData) {
			try {
				// Try to get the user profile
				const profileResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
					method: "POST",
					headers: {
						Authorization: `Bearer ${loginData.body.token}`,
					},
				})

				if (!profileResponse.ok) {
					throw new Error("Error while fetching user profile")
				}

				const userData = await profileResponse.json()

				dispatch(
					setUserInfo({
						lastName: userData.body.lastName,
						firstName: userData.body.firstName,
						token: loginData.body.token,
					})
				),
					dispatch(
						setLoginStatus({
							isLoggedIn: true,
						})
					)

				if (rememberCheckbox) {
					dispatch(
						toggleRememberEmail({
							rememberEmail: true,
							email: formData.email, // Store the email if "remember me" is checked
						})
					)
				} else {
					dispatch(
						toggleRememberEmail({
							rememberEmail: false,
							email: "",
						})
					)
				}

				navigate(`/profile`)
			} catch (error) {
				console.error("Error during profile retrieval:", error.message)
			}
		}
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
							<input
								name="email"
								type="text"
								id="email"
								value={rememberEmail ? savedEmail : formData.email} // Show stored email or local state
								onChange={fieldHandler}
							/>
						</div>
						<div className="input-wrapper">
							<label htmlFor="password">Password</label>
							<input name="password" type="password" id="password" value={formData.password} onChange={fieldHandler} />
						</div>
						{errorMessage && <p className="errorMessage">{errorMessage}</p>}
						<div className="input-remember">
							<input
								type="checkbox"
								id="remember-me"
								checked={rememberCheckbox}
								onChange={() => setRememberCheckbox(!rememberCheckbox)}
							/>
							<label htmlFor="remember-me">Remember me</label>
						</div>
						<button className="sign-in-button">Sign In</button>
					</form>
				</section>
			</main>
		</>
	)
}

export default Login
