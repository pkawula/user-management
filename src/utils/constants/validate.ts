import { z } from "zod";

export const userValidationSchema = z.object({
	name: z.string().min(1, { message: "Name is required" }),
	email: z.string().email().min(1, { message: "Email is required" }),
	city: z.string().min(1, { message: "City is required" }),
	username: z.string().min(1, { message: "Username is required" }),
	id: z.string().optional()
});

export type UserFormType = z.infer<typeof userValidationSchema>;
