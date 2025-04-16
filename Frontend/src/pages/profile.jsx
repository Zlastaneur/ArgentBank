import "../App.scss"
import "./profile.scss"
import { useSelector } from "react-redux"
import { useState } from "react"
import EditProfile from "../components/editProfile"

function Profile() {
	const firstName = useSelector((state) => state.user.firstName)
	const lastName = useSelector((state) => state.user.lastName)
	const [isEditing, setIsEditing] = useState(false)

	const handleEditClick = () => {
		setIsEditing(true)
	}

	const handleCancelClick = () => {
		setIsEditing(false)
	}

	return (
		<>
			<main className="main bg-dark">
				<div className="header">
					{isEditing ? (
						<EditProfile onCancel={handleCancelClick} />
					) : (
						<>
							<h1>
								Welcome Back
								<br />
								{firstName} {lastName}
							</h1>
							<button className="edit-button" onClick={handleEditClick}>
								Edit Name
							</button>
						</>
					)}
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
