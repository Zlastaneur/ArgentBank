import { useDispatch } from "react-redux"
import "../App.scss"
import "./profile.scss"
import { initInfo } from "../features/userSlice"
import { useState } from "react"

function Profile() {
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
				<div className="header">
					<h1>
						Welcome back
						<br />
						Tony Jarvis!
					</h1>
					<button className="edit-button">Edit Name</button>
				</div>
				<h2 className="sr-only">Accounts</h2>
				<section className="account">
					<div className="account-content-wrapper">
						<h3 className="account-title">Argent Bank Checking (x8349)</h3>
						<p className="account-amount">$2,082.79</p>
						<p className="account-amount-description">Available Balance</p>
					</div>
					<div className="account-content-wrapper cta">
						<button className="transaction-button">View transactions</button>
					</div>
				</section>
				<section className="account">
					<div className="account-content-wrapper">
						<h3 className="account-title">Argent Bank Savings (x6712)</h3>
						<p className="account-amount">$10,928.42</p>
						<p className="account-amount-description">Available Balance</p>
					</div>
					<div className="account-content-wrapper cta">
						<button className="transaction-button">View transactions</button>
					</div>
				</section>
				<section className="account">
					<div className="account-content-wrapper">
						<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
						<p className="account-amount">$184.30</p>
						<p className="account-amount-description">Current Balance</p>
					</div>
					<div className="account-content-wrapper cta">
						<button className="transaction-button">View transactions</button>
					</div>
				</section>
			</main>
		</>
	)
}

export default Profile
