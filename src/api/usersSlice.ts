import { IUser } from "@/types/api";
import { API_USERS } from "@/utils/constants/api-routes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const usersSlice = createApi({
	reducerPath: "users",
	baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_API_ROUTE || "", method: "GET" }),
	endpoints: (builder) => ({
		getUsers: builder.query<IUser[], void>({
			query: () => API_USERS
		})
	}),
	extractRehydrationInfo(action, { reducerPath }) {
		if (action.type === HYDRATE) {
			return action.payload[reducerPath];
		}
	}
});

export const { useGetUsersQuery } = usersSlice;
