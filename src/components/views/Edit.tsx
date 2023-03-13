import { useGetUserQuery } from "@/api/users-api";
import { skipToken } from "@reduxjs/toolkit/query";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Alert } from "../shared/Alert";
import { Header } from "../shared/Header";
import { Loading } from "../shared/Loading";
import { Wrapper } from "../shared/Wrapper";
import UserForm from "../UserForm";

const Heading = styled.h1`
	margin: 0;
`;

export default function EditUser() {
	const { query, isFallback } = useRouter();

	const result = useGetUserQuery(typeof query.id === "string" ? query.id : skipToken, {
		skip: isFallback
	});

	const { isLoading, error, data } = result;

	return (
		<Wrapper style={{ maxWidth: 500 }}>
			<Header>
				<Heading>Edit User</Heading>
			</Header>
			<hr />
			{isLoading ? (
				<Loading />
			) : (
				<>
					{data && <UserForm user={data} />}
					{error && (
						<Alert type="danger">
							Couldn&apos;t fetch user, try again later
						</Alert>
					)}
				</>
			)}
		</Wrapper>
	);
}
