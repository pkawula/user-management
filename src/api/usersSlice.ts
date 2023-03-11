import { IUser } from "@/types/api";
import { API_USERS } from "@/utils/constants/api-routes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersSlice = createApi({
	reducerPath: "users",
	baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_API_ROUTE || "", method: "GET" }),
	endpoints: (builder) => ({
		getUsers: builder.query<IUser[], void>({
			query: () => API_USERS
		})
	})
});

export const { useGetUsersQuery } = usersSlice;
