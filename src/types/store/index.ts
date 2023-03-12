import { User } from "../api";

export interface UsersSlice {
	isFetching: boolean;
	error: unknown | null;
	originalData: User[];
	data: User[];
	sort: null | { by: "username"; order: "asc" | "desc" };
}
