import { Alert } from "@/components/shared/Alert";
import { Button } from "@/components/shared/Button";
import { Loading } from "@/components/shared/Loading";
import { Table, TableTH } from "@/components/shared/Table";
import { getUsersThunk } from "@/store/slices/users-slice";
import { useAppDispatch, useAppSelector } from "@/utils/store";
import Link from "next/link";
import { useEffect } from "react";
import styled from "styled-components";
import User from "./User";

const UsersWrapper = styled.div`
	padding: 10px;
	width: 100%;
	overflow-x: auto;
`;

export default function UsersList() {
	const { error, data, sort, isFetching } = useAppSelector(({ users }) => users);

	const dispatch = useAppDispatch();

	useEffect(() => {
		const apiCall = dispatch(getUsersThunk());

		return () => {
			apiCall.abort();
		};
	}, [dispatch]);

	return (
		<UsersWrapper>
			{isFetching ? (
				<Loading />
			) : (
				<>
					{data.length > 0 && (
						<Table>
							<thead>
								<tr>
									<TableTH>Id</TableTH>
									<TableTH>Name</TableTH>
									<TableTH>Username</TableTH>
									<TableTH>Email</TableTH>
									<TableTH>City</TableTH>
									<TableTH>Edit</TableTH>
									<TableTH>Delete</TableTH>
								</tr>
							</thead>
							<tbody>
								{data.map((user) => (
									<User
										key={user.id}
										user={user}
									/>
								))}
							</tbody>
						</Table>
					)}
					{error && (
						<Alert type="danger">
							Error occurred while fetching users
						</Alert>
					)}
					{data.length === 0 && (
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
				</>
			)}
		</UsersWrapper>
	);
}
