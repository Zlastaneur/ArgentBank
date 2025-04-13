import "./App.scss"
import { BrowserRouter, Routes, Route } from "react-router"
import SignIn from "./pages/sign-in"
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./pages/home"
import User from "./pages/user"

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<SignIn />} />
				<Route path="/home" element={<Home />} />
				<Route path="/user" element={<User />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App
