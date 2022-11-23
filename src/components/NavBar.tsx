import { useAppSelector } from "../redux/store";
import { Link } from "react-router-dom";

const NavBar = () => {
	const user = useAppSelector((state) => state.userSlice.user);

	return (
		<div className="fixed z-50 flex w-full h-14 items-center bg-primary-500 font-bold shadow-primary-500 shadow-lg">
			<Link to="/" className="flex items-center">
				<img src="zapazi-logo.png" alt="Zapazi Logo" className="ml-2 w-10"></img>
			</Link>
			<h1 className="flex-auto text-2xl mx-2 w-16 text-quaternary-500">ZAPAZI</h1>
			{user ? (
				<Link to="/main" className="text-2xl px-2 mr-2 text-quaternary-500 hover:bg-primary-600">
					Folders
				</Link>
			) : (
				<Link to="/login" className="text-2xl px-2 mr-2 text-quaternary-500 hover:bg-primary-600">
					Login
				</Link>
			)}
			<Link to="/profile" className="text-2xl px-2 mr-2 text-quaternary-500 hover:bg-primary-600">
				Profile
			</Link>
		</div>
	);
};

export default NavBar;
