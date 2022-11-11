import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="flex p-1 bg-orange-400">
			<h1 className="flex-auto w-16">ZAPAZI</h1>
			<Link to="/login" className="mx-2">
				Login
			</Link>
			<Link to="/register" className="mx-2">
				Register
			</Link>
		</div>
	);
};

export default Header;
