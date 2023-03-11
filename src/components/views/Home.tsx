import { useGetUsersQuery } from "@/api/usersSlice";

export function Home() {
	const { isFetching, data, isError } = useGetUsersQuery();

	return (
		<div>
			{isFetching && "Loading..."}
			{!isFetching
				? data
					? data.map((user) => (
							<div key={user.id}>
								<h1>{user.name}</h1>
								<h1>{user.username}</h1>
								<p>{user.email}</p>
								<p>{user.city}</p>
							</div>
					  ))
					: "No data"
				: null}
			{isError && "Error"}
		</div>
	);
}
