import { useDeleteUserMutation } from "@/api/users-api";
import { Alert } from "@/components/shared/Alert";
import { Button } from "@/components/shared/Button";
import { Header } from "@/components/shared/Header";
import Modal from "@/components/shared/Modal";
import { userDeleteModalAction } from "@/store/slices/user-utils";
import { useAppDispatch } from "@/utils/store";
import { useCallback } from "react";
import styled from "styled-components";

interface UserDeleteModalProps {
	id: string;
	name: string;
}

const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 10px;
	padding: 10px 15px 15px;
`;

const Heading = styled.h2`
	margin: 0;
`;

const Paragraph = styled.p`
	margin: 0;
	padding: 15px;
`;

export default function UserDeleteModal({ id, name }: UserDeleteModalProps) {
	const dispatch = useAppDispatch();

	const closeModal = useCallback(() => dispatch(userDeleteModalAction(null)), [dispatch]);

	const [deleteUser, result] = useDeleteUserMutation();

	const handleDeleteUser = useCallback(
		() =>
			deleteUser(id).then(() => {
				closeModal();
			}),
		[id, deleteUser, closeModal]
	);

	return (
		<Modal closeModal={closeModal} testId="delete-user-modal">
			<Header>
				<Heading>Delete User</Heading>
			</Header>
			<hr />
			<Paragraph>Do you want to delete user: {name}?</Paragraph>
			<hr />
			<ButtonsWrapper>
				<Button variant="grey" onClick={closeModal}>
					Cancel
				</Button>
				<Button
					variant="danger"
					onClick={() => handleDeleteUser()}
					disabled={result.isLoading}
				>
					{result.isLoading ? "Deleting..." : "Delete"}
				</Button>
			</ButtonsWrapper>
			{result.isError && (
				<Alert type="danger">
					Something went wrong. Cannot delete user. Try again later.
				</Alert>
			)}
		</Modal>
	);
}
