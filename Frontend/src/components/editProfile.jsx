import "../App.scss"
import "./editProfile.scss"
import { useSelector, useDispatch } from "react-redux"
import { updateUserInfo } from "../features/userSlice"
import { useState } from "react"

function EditProfile({ onCancel }) {
	const dispatch = useDispatch()

	const { firstName, lastName, token } = useSelector((state) => state.user)
	const [errorMessage, setErrorMessage] = useState("")
	const [data, setData] = useState({
		firstName: firstName || "",
		lastName: lastName || "",
	})

	const handleSubmit = async (e) => {
		e.preventDefault()
		setErrorMessage("")
		const updatedInfo = { firstName: data.firstName, lastName: data.lastName }

		try {
			const response = await fetch("http://localhost:3001/api/v1/user/profile", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(updatedInfo),
			})

			if (!response.ok) {
				console.error("Error: ", response.status === 400 ? "Invalid Fields" : "Internal Server Error")
				setErrorMessage("Unknown Error")
				return
			}

			dispatch(updateUserInfo(updatedInfo))
			onCancel()
		} catch (error) {
			console.error("Error :", error.message)
		}
	}

	const fieldHandler = (e) => {
		const { name, value } = e.target
		setData({ ...data, [name]: value })
	}

	return (
		<>
			<h1>Welcome Back</h1>
			<form onSubmit={handleSubmit} className="edit-profile-form">
				<input type="text" name="firstName" value={data.firstName} onChange={fieldHandler} placeholder={firstName} />
				<input type="text" name="lastName" value={data.lastName} onChange={fieldHandler} placeholder={lastName} />
				{errorMessage && <p className="errorMessage">{errorMessage}</p>}
				<div className="edit-profile-buttons">
					<button type="submit">Save</button>
					<button type="button" onClick={onCancel}>
						Cancel
					</button>
				</div>
			</form>
		</>
	)
}

export default EditProfile
