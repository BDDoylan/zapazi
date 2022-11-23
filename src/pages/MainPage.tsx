import Folder from "../components/Folder";
import { useAppSelector } from "../redux/store";

const MainPage = () => {
	const folders = useAppSelector((state) => state.folderSlice.folders);

	return (
		<div className="h-screen bg-gradient-to-b from-quaternary-500 to-primary-600 pt-14">
			{folders.map(function (folder, index) {
				return <Folder key={index} {...folder} />;
			})}
		</div>
	);
};

export default MainPage;
