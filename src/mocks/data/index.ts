import { v4 as uuid } from "uuid";
import { factory, primaryKey } from "@mswjs/data";
import { API_USERS } from "@/utils/constants/api-routes";
import { User } from "@/types/api";

export const db = factory({
	[API_USERS]: {
		city: String,
		email: String,
		name: String,
		username: String,
		id: primaryKey(uuid)
	}
});

export const exampleUsers: User[] = [
	{
		city: "Winterfell",
		email: "bar@bara.com",
		name: "Bar Bara",
		username: "Barbara",
		id: uuid()
	},
	{
		city: "New York",
		email: "achag@example.com",
		name: "Anthony Chag",
		username: "anno",
		id: uuid()
	},
	{
		city: "Los Angeles",
		email: "mark@facebook.com",
		name: "Mark Zucker",
		username: "Zucker",
		id: uuid()
	},
	{
		city: "San Francisco",
		email: "claudia@murray.com",
		name: "Claudia Murray",
		username: "claudia1234",
		id: uuid()
	}
];

exampleUsers.forEach((user) => db[API_USERS].create(user));
