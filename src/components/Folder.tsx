import { useState } from "react";
import { useDispatch } from "react-redux";
import { addLink } from "../redux/slices/folderSlice";

interface FolderData {
	id: number;
	name: string;
	links: string[];
}

const Folder = ({ id, name, links }: FolderData) => {
	const [link, setLink] = useState("");
	const dispatch = useDispatch();

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

			{/* <button onClick={() => dispatch(addFolder({ id: 3, name: "folder 3", links: ["link 1"] }))}>
				Add Folder
			</button> */}

			<br></br>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					dispatch(addLink({ id: id, link: link }));
				}}
			>
				<input type="text" onChange={(event) => setLink(event.target.value)} />
				<button type="submit">Add Link</button>
			</form>
		</div>
	);
};

export default Folder;
