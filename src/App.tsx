import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";

const App = () => {
	return (
		<Routes>
			<Route path="*" element={<NotFoundPage />} />
			<Route path="/" element={<LandingPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/profile" element={<ProfilePage />} />
			<Route path="/main" element={<MainPage />} />
		</Routes>
	);
};

export default App;
