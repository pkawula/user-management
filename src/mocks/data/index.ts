import { v4 as uuid } from "uuid";
import { factory, primaryKey } from "@mswjs/data";
import { API_USERS } from "@/utils/constants/api-routes";
import { IUser } from "@/types/api";

export const db = factory({
	[API_USERS]: {
		city: String,
		email: String,
		name: String,
		username: String,
		id: primaryKey(uuid)
	}
});

const exampleUsers: IUser[] = [
	{
		city: "Winterfell",
		email: "jon@snow.com",
		name: "John Snow",
		username: "Wolf",
		id: uuid()
	},
	{
		city: "New York",
		email: "ychag@example.com",
		name: "John Doe",
		username: "johndoe",
		id: uuid()
	},
	{
		city: "Venice",
		email: "indiana@jones.com",
		name: "Indiana Jones",
		username: "Indy",
		id: uuid()
	}
];

exampleUsers.forEach((user) => db[API_USERS].create(user));
