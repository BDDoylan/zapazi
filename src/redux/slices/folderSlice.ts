import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FolderData {
	id: number;
	name: string;
	links: string[];
}

const initialState = {
	folder: [
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

export const folderSlice = createSlice({
	name: "folderSlice",
	initialState,
	reducers: {
		addFolder: (state, action: PayloadAction<FolderData>) => {
			state.folder = [...state.folder, action.payload];
		},
		addLink: (state, action: PayloadAction<{id: number, link: string}>) => {
			state.folder[action.payload.id].links.push(action.payload.link);
		},
	},
});

export const { addFolder, addLink } = folderSlice.actions;

export default folderSlice.reducer;
