import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FolderData {
	id: number;
	name: string;
	links: string[];
}

const initialState = {
	folders: [
		{
			id: 0,
			name: "Black Desert",
			links: ["https://www.blackstar.vip/", "https://garmoth.com/"],
		},
		{
			id: 1,
			name: "Folder 2",
			links: ["Link 1", "Link 2"],
		},
	],
};

export const folderSlice = createSlice({
	name: "folderSlice",
	initialState,
	reducers: {
		addFolder: (state, action: PayloadAction<FolderData>) => {
			state.folders = [...state.folders, action.payload];
		},
		addLink: (state, action: PayloadAction<{id: number, link: string}>) => {
			state.folders[action.payload.id].links.push(action.payload.link);
		},
	},
});

export const { addFolder, addLink } = folderSlice.actions;

export default folderSlice.reducer;
