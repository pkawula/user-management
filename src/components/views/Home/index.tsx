import { sortData } from "@/api/users-api";
import { Button } from "@/components/shared/Button";
import { Header } from "@/components/shared/Header";
import { Wrapper } from "@/components/shared/Wrapper";
import { userSortAction } from "@/store/slices/user-utils";
import { useAppDispatch, useAppSelector } from "@/utils/store";
import Link from "next/link";
import { useCallback } from "react";
import styled from "styled-components";
import UsersList from "./UsersList";

const Heading = styled.h1`
	margin: 0;
`;

export function Home() {
	const sortDir = useAppSelector(({ userUtils }) => userUtils.sortDir);

	const dispatch = useAppDispatch();

	const clearSort = useCallback(() => {
		dispatch(userSortAction(null));
		dispatch(sortData(null));
	}, [dispatch]);

	return (
		<Wrapper>
			<Header>
				<Heading>Users List</Heading>
				{sortDir && (
					<Button variant="danger" mode="fill" onClick={clearSort}>
						Clear sort
					</Button>
				)}
				<Button variant="default" mode="fill">
					<Link href="/add">Add user</Link>
				</Button>
			</Header>
			<hr />
			<UsersList />
		</Wrapper>
	);
}
