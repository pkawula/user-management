import { getUsers } from "@/api/users";
import { UsersSlice } from "@/types/store";
import { RootState } from "@/utils/store";
import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: UsersSlice = {
	originalData: [],
	data: [],
	error: null,
	isFetching: false,
	sort: null
};

export const getUsersThunk = createAsyncThunk("users/getUsers", async (undefined, { signal }) => {
	const data = await getUsers({ signal });

	return data;
});

export const usersSort = createAction<UsersSlice["sort"]>("users/sort");

const sortDataHelper = (data: UsersSlice["data"], sort: UsersSlice["sort"]) => {
	if (!sort) return data;

	return [...data].sort((a, b) => {
		if (sort!.order === "asc") {
			return a[sort!.by].localeCompare(b[sort!.by]);
		}

		return b[sort!.by].localeCompare(a[sort!.by]);
	});
};

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getUsersThunk.pending, (state) => {
			state.isFetching = true;
			state.error = null;
		})
			.addCase(getUsersThunk.fulfilled, (state, action) => {
				state.isFetching = false;
				state.originalData = action.payload;
				state.data = sortDataHelper(action.payload, state.sort);
			})
			.addCase(getUsersThunk.rejected, (state, action) => {
				state.isFetching = false;
				state.error = action.payload || null;
			})
			.addCase(usersSort, (state, action) => {
				state.sort = action.payload;

				console.log(action.payload);

				state.data = sortDataHelper(state.originalData, action.payload);
			});
	}
});
