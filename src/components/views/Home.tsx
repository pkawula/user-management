import { getUsersThunk, usersSort } from "@/store/slices/users-slice";
import { useAppDispatch, useAppSelector } from "@/utils/store";
import { useCallback, useEffect } from "react";

export function Home() {
	const { error, data, sort, isFetching } = useAppSelector(({ users }) => users);

	const dispatch = useAppDispatch();

	const handleSort = useCallback(
		() => dispatch(usersSort({ by: "username", order: sort?.order === "asc" ? "desc" : "asc" })),
		[sort, dispatch]
	);

	const clearSort = useCallback(() => dispatch(usersSort(null)), [dispatch]);

	useEffect(() => {
		const apiCall = dispatch(getUsersThunk());

		return () => {
			apiCall.abort();
		};
	}, [dispatch]);

	return (
		<div>
			<>
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
				{error && "Error"}
			</>
			<button onClick={handleSort}>Sort by username</button>
			<button onClick={clearSort}>Clear sort</button>
		</div>
	);
}
