import { Routes, Route, Navigate } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import MainPage from "./pages/MainPage";
import { useEffect } from "react";
import { getUser } from "./services/auth";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { updateUser } from "./redux/slices/userSlice";

const App = () => {
	const user = useSelector((state: RootState) => state.userSlice.user);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			dispatch(updateUser(await getUser()));
		};

		fetchData();
	}, [dispatch]);

	return (
		<Routes>
			<Route path="*" element={<NotFoundPage />} />
			<Route path="/" element={<LandingPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/profile" element={user ? <ProfilePage /> : <Navigate to="/login" />} />
			<Route path="/main" element={user ? <MainPage /> : <Navigate to="/login" />} />
		</Routes>
	);
};

export default App;
