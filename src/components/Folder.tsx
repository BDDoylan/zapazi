//import { useState } from "react";

interface FolderProps {
	id: number;
	name: string;
	links: string[];
}

const Folder = ({ id, name, links }: FolderProps) => {
	//const [linkData, setLinkData] = useState(["1", "2", "3", "4"]);

	return (
		<div className="mx-auto w-96 mt-10 shadow-2xl shadow-primary-500">
			<div className="bg-primary-600 rounded-t-2xl">
				<h1 className="text-center text-quaternary-500 text-2xl">{name}</h1>
			</div>

			{links.map(function (linkName, index) {
				return (
					<div key={index} className="bg-primary-500">
						<h1 className="text-center text-quaternary-500 text-2xl">{linkName}</h1>
					</div>
				);
			})}

			<input type="text" />
		</div>
	);
};

export default Folder;
