import Folder from "../components/Folder";
import Header from "../components/Header";

const LandingPage = () => {
	return (
		<div className="h-screen bg-gradient-to-b from-quaternary-500 to-primary-600">
			<Header />
			<Folder />
		</div>
	);
};

export default LandingPage;
