import { useAppSelector } from "../redux/store";
import { Link } from "react-router-dom";

const NavBar = () => {
	const user = useAppSelector((state) => state.userSlice.user);

	return (
		<div className="fixed z-50 flex h-14 w-full items-center bg-primary-500 font-bold shadow-lg shadow-primary-500">
			<Link to="/" className="flex items-center">
				<img src="zapazi-logo.png" alt="Zapazi Logo" className="ml-2 w-10"></img>
			</Link>
			<h1 className="mx-2 w-16 flex-auto text-2xl text-quaternary-500">ZAPAZI</h1>
			{user ? (
				<Link to="/main" className="mr-2 px-2 text-2xl text-quaternary-500 hover:bg-primary-600">
					Folders
				</Link>
			) : (
				<Link to="/login" className="mr-2 px-2 text-2xl text-quaternary-500 hover:bg-primary-600">
					Login
				</Link>
			)}
			<Link to="/profile" className="mr-2 px-2 text-2xl text-quaternary-500 hover:bg-primary-600">
				Profile
			</Link>
		</div>
	);
};

export default NavBar;
