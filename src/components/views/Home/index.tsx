import { Button } from "@/components/shared/Button";
import { Header } from "@/components/shared/Header";
import { Wrapper } from "@/components/shared/Wrapper";
import { usersSort } from "@/store/slices/users-slice";
import { useAppDispatch, useAppSelector } from "@/utils/store";
import Link from "next/link";
import { useCallback } from "react";
import UsersList from "./UsersList";

export function Home() {
	const sort = useAppSelector(({ users }) => users.sort);

	const dispatch = useAppDispatch();

	const clearSort = useCallback(() => dispatch(usersSort(null)), [dispatch]);

	return (
		<Wrapper>
			<Header>
				<h1>Users List</h1>
				{sort && (
					<Button variant="danger" mode="fill" onClick={clearSort}>
						Clear sort
					</Button>
				)}
				<Button variant="default" mode="fill">
					<Link href="/add">Add user</Link>
				</Button>
			</Header>
			<UsersList />
		</Wrapper>
	);
}
