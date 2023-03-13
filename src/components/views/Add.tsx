import styled from "styled-components";
import { Header } from "../shared/Header";
import { Wrapper } from "../shared/Wrapper";
import UserForm from "../UserForm";

const Heading = styled.h1`
	margin: 0;
`;

export default function AddUser() {
	return (
		<Wrapper style={{ maxWidth: 500 }}>
			<Header>
				<Heading>Add User</Heading>
			</Header>
			<hr />
			<UserForm />
		</Wrapper>
	);
}
