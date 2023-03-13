import { User } from "@/types/api";
import { API_USERS } from "@/utils/constants/api-routes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
	reducerPath: "users",
	baseQuery: fetchBaseQuery({
		baseUrl: API_USERS
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
		addUser: builder.mutation<User, User>({
			query: (user) => ({
				url: ``,
				method: "POST",
				body: user
			}),
			invalidatesTags: () => [{ type: "Users", id: "LIST" }]
		}),
		updateUser: builder.mutation<User, User>({
			query: (id) => ({
				url: `/${id}`,
				method: "PUT"
			}),
			invalidatesTags: (_r, _e, { id }) => [{ type: "Users", id }]
		}),
		getUser: builder.mutation<User, string>({
			query: (id) => ({
				url: `/${id}`,
				method: "GET"
			}),
			invalidatesTags: (_r, _e, id) => [{ type: "Users", id }]
		})
	})
});

export const {
	useGetUsersQuery,
	useDeleteUserMutation,
	useAddUserMutation,
	useUpdateUserMutation,
	useGetUserMutation,
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
