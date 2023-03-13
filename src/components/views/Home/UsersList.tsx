import { sortData, useGetUsersQuery } from "@/api/users-api";
import { Alert } from "@/components/shared/Alert";
import { Button } from "@/components/shared/Button";
import { Loading } from "@/components/shared/Loading";
import { Table, TableTH } from "@/components/shared/Table";
import { userSortAction } from "@/store/slices/user-utils";
import { useAppDispatch, useAppSelector } from "@/utils/store";
import Link from "next/link";
import { useCallback } from "react";
import styled from "styled-components";
import User from "./User";
import UserDeleteModal from "./UserDeleteModal";

const UsersWrapper = styled.div`
	padding: 10px;
	width: 100%;
	overflow-x: auto;
`;

const SortButton = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;

	span {
		margin-left: 5px;
	}

	&:hover {
		opacity: 0.8;
	}
`;

export default function UsersList() {
	const { sortDir, deleteUser } = useAppSelector(({ userUtils }) => userUtils);
	const { isError, isFetching, data } = useGetUsersQuery();

	const dispatch = useAppDispatch();

	const handleSort = useCallback(() => {
		const dir = sortDir === "asc" ? "desc" : "asc";

		dispatch(userSortAction(dir));
		dispatch(sortData(dir));
	}, [dispatch, sortDir]);

	return (
		<UsersWrapper>
			{isFetching ? (
				<Loading />
			) : (
				<>
					{(data || []).length > 0 && (
						<Table>
							<thead>
								<tr>
									<TableTH>Id</TableTH>
									<TableTH>Name</TableTH>
									<TableTH>
										<SortButton
											onClick={
												handleSort
											}
										>
											Username
											{sortDir && (
												<span
													style={{
														display: "inline-block",
														transform: `rotate(${
															sortDir ===
															"asc"
																? "-90deg"
																: "90deg"
														})`
													}}
												>
													&gt;
												</span>
											)}
										</SortButton>
									</TableTH>
									<TableTH>Email</TableTH>
									<TableTH>City</TableTH>
									<TableTH>Edit</TableTH>
									<TableTH>Delete</TableTH>
								</tr>
							</thead>
							<tbody>
								{data!.map((user) => (
									<User
										key={user.id}
										user={user}
									/>
								))}
							</tbody>
						</Table>
					)}
					{isError && (
						<Alert type="danger">
							Error occurred while fetching users
						</Alert>
					)}
					{(!data || data.length === 0) && (
						<Alert type="info">
							There is no users 😭 <br />
							Feel free to add one!
							<br />
							<br />
							<Button variant="default">
								<Link href="/users/new">
									Add a new user
								</Link>
							</Button>
						</Alert>
					)}
					{deleteUser && (
						<UserDeleteModal
							id={deleteUser.id}
							name={deleteUser.name}
						/>
					)}
				</>
			)}
		</UsersWrapper>
	);
}
