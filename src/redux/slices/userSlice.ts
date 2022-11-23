import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface UserDataI {
	id: number;
	userId: string;
	displayName: string;
	email: string;
	createdAt: string;
	updatedAt: string;
}

export interface UserI {
	isLoading: "idle" | "loading" | "succeeded" | "failed";
	user: UserDataI | null;
}

const initialState: UserI = {
	isLoading: "idle",
	user: null,
};

export const getUser = createAsyncThunk("user/getUser", async () => {
	try {
		const user = await axios.get("http://localhost:5000/auth/getUser", { withCredentials: true });
		return user.data;
	} catch (err) {
		console.log(err);
	}
});

export const userSlice = createSlice({
	name: "userSlice",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getUser.pending, (state) => {
			state.isLoading = "loading";
		});
		builder.addCase(getUser.fulfilled, (state, action: PayloadAction<UserDataI>) => {
			state.isLoading = "succeeded";

			if (action.payload) {
				state.user = {
					id: action.payload.id,
					userId: action.payload.userId,
					displayName: action.payload.displayName,
					email: action.payload.email,
					createdAt: action.payload.createdAt,
					updatedAt: action.payload.updatedAt,
				};
			} else {
				state.user = null;
			}
		});
		builder.addCase(getUser.rejected, (state) => {
			state.isLoading = "failed";
		});
	},
});

//export const {  } = userSlice.actions;

export default userSlice.reducer;
