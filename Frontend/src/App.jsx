import "./App.scss"
import { BrowserRouter, Routes, Route } from "react-router"
import Login from "./pages/login"
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./pages/home"
import Profile from "./pages/profile"
import NotFound from "./pages/notFound"

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App
