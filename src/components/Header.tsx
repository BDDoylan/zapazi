import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="flex h-14 items-center bg-primary-500 font-bold shadow-primary-500 shadow-lg">
			<img src="zapazi-logo.png" alt="Zapazi Logo" className="ml-2 w-10"></img>
			<h1 className="flex-auto text-2xl mx-2 w-16 text-quaternary-500">ZAPAZI</h1>
			<Link to="/login" className="text-2xl px-2 text-quaternary-500 hover:bg-primary-600">
				Login
			</Link>
			<Link to="/register" className="text-2xl px-2 mr-2 text-quaternary-500 hover:bg-primary-600">
				Register
			</Link>
		</div>
	);
};

export default Header;
