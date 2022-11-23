import { useState } from "react";
import { addLink } from "../redux/slices/folderSlice";
import { useAppDispatch } from "../redux/store";

interface FolderData {
	id: number;
	name: string;
	links: string[];
}

const Folder = ({ id, name, links }: FolderData) => {
	const [link, setLink] = useState("");
	const dispatch = useAppDispatch();

	const handleSubmit = (event: any) => {
		event.preventDefault();
		dispatch(addLink({ id: id, link: link }));
		setLink("");
	};

	return (
		<div className="mx-auto w-96 pt-10">
			<div className="bg-primary-600 w-20 rounded-t-2xl text-tertiary-600">
				<button className="animate-pulse ml-3.5">SHARE</button>
			</div>

			<div className="shadow-2xl shadow-primary-500 rounded-2xl">
				<div className="bg-primary-600 rounded-tr-2xl">
					<h1 className="text-center text-quaternary-500 text-3xl h-12 p-1 font-bold">{name}</h1>
				</div>

				{links.map(function (linkName, index) {
					return (
						<div key={index} className="bg-primary-500 p-2 text-center">
							<a href={linkName}>
								<h1 className="truncate mx-4 text-quaternary-500 text-2xl font-bold hover:text-quaternary-600">
									{linkName}
								</h1>
							</a>
						</div>
					);
				})}

				<form className="flex bg-quaternary-500 rounded-b-2xl" onSubmit={handleSubmit}>
					<input
						type="text"
						value={link}
						onChange={(event) => setLink(event.target.value)}
						className="flex-auto border-2 border-primary-500 bg-quaternary-500 rounded-lg p-2 m-2 outline-none text-xl font-bold"
					/>
					<button
						type="submit"
						className="flex-auto mr-2 mt-2 h-12 text-xl font-bold bg-primary-500 hover:bg-primary-700 text-quaternary-500 rounded-lg"
					>
						Add Link
					</button>
				</form>
			</div>
		</div>
	);
};

export default Folder;
