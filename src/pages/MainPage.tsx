import Folder from "../components/Folder";
import Header from "../components/Header";
import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const MainPage = () => {
	const folder = useSelector((state: RootState) => state.folderSlice.folder);

	return (
		<div className="h-screen bg-gradient-to-b from-quaternary-500 to-primary-600">
			<Header />

			{folder.map(function (folder, index) {
				return <Folder key={index} {...folder} />;
			})}
		</div>
	);
};

export default MainPage;
