import Folder from "../components/Folder";
import Header from "../components/Header";

const MainPage = () => {
	let userData = {
		folders: [
			{
				id: 0,
				name: "Folder 1",
				links: ["Link 1", "Link 2", "Link 3"],
			},
			{
				id: 1,
				name: "Folder 2",
				links: ["Link 1", "Link 2"],
			},
		],
	};

	return (
		<div className="h-screen bg-gradient-to-b from-quaternary-500 to-primary-600">
			<Header />

			{userData.folders.map(function (folder, index) {
				return <Folder key={index} {...folder} />;
			})}

			{/* <Folder {...userData.folders[0]} /> */}
		</div>
	);
};

export default MainPage;
