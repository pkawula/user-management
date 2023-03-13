import { User } from "@/types/api";
import { API_USERS } from "@/utils/constants/api-routes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
	reducerPath: "users",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_BASE_API_ROUTE + API_USERS
	}),
	tagTypes: ["Users"],
	endpoints: (builder) => ({
		getUsers: builder.query<User[], void>({
			query: () => "",
			providesTags: (result) => {
				if (result) {
					return [
						...result.map(
							(user) =>
								({
									type: "Users",
									id: user.id
								} as const)
						),
						{ type: "Users", id: "LIST" }
					];
				}

				return [{ type: "Users", id: "LIST" }];
			}
		}),
		deleteUser: builder.mutation<User, string>({
			query: (id) => ({
				url: `/${id}`,
				method: "DELETE"
			}),
			invalidatesTags: (_r, _e, id) => [{ type: "Users", id }]
		}),
		addUser: builder.mutation<User, Omit<User, "id">>({
			query: (user) => ({
				url: ``,
				method: "POST",
				body: user
			}),
			invalidatesTags: () => [{ type: "Users", id: "LIST" }]
		}),
		updateUser: builder.mutation<User, User>({
			query: ({ id, ...user }) => ({
				url: `/${id}`,
				method: "PUT",
				body: user
			}),
			invalidatesTags: (_r, _e, { id }) => [{ type: "Users", id }]
		}),
		getUser: builder.query<User, string>({
			query: (id) => ({
				url: `/${id}`,
				method: "GET"
			}),
			providesTags: (_r, _e, id) => [{ type: "Users", id }]
		})
	})
});

export const {
	useGetUsersQuery,
	useDeleteUserMutation,
	useAddUserMutation,
	useUpdateUserMutation,
	useGetUserQuery,
	util: { updateQueryData }
} = usersApi;

export const sortData = (dir: "asc" | "desc" | null) =>
	updateQueryData("getUsers", undefined, (users) => {
		switch (dir) {
			case "asc":
				return users.sort((a, b) => a.name.localeCompare(b.name));
			case "desc":
				return users.sort((a, b) => b.name.localeCompare(a.name));
			default:
				return users;
		}
	});
