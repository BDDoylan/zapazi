import { Routes, Route, Navigate } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import MainPage from "./pages/MainPage";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { getUser } from "./redux/slices/userSlice";
import Header from "./components/NavBar";

const App = () => {
	const user = useAppSelector((state) => state.userSlice.user);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getUser());
	}, [dispatch]);

	return (
		<div>
			<Header />
			<Routes>
				<Route path="*" element={<NotFoundPage />} />
				<Route path="/" element={<LandingPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/profile" element={user ? <ProfilePage /> : <Navigate to="/login" />} />
				<Route path="/main" element={user ? <MainPage /> : <Navigate to="/login" />} />
			</Routes>
		</div>
	);
};

export default App;
