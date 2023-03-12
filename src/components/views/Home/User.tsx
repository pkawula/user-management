import { useDeleteUserMutation } from "@/api/users-api";
import { Button } from "@/components/shared/Button";
import { TableRow, TableTD } from "@/components/shared/Table";
import { userDeleteModalAction } from "@/store/slices/user-utils";
import { type User as UserType } from "@/types/api";
import { useAppDispatch } from "@/utils/store";
import Link from "next/link";
import { useCallback } from "react";

interface UserProps {
	user: UserType;
}

export default function User({ user }: UserProps) {
	const dispatch = useAppDispatch();

	const deleteUser = useCallback(() => dispatch(userDeleteModalAction(user)), [user, dispatch]);

	return (
		<TableRow>
			<TableTD>{user.id}</TableTD>
			<TableTD>{user.name}</TableTD>
			<TableTD>{user.username}</TableTD>
			<TableTD>{user.email}</TableTD>
			<TableTD>{user.city}</TableTD>
			<TableTD>
				<Button variant="orange">
					<Link href={`/edit/${user.id}`}>Edit</Link>
				</Button>
			</TableTD>
			<TableTD>
				<Button variant="danger" onClick={deleteUser}>
					Delete
				</Button>
			</TableTD>
		</TableRow>
	);
}
