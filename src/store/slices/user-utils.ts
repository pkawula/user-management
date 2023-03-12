import { User } from "@/types/api";
import { createAction, createSlice } from "@reduxjs/toolkit";

interface UserUtilsState {
	sortDir: null | "asc" | "desc";
	deleteUser: null | User;
}

const initialState: UserUtilsState = {
	sortDir: null,
	deleteUser: null
};

export const userDeleteModalAction = createAction<null | User>("userUtils/deleteUser");

export const userSortAction = createAction<null | "asc" | "desc">("userUtils/sort");

export const userUtilsSlice = createSlice({
	name: "userUtils",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(userDeleteModalAction, (state, action) => {
			state.deleteUser = action.payload;
		});
		builder.addCase(userSortAction, (state, action) => {
			state.sortDir = action.payload;
		});
	}
});
