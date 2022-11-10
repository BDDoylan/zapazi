import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<div>
			<h1>Landing Page</h1>
			<Link to="/login">Login</Link>
			<Link to="/register">Register</Link>
			<Link to="/profile">Profile</Link>
			<Link to="/main">Main</Link>
		</div>
	);
};

export default LandingPage;
