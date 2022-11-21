import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserDataI {
	id: number;
	userId: string;
	displayName: string;
	email: string;
	createdAt: string;
	updatedAt: string;
}

export interface UserI {
	user: UserDataI | null;
}

const initialState: UserI = {
	user: null,
};

export const userSlice = createSlice({
	name: "userSlice",
	initialState,
	reducers: {
		updateUser: (state, action: PayloadAction<UserDataI>) => {
			state.user = {
				id: action.payload.id,
				userId: action.payload.userId,
				displayName: action.payload.displayName,
				email: action.payload.email,
				createdAt: action.payload.createdAt,
				updatedAt: action.payload.updatedAt,
			};
		},
	},
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
