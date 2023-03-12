import { Button } from "@/components/shared/Button";
import { TableRow, TableTD } from "@/components/shared/Table";
import { type User as UserType } from "@/types/api";

interface UserProps {
	user: UserType;
}

export default function User({ user }: UserProps) {
	return (
		<TableRow>
			<TableTD>{user.id}</TableTD>
			<TableTD>{user.name}</TableTD>
			<TableTD>{user.username}</TableTD>
			<TableTD>{user.email}</TableTD>
			<TableTD>{user.city}</TableTD>
			<TableTD>
				<Button variant="orange">Edit</Button>
			</TableTD>
			<TableTD>
				<Button variant="danger">Delete</Button>
			</TableTD>
		</TableRow>
	);
}
