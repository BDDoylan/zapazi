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
		<div className="relative mx-auto w-96 pt-10">
			<div className="w-20 rounded-t-2xl bg-primary-600 text-tertiary-600">
				<button className="ml-3.5 animate-pulse">SHARE</button>
			</div>

			<div className="rounded-2xl shadow-2xl shadow-primary-500">
				<div className="rounded-tr-2xl bg-primary-600">
					<h1 className="h-12 p-1 text-center text-3xl font-bold text-quaternary-500">{name}</h1>
				</div>

				{links.map(function (linkName, index) {
					return (
						<div key={index} className="bg-primary-500 p-2 text-center">
							<a href={linkName}>
								<h1 className="mx-4 truncate text-2xl font-bold text-quaternary-500 hover:text-quaternary-600">
									{linkName}
								</h1>
							</a>
						</div>
					);
				})}

				<form className="flex rounded-b-2xl bg-quaternary-500" onSubmit={handleSubmit}>
					<input
						type="text"
						value={link}
						onChange={(event) => setLink(event.target.value)}
						className="m-2 flex-auto rounded-lg border-2 border-primary-500 bg-quaternary-500 p-2 text-xl font-bold outline-none"
					/>
					<button
						type="submit"
						className="mt-2 mr-2 h-12 flex-auto rounded-lg bg-primary-500 text-xl font-bold text-quaternary-500 hover:bg-primary-700"
					>
						Add Link
					</button>
				</form>
			</div>
		</div>
	);
};

export default Folder;
